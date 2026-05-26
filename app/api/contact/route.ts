import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, services, details } = body;

    const apiKey = process.env.RESEND_API_KEY;

    // Check if the API key is set
    if (!apiKey) {
      console.warn("⚠️ RESEND_API_KEY is not set in environment variables. Email mock success logged below:");
      console.log("Mock Email Data:", {
        to: "softcr8ers@gmail.com",
        subject: `New Lead: ${name} - SoftCr8ors`,
        data: body
      });
      return NextResponse.json({ 
        success: true, 
        message: "Development Mock Success: Resend API key is not configured. Add RESEND_API_KEY to your .env file to send real emails." 
      });
    }

    const url = new URL(request.url);
    const origin = url.origin;

    // Construct the premium HTML layout for the email
    const emailHtml = `
      <div style="background-color: #f6f9fc; padding: 40px 20px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
        <div style="max-width: 600px; margin: 0 auto; border-radius: 20px; background-color: #ffffff; box-shadow: 0 10px 30px rgba(0,0,0,0.05); overflow: hidden; border: 1px solid #eef2f6;">
          
          <!-- Header Banner -->
          <div style="background-color: #ffffff; padding: 35px 30px; text-align: center; border-bottom: 1px solid #eef2f6;">
            <img src="https://ik.imagekit.io/o5vhmyokl/logo.webp" alt="SoftCr8ors Logo" style="height: 48px; max-height: 48px; width: auto; display: block; margin: 0 auto 12px auto;" />
            <p style="color: #080B4E; margin: 0; font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase;">New Project Lead</p>
          </div>
          
          <!-- Content Body -->
          <div style="padding: 40px 30px;">
            <p style="font-size: 16px; color: #334155; line-height: 1.6; margin: 0 0 25px 0; font-weight: 500;">
              Hello Team,
            </p>
            <p style="font-size: 14px; color: #475569; line-height: 1.6; margin: 0 0 25px 0;">
              You have received a new high-intent project inquiry submitted from your website's contact form. Here are the client's requirements:
            </p>
            
            <!-- Lead Information Table -->
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
              <tr>
                <td style="padding: 12px 0; font-weight: 600; color: #1e293b; width: 140px; border-bottom: 1px solid #f1f5f9; font-size: 13.5px;">Full Name:</td>
                <td style="padding: 12px 0; color: #334155; border-bottom: 1px solid #f1f5f9; font-size: 13.5px; font-weight: 500;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; font-weight: 600; color: #1e293b; border-bottom: 1px solid #f1f5f9; font-size: 13.5px;">Email Address:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-size: 13.5px; font-weight: 500;"><a href="mailto:${email}" style="color: #1620f0; text-decoration: none; border-bottom: 1px dashed #1620f0;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px 0; font-weight: 600; color: #1e293b; border-bottom: 1px solid #f1f5f9; font-size: 13.5px;">Phone Number:</td>
                <td style="padding: 12px 0; color: #334155; border-bottom: 1px solid #f1f5f9; font-size: 13.5px; font-weight: 500;">
                  <a href="tel:${phone}" style="color: #334155; text-decoration: none;">${phone}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; font-weight: 600; color: #1e293b; border-bottom: 1px solid #f1f5f9; font-size: 13.5px; vertical-align: top;">Services:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-size: 13.5px;">
                  ${services && services.length > 0 
                    ? services.map((s: string) => `<span style="display: inline-block; background-color: #f0f4ff; color: #1620f0; padding: 4px 10px; border-radius: 8px; font-size: 11px; font-weight: 600; margin: 2px 4px 2px 0; border: 1px solid #dbeafe;">${s}</span>`).join("")
                    : `<span style="color: #94a3b8; font-style: italic;">None selected</span>`
                  }
                </td>
              </tr>
            </table>
            
            <!-- Message Details Box -->
            <div style="background-color: #fafafa; border-left: 4px solid #a906c9; padding: 20px; border-radius: 8px; border-top: 1px solid #f1f5f9; border-right: 1px solid #f1f5f9; border-bottom: 1px solid #f1f5f9; margin-top: 10px;">
              <h4 style="margin: 0 0 10px 0; color: #1e293b; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">Project Details / Message</h4>
              <p style="margin: 0; color: #334155; font-size: 13.5px; line-height: 1.6; white-space: pre-wrap; font-weight: 400;">${details || "No details provided."}</p>
            </div>
            
          </div>
          
          <!-- Footer Branding -->
          <div style="text-align: center; font-size: 11px; color: #94a3b8; border-top: 1px solid #f1f5f9; padding: 25px 30px; background-color: #fafafa;">
            <p style="margin: 0 0 6px 0; font-weight: 600; color: #64748b;">SoftCr8ors Development Studio</p>
            <p style="margin: 0;">This email is an automated transmission regarding an active inquiry.</p>
          </div>
          
        </div>
      </div>
    `;

    // Try sending email to softcr8ers@gmail.com first
    let toEmail = "softcr8ers@gmail.com";
    let response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        from: "SoftCr8ors Contact <onboarding@resend.dev>",
        to: toEmail,
        subject: `🔥 New Project Lead from ${name}`,
        html: emailHtml
      })
    });

    let data = await response.json();

    // Check if error is due to Resend onboarding restricted recipient
    if (!response.ok && data.message && (
      data.message.includes("testing emails") || 
      data.message.includes("own email address") ||
      data.message.includes("techbyreeba@gmail.com")
    )) {
      console.warn("⚠️ Resend API is in unverified onboarding mode. Automatically redirecting email to verified address techbyreeba@gmail.com...");
      
      toEmail = "techbyreeba@gmail.com";
      response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          from: "SoftCr8ors Contact <onboarding@resend.dev>",
          to: toEmail,
          subject: `🔥 [SANDBOX REDIRECT] New Project Lead from ${name}`,
          html: `
            <div style="background-color: #fff9e6; border: 1px solid #ffe58f; padding: 15px; border-radius: 10px; margin-bottom: 25px; font-family: 'Segoe UI', system-ui, sans-serif; font-size: 13px; color: #b78103; line-height: 1.5;">
              <strong>ℹ️ Resend Sandbox Redirection:</strong> This email was redirected to your registered account owner address (<strong>techbyreeba@gmail.com</strong>) because the target domain of <strong>softcr8ers@gmail.com</strong> is not verified in your Resend Dashboard. Verify your domain at <a href="https://resend.com/domains" style="color: #1620f0; font-weight: 600;">resend.com/domains</a> to send emails to any recipient.
            </div>
            ${emailHtml}
          `
        })
      });
      
      data = await response.json();
    }

    if (!response.ok) {
      throw new Error(data.message || "Resend API returned an error");
    }

    return NextResponse.json({ success: true, id: data.id });
  } catch (error: any) {
    console.error("❌ Resend API route error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to process lead email" },
      { status: 500 }
    );
  }
}
