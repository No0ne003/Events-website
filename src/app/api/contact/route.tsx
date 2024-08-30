import { NextRequest, NextResponse } from "next/server";
import { render } from "@react-email/components";
import { transporter, smtpEmail } from "@/lib/nodemailer";
import { Email } from "@/components/email";

export const maxDuration = 60; 

export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json();
  const { name, email, message, mobileNumber, headOffice } = body;

  const emailHtml = render(
    <Email
      name={name}
      email={email}
      message={message}
      mobielNumber={mobileNumber}
      headOffice={headOffice}
    />,
  );

  const options = {
    from: smtpEmail,
    to: smtpEmail,
    subject: "New Form Submission",
    html: emailHtml,
  };

  try {
    // Send email using the transporter
    await transporter.sendMail(options);
  } catch (error) {
    console.error("Failed to send email:", error);
  }
  return new Response("OK");
}
