import { NextRequest, NextResponse } from "next/server";
import { render } from "@react-email/components";
import { transporter, smtpEmail } from "@/lib/nodemailer";
import { Email } from "@/components/email";

const allowedOrigins = ["https://eventswebsite.vercel.app"];

export const maxDuration = 60;

export async function POST(req: NextRequest) {
	const origin = req.headers.get("origin");

	if (!allowedOrigins.includes(origin || "")) {
		return NextResponse.json(
			{ error: "Access denied: Origin not allowed." },
			{ status: 403 },
		);
	}

	let body;
	try {
		body = await req.json();
	} catch (error) {
		return NextResponse.json(
			{ error: "Invalid JSON payload." },
			{ status: 400 },
		);
	}

	const { name, email, message, mobileNumber, headOffice } = body;

	if (!name || !email || !message) {
		return NextResponse.json(
			{ error: "Missing required fields: name, email, or message." },
			{ status: 400 },
		);
	}

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
		// Attempt to send email using the transporter
		await transporter.sendMail(options);
	} catch (error) {
		console.error("Failed to send email:", error);
		return NextResponse.json(
			{ error: "Failed to send email. Please try again later." },
			{ status: 500 },
		);
	}

	return NextResponse.json(
		{ message: "Form submission successful. Email sent." },
		{ status: 200 },
	);
}
