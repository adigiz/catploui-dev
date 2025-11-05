import { NextRequest, NextResponse } from 'next/server';
import storeData from '@/utils/storeData';

// Option 1: Mailgun REST API (Recommended)
import FormData from 'form-data';
import Mailgun from 'mailgun.js';

// Option 2: Mailgun SMTP (Uncomment to use)

export async function POST(request: NextRequest) {
  try {
    const requestData = await request.json();
    
    // Find the selected store
    const selectedStore = storeData.find(store => store.slug === requestData.preferredLocation);
    
    if (!selectedStore) {
      return NextResponse.json(
        { error: 'Store not found' },
        { status: 400 }
      );
    }

    // Verify hCaptcha token
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

    const mailgun = new Mailgun(FormData);
    const mg = mailgun.client({
      username: 'api',
      key: process.env.MAILGUN_API_KEY || '',
      url: 'https://api.mailgun.net',
    });

    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Job Application</title>
      </head>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 20px; background-color: #f4f4f4;">
        <div style="max-width: 600px; margin: 0 auto; background-color: white; border-radius: 10px; overflow: hidden; box-shadow: 0 0 20px rgba(0,0,0,0.1);">
          
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%); color: white; padding: 30px; text-align: center;">
            <h1 style="margin: 0; font-size: 28px; font-weight: bold;">CAP'T LOUI</h1>
            <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">New Job Application Received</p>
          </div>

          <!-- Store Info -->
          <div style="background-color: #f8f9fa; padding: 20px; border-bottom: 1px solid #e9ecef;">
            <h2 style="color: #d32f2f; margin: 0 0 10px 0; font-size: 20px;">Store Location: ${selectedStore.name}</h2>
            <p style="margin: 0; color: #666; font-size: 14px;">${selectedStore.address}</p>
            <p style="margin: 5px 0 0 0; color: #666; font-size: 14px;">${selectedStore.phone}</p>
          </div>
          
          <!-- Applicant Info -->
          <div style="padding: 30px;">
            <h3 style="color: #333; margin: 0 0 20px 0; font-size: 18px; border-bottom: 2px solid #d32f2f; padding-bottom: 10px;">Applicant Information</h3>
            
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
              <tr>
                <td style="padding: 12px 0; font-weight: bold; width: 140px; color: #555;">Full Name:</td>
                <td style="padding: 12px 0; color: #333;">${requestData.firstName} ${requestData.lastName}</td>
              </tr>
              <tr style="background-color: #f8f9fa;">
                <td style="padding: 12px 0; font-weight: bold; color: #555;">Email:</td>
                <td style="padding: 12px 0;">
                  <a href="mailto:${requestData.email}" style="color: #d32f2f; text-decoration: none;">${requestData.email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; font-weight: bold; color: #555;">Phone:</td>
                <td style="padding: 12px 0;">
                  <a href="tel:${requestData.phoneNumber}" style="color: #d32f2f; text-decoration: none;">${requestData.phoneNumber}</a>
                </td>
              </tr>
              <tr style="background-color: #f8f9fa;">
                <td style="padding: 12px 0; font-weight: bold; color: #555;">Position:</td>
                <td style="padding: 12px 0; color: #333;">
                  <span style="background-color: #d32f2f; color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: bold;">
                    ${requestData.position}
                  </span>
                </td>
              </tr>
              ${requestData.availability ? `
              <tr>
                <td style="padding: 12px 0; font-weight: bold; color: #555;">Availability:</td>
                <td style="padding: 12px 0; color: #333;">${requestData.availability}</td>
              </tr>
              ` : ''}
            </table>
            
            ${requestData.previousExperience ? `
            <div style="margin-bottom: 25px;">
              <h4 style="color: #d32f2f; margin: 0 0 15px 0; font-size: 16px;">Previous Experience</h4>
              <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #d32f2f;">
                <p style="margin: 0; white-space: pre-wrap; line-height: 1.6;">${requestData.previousExperience}</p>
              </div>
            </div>
            ` : ''}
            
            ${requestData.additionalComments ? `
            <div style="margin-bottom: 25px;">
              <h4 style="color: #d32f2f; margin: 0 0 15px 0; font-size: 16px;">Additional Comments</h4>
              <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #d32f2f;">
                <p style="margin: 0; white-space: pre-wrap; line-height: 1.6;">${requestData.additionalComments}</p>
              </div>
            </div>
            ` : ''}
            
            <!-- Resume Info -->
            <div style="background-color: ${requestData.resume && requestData.resume.name ? '#e8f5e8' : '#fff3cd'}; padding: 20px; border-radius: 8px; border: 1px solid ${requestData.resume && requestData.resume.name ? '#28a745' : '#ffc107'}; text-align: center;">
              <h4 style="margin: 0 0 10px 0; color: ${requestData.resume && requestData.resume.name ? '#155724' : '#856404'}; font-size: 16px;">
                Resume Information
              </h4>
              <p style="margin: 0; color: ${requestData.resume && requestData.resume.name ? '#155724' : '#856404'}; font-weight: bold;">
                ${requestData.resume && requestData.resume.name
                  ? `Resume attached: ${requestData.resume.name}` 
                  : 'No resume provided'
                }
              </p>
            </div>
          </div>

          <!-- Footer -->
          <div style="background-color: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #e9ecef;">
            <p style="margin: 0; color: #666; font-size: 12px; line-height: 1.4;">
              This application was submitted through the Cap't Loui career portal.<br>
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

    // Send main email via Mailgun REST API with attachment
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    const emailData: any = {
      from: `Cap't Loui Careers <careers@${process.env.MAILGUN_DOMAIN}>`,
      to: [selectedStore.email || process.env.DEFAULT_STORE_EMAIL!],
      cc: process.env.HR_EMAIL ? [process.env.HR_EMAIL] : undefined,
      'h:Reply-To': requestData.email,
      subject: `New Job Application - ${requestData.position} - ${selectedStore.name}`,
      html: emailHtml,
      'o:tag': ['job-application', 'store-notification'],
      'o:tracking': true,
    };

    // Add resume attachment if provided
    if (requestData.resume && requestData.resume.data) {
      const resumeBuffer = Buffer.from(requestData.resume.data, 'base64');
      emailData.attachment = {
        data: resumeBuffer,
        filename: requestData.resume.name,
        contentType: requestData.resume.type
      };
    }

    await mg.messages.create(process.env.MAILGUN_DOMAIN!, emailData);

    // Send confirmation email to applicant
    const confirmationHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Application Confirmation</title>
      </head>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 20px; background-color: #f4f4f4;">
        <div style="max-width: 600px; margin: 0 auto; background-color: white; border-radius: 10px; overflow: hidden; box-shadow: 0 0 20px rgba(0,0,0,0.1);">
          
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%); color: white; padding: 30px; text-align: center;">
            <h1 style="margin: 0; font-size: 28px; font-weight: bold;">CAP'T LOUI</h1>
            <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">Application Confirmation</p>
          </div>

          <!-- Content -->
          <div style="padding: 40px 30px;">
            <h2 style="color: #d32f2f; margin: 0 0 20px 0;">Thank You, ${requestData.firstName}!</h2>
            
            <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6;">
              We have successfully received your application for the <strong>${requestData.position}</strong> position at our <strong>${selectedStore.name}</strong> location.
            </p>

            <div style="background-color: #f8f9fa; padding: 25px; border-radius: 8px; border-left: 4px solid #d32f2f; margin: 25px 0;">
              <h3 style="margin: 0 0 15px 0; color: #d32f2f; font-size: 18px;">Application Summary</h3>
              <ul style="margin: 0; padding-left: 20px;">
                <li style="margin-bottom: 8px;"><strong>Position:</strong> ${requestData.position}</li>
                <li style="margin-bottom: 8px;"><strong>Location:</strong> ${selectedStore.name}</li>
                <li style="margin-bottom: 8px;"><strong>Submitted:</strong> ${new Date().toLocaleDateString()}</li>
                <li style="margin-bottom: 8px;"><strong>Resume:</strong> ${requestData.resume && requestData.resume.name ? 'Attached' : 'Not provided'}</li>
              </ul>
            </div>

            <p style="margin: 25px 0 20px 0; font-size: 16px; line-height: 1.6;">
              Our hiring team will carefully review your application and contact you if your qualifications match our current needs. This process typically takes 3-5 business days.
            </p>

            <div style="background-color: #e3f2fd; padding: 20px; border-radius: 8px; text-align: center; margin: 25px 0;">
              <p style="margin: 0; color: #1976d2; font-weight: bold;">
                Questions? Contact ${selectedStore.name} directly at ${selectedStore.phone}
              </p>
            </div>

            <p style="margin: 25px 0 0 0; font-size: 16px; line-height: 1.6;">
              Thank you for your interest in joining the Cap't Loui family!
            </p>

            <p style="margin: 20px 0 0 0; font-size: 16px; line-height: 1.6;">
              Best regards,<br>
              <strong>The Cap't Loui Hiring Team</strong>
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
      from: `Cap't Loui Careers <careers@${process.env.MAILGUN_DOMAIN}>`,
      to: [requestData.email],
      subject: `Application Received - ${requestData.position} at ${selectedStore.name}`,
      html: confirmationHtml,
      'o:tag': ['job-application', 'confirmation'],
      'o:tracking': true,
    });


    return NextResponse.json(
      { message: 'Thank You. Application sent successfully!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send application. Please try again.' },
      { status: 500 }
    );
  }
}
