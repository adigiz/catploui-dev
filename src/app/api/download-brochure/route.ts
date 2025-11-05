import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, firstName, lastName } = body;

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const formData = new FormData();
    formData.append("EMAIL", email);
    formData.append("FNAME", firstName || "");
    formData.append("LNAME", lastName || ""); // Last Name field
    formData.append("MMERGE3", ""); // Birthday month (empty for now)
    formData.append("MMERGE4", ""); // Birthday day (empty for now)
    formData.append("tags", "9321523");
    formData.append("b_6df9f3125631eaaeac7668f67_164f173886", "");

    // Submit to Mailchimp
    try {
      await fetch(
        "https://captloui.us11.list-manage.com/subscribe/post?u=6df9f3125631eaaeac7668f67&id=164f173886&f_id=00789ce0f0",
        {
          method: "POST",
          body: formData,
          mode: "no-cors", // Required for Mailchimp
        }
      );
    } catch (mailchimpError) {
      console.error("Mailchimp submission failed:", mailchimpError);
    }

    return NextResponse.json({
      success: true,
      message: "Brochure download request processed successfully",
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Brochure download error:", error);

    return NextResponse.json(
      {
        error: "Failed to process brochure download request",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
