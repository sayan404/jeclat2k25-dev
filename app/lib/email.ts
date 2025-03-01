export async function sendEmail(options: {
  to: { email: string; name?: string }[];
  subject: string;
  htmlContent: string;
  sender: { name: string; email: string };
}) {
  // In development, just log the email
  if (process.env.NODE_ENV === "development") {
    console.log("Development mode - Email would be sent:", {
      ...options,
      apiKey: process.env.BREVO_API_KEY?.slice(0, 10) + "...",
    });
    return { success: true, message: "Email logged (development mode)" };
  }

  // Production code continues here...
  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": process.env.BREVO_API_KEY!,
        "content-type": "application/json",
      },
      body: JSON.stringify(options),
    });
    console.log("response", response);

    const data = await response.json();
    if (!response.ok) {
      // Check if it's an IP whitelist error
      if (data.message?.includes("unrecognised IP address")) {
        const ipAddress = data.message.match(
          /\b(?:[0-9a-f]{1,4}:){7}[0-9a-f]{1,4}\b|\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/i
        )?.[0];
        throw new Error(
          `IP address ${ipAddress} needs to be whitelisted. Please add it in Brevo settings: https://app.brevo.com/security/authorised_ips`
        );
      }
      throw new Error(data.message || "Failed to send email");
    }

    return { success: true, message: "Email sent successfully" };
  } catch (error: any) {
    console.error("Error sending email:", error);
    return {
      success: false,
      message: error.message || "Failed to send email",
      isIpError: error.message?.includes("needs to be whitelisted"),
    };
  }
}
