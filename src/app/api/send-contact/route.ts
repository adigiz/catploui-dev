import { NextRequest, NextResponse } from 'next/server';
import storeData from '@/utils/storeData';

// Mailgun REST API
import FormData from 'form-data';
import Mailgun from 'mailgun.js';

export async function POST(request: NextRequest) {
  try {
    const requestData = await request.json();

    const hcaptchaResponse = await fetch('https://hcaptcha.com/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${process.env.HCAPTCHA_SECRET_KEY}&response=${requestData.hcaptchaToken}`
    });

    const hcaptchaData = await hcaptchaResponse.json();
    if (!hcaptchaData.success) {
      return NextResponse.json(
        { error: 'Invalid security verification. Please try again.' },
        { status: 400 }
      );
    }

    // Determine recipient and CC based on location selection
    let recipientEmail = process.env.CORPORATE_EMAIL || process.env.DEFAULT_STORE_EMAIL!;
    let recipientName = 'Cap\'t Loui HQ';
    let selectedStore = null;
    let shouldCC = false;
    const ccEmail = process.env.CORPORATE_EMAIL || 'info@captloui.com';

    if (requestData.location !== 'hq') {
      // Find the selected store
      selectedStore = storeData.find(store => store.slug === requestData.location);
      if (selectedStore) {
        recipientEmail = selectedStore.email || recipientEmail;
        recipientName = selectedStore.name;
        shouldCC = true; // CC HQ when sending to store
      }
    }

    // Initialize Mailgun
    const mailgun = new Mailgun(FormData);
    const mg = mailgun.client({
      username: 'api',
      key: process.env.MAILGUN_API_KEY || '',
      url: 'https://api.mailgun.net',
    });

    // Create subject line with location info
    const emailSubject = `Customer Contact: ${requestData.subject} - ${selectedStore ? selectedStore.name : 'Cap\'t Loui HQ'}`;

    // Email HTML template
    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Customer Contact</title>
      </head>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 20px; background-color: #f4f4f4;">
        <div style="max-width: 600px; margin: 0 auto; background-color: white; border-radius: 10px; overflow: hidden; box-shadow: 0 0 20px rgba(0,0,0,0.1);">
          
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%); color: white; padding: 30px; text-align: center;">
            <h1 style="margin: 0; font-size: 28px; font-weight: bold;">CAP'T LOUI</h1>
            <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">New Customer Contact</p>
          </div>

          ${selectedStore ? `
          <!-- Store Info -->
          <div style="background-color: #f8f9fa; padding: 20px; border-bottom: 1px solid #e9ecef;">
            <h2 style="color: #d32f2f; margin: 0 0 10px 0; font-size: 20px;">Store: ${selectedStore.name}</h2>
            <p style="margin: 0; color: #666; font-size: 14px;">${selectedStore.address}</p>
            <p style="margin: 5px 0 0 0; color: #666; font-size: 14px;">${selectedStore.phone}</p>
          </div>
          ` : `
          <!-- Corporate Info -->
          <div style="background-color: #f8f9fa; padding: 20px; border-bottom: 1px solid #e9ecef;">
            <h2 style="color: #d32f2f; margin: 0 0 10px 0; font-size: 20px;">Cap't Loui HQ</h2>
            <p style="margin: 0; color: #666; font-size: 14px;">Corporate headquarters inquiry</p>
          </div>
          `}

          <!-- Contact Info -->
          <div style="padding: 30px;">
            <h3 style="color: #333; margin: 0 0 20px 0; font-size: 18px; border-bottom: 2px solid #d32f2f; padding-bottom: 10px;">Customer Information</h3>
            
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
              <tr>
                <td style="padding: 12px 0; font-weight: bold; width: 120px; color: #555;">Name:</td>
                <td style="padding: 12px 0; color: #333;">${requestData.name}</td>
              </tr>
              <tr style="background-color: #f8f9fa;">
                <td style="padding: 12px 0; font-weight: bold; color: #555;">Phone:</td>
                <td style="padding: 12px 0;">
                  <a href="tel:${requestData.phoneNumber}" style="color: #d32f2f; text-decoration: none;">${requestData.phoneNumber}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; font-weight: bold; color: #555;">Email:</td>
                <td style="padding: 12px 0;">
                  <a href="mailto:${requestData.email}" style="color: #d32f2f; text-decoration: none;">${requestData.email}</a>
                </td>
              </tr>
              <tr style="background-color: #f8f9fa;">
                <td style="padding: 12px 0; font-weight: bold; color: #555;">Subject:</td>
                <td style="padding: 12px 0; color: #333;">${requestData.subject}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; font-weight: bold; color: #555;">Location:</td>
                <td style="padding: 12px 0; color: #333;">${selectedStore ? selectedStore.name : 'Cap\'t Loui HQ'}</td>
              </tr>
            </table>
            
            <div style="margin-bottom: 25px;">
              <h4 style="color: #d32f2f; margin: 0 0 15px 0; font-size: 16px;">Message</h4>
              <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #d32f2f;">
                <p style="margin: 0; white-space: pre-wrap; line-height: 1.6;">${requestData.message}</p>
              </div>
            </div>

            ${shouldCC ? `
            <div style="background-color: #e3f2fd; padding: 15px; border-radius: 8px; border-left: 4px solid #1976d2; margin: 20px 0;">
              <p style="margin: 0; color: #1976d2; font-size: 14px;">
                <strong>Note:</strong> Cap't Loui HQ has been CC'd on this message for tracking purposes.
              </p>
            </div>
            ` : ''}
          </div>

          <!-- Footer -->
          <div style="background-color: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #e9ecef;">
            <p style="margin: 0; color: #666; font-size: 12px; line-height: 1.4;">
              This message was submitted through the Cap't Loui contact portal.<br>
              <strong>Submitted on:</strong> ${new Date().toLocaleString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </p>
          </div>
        </div>
      </body>
      </html>
    `;

    /* eslint-disable  @typescript-eslint/no-explicit-any */
    const emailData: any = {
      from: `Cap't Loui Customer Service <contact@${process.env.MAILGUN_DOMAIN}>`,
      to: [recipientEmail],
      'h:Reply-To': requestData.email,
      'h:List-Unsubscribe': `<mailto:unsubscribe@${process.env.MAILGUN_DOMAIN}>`,
      'h:X-Mailgun-Tag': 'customer-contact',
      'h:X-Priority': '3',
      subject: emailSubject,
      html: emailHtml,
      text: `
New Customer Contact

Customer Information:
Name: ${requestData.name}
Phone: ${requestData.phoneNumber}
Email: ${requestData.email}
Subject: ${requestData.subject}
Location: ${selectedStore ? selectedStore.name : 'Cap\'t Loui HQ'}

${selectedStore ? `Store: ${selectedStore.name}\nAddress: ${selectedStore.address}\nPhone: ${selectedStore.phone}\n` : 'Routed to: Cap\'t Loui HQ\n'}

Message:
${requestData.message}

${shouldCC ? '\nNote: Cap\'t Loui HQ has been CC\'d on this message for tracking purposes.\n' : ''}

Submitted: ${new Date().toLocaleString()}
      `,
      'o:tag': ['customer-contact', selectedStore ? 'store-specific' : 'hq'],
      'o:tracking': true
    };

    // Add CC if sending to store
    if (shouldCC) {
      emailData.cc = [ccEmail];
    }

    await mg.messages.create(process.env.MAILGUN_DOMAIN!, emailData);

    // Send confirmation email to customer
    const confirmationHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Contact Confirmation</title>
      </head>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 20px; background-color: #f4f4f4;">
        <div style="max-width: 600px; margin: 0 auto; background-color: white; border-radius: 10px; overflow: hidden; box-shadow: 0 0 20px rgba(0,0,0,0.1);">
          
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%); color: white; padding: 30px; text-align: center;">
            <h1 style="margin: 0; font-size: 28px; font-weight: bold;">CAP'T LOUI</h1>
            <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">Message Received</p>
          </div>

          <!-- Content -->
          <div style="padding: 40px 30px;">
            <h2 style="color: #d32f2f; margin: 0 0 20px 0;">Thank You, ${requestData.name}!</h2>
            
            <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6;">
              We have received your message and appreciate you contacting Cap't Loui.
            </p>

            <div style="background-color: #f8f9fa; padding: 25px; border-radius: 8px; border-left: 4px solid #d32f2f; margin: 25px 0;">
              <h3 style="margin: 0 0 15px 0; color: #d32f2f; font-size: 18px;">Your Message Details</h3>
              <p style="margin: 0 0 10px 0;"><strong>Sent to:</strong> ${recipientName}</p>
              <p style="margin: 0 0 10px 0;"><strong>Subject:</strong> ${requestData.subject}</p>
              <p style="margin: 0 0 10px 0;"><strong>Location:</strong> ${selectedStore ? selectedStore.name : 'Cap\'t Loui HQ'}</p>
              <p style="margin: 0;"><strong>Submitted:</strong> ${new Date().toLocaleDateString()}</p>
            </div>

            <p style="margin: 25px 0 20px 0; font-size: 16px; line-height: 1.6;">
              ${selectedStore 
                ? `Our ${selectedStore.name} team will review your message and respond within 24-48 hours.`
                : 'Our corporate team will review your message and respond within 24-48 hours.'
              }
            </p>

            ${selectedStore ? `
            <div style="background-color: #e3f2fd; padding: 20px; border-radius: 8px; text-align: center; margin: 25px 0;">
              <p style="margin: 0; color: #1976d2; font-weight: bold;">
                For immediate assistance, contact ${selectedStore.name} directly at ${selectedStore.phone}
              </p>
            </div>
            ` : ''}

            <p style="margin: 25px 0 0 0; font-size: 16px; line-height: 1.6;">
              Thank you for choosing Cap't Loui!
            </p>

            <p style="margin: 20px 0 0 0; font-size: 16px; line-height: 1.6;">
              Best regards,<br>
              <strong>The Cap't Loui Team</strong>
            </p>
          </div>

          <!-- Footer -->
          <div style="background-color: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #e9ecef;">
            <p style="margin: 0; color: #666; font-size: 12px;">
              This is an automated confirmation email. Please do not reply to this message.
            </p>
          </div>
        </div>
      </body>
      </html>
    `;

    await mg.messages.create(process.env.MAILGUN_DOMAIN!, {
      from: `Cap't Loui Customer Service <contact@${process.env.MAILGUN_DOMAIN}>`,
      to: [requestData.email],
      subject: `Message Received - ${requestData.subject} - ${selectedStore ? selectedStore.name : 'Cap\'t Loui HQ'}`,
      html: confirmationHtml,
      text: `
Contact Confirmation - Cap't Loui

Thank You, ${requestData.name}!

We have received your message and appreciate you contacting Cap't Loui.

Your Message Details:
Sent to: ${recipientName}
Subject: ${requestData.subject}
Location: ${selectedStore ? selectedStore.name : 'Cap\'t Loui HQ'}
Submitted: ${new Date().toLocaleDateString()}

${selectedStore 
  ? `Our ${selectedStore.name} team will review your message and respond within 24-48 hours.`
  : 'Our corporate team will review your message and respond within 24-48 hours.'
}

${selectedStore ? `For immediate assistance, contact ${selectedStore.name} directly at ${selectedStore.phone}` : ''}

Thank you for choosing Cap't Loui!

Best regards,
The Cap't Loui Team
      `,
      'o:tag': ['contact-confirmation'],
      'o:tracking': true,
    });

    return NextResponse.json(
      { 
        message: selectedStore 
          ? `Thank You. Message sent successfully to ${selectedStore.name}! Cap't Loui HQ has been notified.` 
          : 'Thank You. Message sent successfully to Cap\'t Loui HQ!'
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending contact message:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}
