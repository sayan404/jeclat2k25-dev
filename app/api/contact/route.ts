export const config = {
  runtime: "edge",
};

import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/app/lib/email";

function validateEmail(email: string) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.json();

    // Validate required fields
    if (!formData.email) {
      return NextResponse.json(
        { message: "Email is required" },
        { status: 400 }
      );
    }

    if (!validateEmail(formData.email)) {
      return NextResponse.json({ message: "Invalid Email" }, { status: 400 });
    }

    // Add date & time (IST)
    const date = new Date().toLocaleDateString("en-UK", {
      timeZone: "Asia/Kolkata",
    });
    const time = new Date().toLocaleTimeString("en-US", {
      timeZone: "Asia/Kolkata",
    });

    // Prepare email content
    const emailOptions = {
      to: [
        {
          email: "admin@jeclat2k25.in",
          name: "JECLAT Admin",
        },
      ],
      subject: "New Contact Form Submission",
      htmlContent: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone || "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message || "No message provided"}</p>
      `,
      sender: {
        name: "JECLAT Contact Form",
        email: "admin@jeclat2k25.in",
      },
    };

    // Send the email
    const result = await sendEmail(emailOptions);
    console.log(result);
    if (!result.success) {
      if (result.isIpError) {
        // Return a more specific error for IP whitelisting issues
        return NextResponse.json(
          {
            message:
              "Server configuration required. Please contact the administrator.",
            details: result.message,
          },
          { status: 503 }
        );
      }
      return NextResponse.json({ message: result.message }, { status: 500 });
    }

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error(
      "Error sending contact form:",
      error.message || "Unknown error"
    );
    return NextResponse.json(
      { message: error.message || "Failed to send message" },
      { status: 500 }
    );
  }
}

export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 });
}
