// src/app/api/send/route.js
import { NextResponse } from "next/server";

// Mock function to simulate sending an email
const mockSendEmail = ({ from, to, subject, text }) => {
  console.log("Mock sending email:");
  console.log("From:", from);
  console.log("To:", to);
  console.log("Subject:", subject);
  console.log("Text:", text);

  // Simulate a successful response
  return Promise.resolve({
    success: true,
    message: "Email sent successfully",
  });
};

// Handle POST request
export async function POST(req) {
  try {
    // Parse the request body
    const { email, subject, message } = await req.json();
    console.log(email, subject, message);

    // Mock sending email
    const data = await mockSendEmail({
      from: "mock@example.com",
      to: ["rohailm288@gmail.com", email],
      subject: subject,
      text: `Subject: ${subject}\n\nThank you for contacting us!\n\nNew message submitted:\n${message}`,
    });

    // Return the mock response
    return NextResponse.json(data);
  } catch (error) {
    // Handle errors and return a JSON response
    console.error("Error:", error);
    return NextResponse.json({ error: error.message });
  }
}
