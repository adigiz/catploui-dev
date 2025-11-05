import { NextRequest, NextResponse } from "next/server";

// Mailgun REST API
import FormData from "form-data";
import Mailgun from "mailgun.js";

export async function POST(request: NextRequest) {
  try {
    const requestData = await request.json();

    // Validate required fields
    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "phoneNumber",
      "franchiseInterest",
      "interestState",
      "consentNewsletter",
      "hcaptchaToken",
    ];
    const missingFields = requiredFields.filter((field) => !requestData[field]);

    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(", ")}` },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(requestData.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Validate phone number format
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    if (!phoneRegex.test(requestData.phoneNumber)) {
      return NextResponse.json(
        { error: "Invalid phone number format" },
        { status: 400 }
      );
    }

    // Validate franchise interest is an array with at least one item
    if (
      !Array.isArray(requestData.franchiseInterest) ||
      requestData.franchiseInterest.length === 0
    ) {
      return NextResponse.json(
        { error: "Please select at least one franchise interest" },
        { status: 400 }
      );
    }

    // Verify hCaptcha token
    if (!requestData.hcaptchaToken) {
      return NextResponse.json(
        { error: "Security verification is required" },
        { status: 400 }
      );
    }

    const hcaptchaResponse = await fetch("https://hcaptcha.com/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${process.env.HCAPTCHA_SECRET_KEY}&response=${requestData.hcaptchaToken}`,
    });

    const hcaptchaData = await hcaptchaResponse.json();
    if (!hcaptchaData.success) {
      return NextResponse.json(
        { error: "Invalid security verification. Please try again." },
        { status: 400 }
      );
    }

    // Check if required environment variables are present
    if (
      !process.env.MAILGUN_API_KEY ||
      !process.env.MAILGUN_DOMAIN ||
      !process.env.INQUIRY_EMAIL
    ) {
      console.error("Missing required environment variables for email sending");
      return NextResponse.json(
        { error: "Email service configuration error. Please try again later." },
        { status: 500 }
      );
    }

    // Initialize Mailgun
    const mailgun = new Mailgun(FormData);
    const mg = mailgun.client({
      username: "api",
      key: process.env.MAILGUN_API_KEY || "",
      url: "https://api.mailgun.net",
    });

    // Email HTML template for franchise inquiry
    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Franchise Inquiry</title>
      </head>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 20px; background-color: #f4f4f4;">
        <div style="max-width: 700px; margin: 0 auto; background-color: white; border-radius: 10px; overflow: hidden; box-shadow: 0 0 20px rgba(0,0,0,0.1);">
          
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%); color: white; padding: 30px; text-align: center;">
            <h1 style="margin: 0; font-size: 28px; font-weight: bold;">CAP'T LOUI</h1>
            <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">New Franchise Inquiry</p>
          </div>

          <!-- Content -->
          <div style="padding: 30px;">
            <h3 style="color: #333; margin: 0 0 20px 0; font-size: 18px; border-bottom: 2px solid #d32f2f; padding-bottom: 10px;">Franchise Inquiry Details</h3>
            
            <!-- Personal Information Section -->
            <div style="margin-bottom: 25px;">
              <h4 style="color: #d32f2f; margin: 0 0 15px 0; font-size: 16px;">Personal Information</h4>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; width: 140px; color: #555;">Full Name:</td>
                  <td style="padding: 8px 0; color: #333;">${
                    requestData.firstName
                  } ${requestData.lastName}</td>
                </tr>
                <tr style="background-color: #f8f9fa;">
                  <td style="padding: 8px 0; font-weight: bold; color: #555;">Email:</td>
                  <td style="padding: 8px 0;">
                    <a href="mailto:${
                      requestData.email
                    }" style="color: #d32f2f; text-decoration: none;">${
      requestData.email
    }</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #555;">Phone:</td>
                  <td style="padding: 8px 0;">
                    <a href="tel:${
                      requestData.phoneNumber
                    }" style="color: #d32f2f; text-decoration: none;">${
      requestData.phoneNumber
    }</a>
                  </td>
                </tr>
              </table>
            </div>

            <!-- Franchise Information Section -->
            <div style="margin-bottom: 25px;">
              <h4 style="color: #d32f2f; margin: 0 0 15px 0; font-size: 16px;">Franchise Information</h4>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; width: 140px; color: #555;">Interests:</td>
                  <td style="padding: 8px 0; color: #333;">
                    ${requestData.franchiseInterest
                      .map(
                        (interest: string) =>
                          `<span style="background-color: #d32f2f; color: white; padding: 2px 8px; border-radius: 12px; font-size: 11px; margin-right: 5px; display: inline-block; margin-bottom: 5px;">${interest}</span>`
                      )
                      .join("")}
                  </td>
                </tr>
                <tr style="background-color: #f8f9fa;">
                  <td style="padding: 8px 0; font-weight: bold; color: #555;">State of Interest:</td>
                  <td style="padding: 8px 0; color: #333;">${
                    requestData.interestState
                  }</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #555;">Newsletter Consent:</td>
                  <td style="padding: 8px 0; color: #333;">${
                    requestData.consentNewsletter ? "Yes" : "No"
                  }</td>
                </tr>
              </table>
            </div>
          </div>

          <!-- Footer -->
          <div style="background-color: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #e9ecef;">
            <p style="margin: 0; color: #666; font-size: 12px; line-height: 1.4;">
              This franchise inquiry was submitted through the Cap't Loui franchise inquiry form.<br>
              <strong>Submitted on:</strong> ${new Date().toLocaleString(
                "en-US",
                {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                }
              )}
            </p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Send email to franchise team
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    const emailData: any = {
      from: `Cap't Loui Franchise <franchise@${process.env.MAILGUN_DOMAIN}>`,
      to: [process.env.INQUIRY_EMAIL!],
      "h:Reply-To": requestData.email,
      "h:List-Unsubscribe": `<mailto:unsubscribe@${process.env.MAILGUN_DOMAIN}>`,
      "h:X-Mailgun-Tag": "franchise-inquiry",
      "h:X-Priority": "2", // Higher priority for franchise inquiries
      subject: `New Franchise Inquiry - ${requestData.firstName} ${requestData.lastName} - ${requestData.interestState}`,
      html: emailHtml,
      text: `
New Franchise Inquiry

Personal Information:
Full Name: ${requestData.firstName} ${requestData.lastName}
Email: ${requestData.email}
Phone: ${requestData.phoneNumber}

Franchise Information:
Interests: ${requestData.franchiseInterest.join(", ")}
State of Interest: ${requestData.interestState}
Newsletter Consent: ${requestData.consentNewsletter ? "Yes" : "No"}

Submitted: ${new Date().toLocaleString()}
      `,
      "o:tag": ["franchise-inquiry"],
      "o:tracking": true,
    };

    try {
      await mg.messages.create(process.env.MAILGUN_DOMAIN!, emailData);
    } catch (emailError) {
      console.error("Error sending franchise inquiry email:", emailError);
      return NextResponse.json(
        { error: "Failed to send inquiry email. Please try again." },
        { status: 500 }
      );
    }

    // Send confirmation email to inquirer
    const confirmationHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Franchise Inquiry Confirmation</title>
      </head>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 20px; background-color: #f4f4f4;">
        <div style="max-width: 600px; margin: 0 auto; background-color: white; border-radius: 10px; overflow: hidden; box-shadow: 0 0 20px rgba(0,0,0,0.1);">
          
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%); color: white; padding: 30px; text-align: center;">
            <h1 style="margin: 0; font-size: 28px; font-weight: bold;">CAP'T LOUI</h1>
            <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">Franchise Inquiry Received</p>
          </div>

          <!-- Content -->
          <div style="padding: 40px 30px;">
            <h2 style="color: #d32f2f; margin: 0 0 20px 0;">Thank You, ${
              requestData.firstName
            }!</h2>
            
            <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6;">
              We have received your franchise inquiry and appreciate your interest in joining the Cap't Loui team.
            </p>

            <div style="background-color: #f8f9fa; padding: 25px; border-radius: 8px; border-left: 4px solid #d32f2f; margin: 25px 0;">
              <h3 style="margin: 0 0 15px 0; color: #d32f2f; font-size: 18px;">Your Franchise Inquiry</h3>
              <p style="margin: 0 0 10px 0;"><strong>Name:</strong> ${
                requestData.firstName
              } ${requestData.lastName}</p>
              <p style="margin: 0 0 10px 0;"><strong>State of Interest:</strong> ${
                requestData.interestState
              }</p>
              <p style="margin: 0 0 10px 0;"><strong>Franchise Interests:</strong> ${requestData.franchiseInterest.join(
                ", "
              )}</p>
              <p style="margin: 0;"><strong>Submitted:</strong> ${new Date().toLocaleDateString()}</p>
            </div>

            <p style="margin: 25px 0 20px 0; font-size: 16px; line-height: 1.6;">
              Our franchise development team will review your inquiry and respond within 24-48 hours with detailed information about our franchise opportunities.
            </p>

            <div style="background-color: #e3f2fd; padding: 20px; border-radius: 8px; text-align: center; margin: 25px 0;">
              <p style="margin: 0; color: #1976d2; font-weight: bold;">
                We're excited about the possibility of partnering with you!
              </p>
            </div>

            <p style="margin: 25px 0 0 0; font-size: 16px; line-height: 1.6;">
              Best regards,<br>
              <strong>The Cap't Loui Franchise Team</strong>
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

    try {
      await mg.messages.create(process.env.MAILGUN_DOMAIN!, {
        from: `Cap't Loui Franchise <franchise@${process.env.MAILGUN_DOMAIN}>`,
        to: [requestData.email],
        subject: `Franchise Inquiry Received - ${requestData.firstName} ${requestData.lastName}`,
        html: confirmationHtml,
        text: `
Franchise Inquiry Confirmation - Cap't Loui

Thank You, ${requestData.firstName}!

We have received your franchise inquiry and appreciate your interest in joining the Cap't Loui team.

Your Franchise Inquiry:
Name: ${requestData.firstName} ${requestData.lastName}
State of Interest: ${requestData.interestState}
Franchise Interests: ${requestData.franchiseInterest.join(", ")}
Submitted: ${new Date().toLocaleDateString()}

Our franchise development team will review your inquiry and respond within 24-48 hours with detailed information about our franchise opportunities.

We're excited about the possibility of partnering with you!

Best regards,
The Cap't Loui Franchise Team
        `,
        "o:tag": ["franchise-confirmation"],
        "o:tracking": true,
      });
    } catch (confirmationError) {
      console.error("Error sending confirmation email:", confirmationError);
      // Don't fail the entire request if confirmation email fails
    }

    return NextResponse.json(
      {
        message:
          "Thank you! Your franchise inquiry has been sent successfully! Our team will review your information and contact you within 24-48 hours.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending franchise inquiry:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
