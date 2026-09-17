import { Resend } from "resend";

const CONTACT_EMAIL = "info@americasfoodcourt.com";
const MAX_NAME_LENGTH = 80;
const MAX_MESSAGE_LENGTH = 5_000;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface ContactPayload {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function validatePayload(value: unknown): ContactPayload | null {
  if (!isRecord(value)) {
    return null;
  }

  const firstName = typeof value.firstName === "string" ? value.firstName.trim() : "";
  const lastName = typeof value.lastName === "string" ? value.lastName.trim() : "";
  const email = typeof value.email === "string" ? value.email.trim() : "";
  const message = typeof value.message === "string" ? value.message.trim() : "";

  if (
    !firstName ||
    !lastName ||
    !message ||
    firstName.length > MAX_NAME_LENGTH ||
    lastName.length > MAX_NAME_LENGTH ||
    message.length > MAX_MESSAGE_LENGTH ||
    !EMAIL_PATTERN.test(email) ||
    email.length > 254
  ) {
    return null;
  }

  return { firstName, lastName, email, message };
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !from) {
    console.error("Contact form email configuration is missing.");
    return Response.json(
      { error: "The contact form is temporarily unavailable." },
      { status: 503 },
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const contact = validatePayload(payload);
  if (!contact) {
    return Response.json(
      { error: "Please provide valid contact details." },
      { status: 400 },
    );
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: CONTACT_EMAIL,
      replyTo: contact.email,
      subject: `Contact form message from ${contact.firstName} ${contact.lastName}`,
      text: [
        `Name: ${contact.firstName} ${contact.lastName}`,
        `Email: ${contact.email}`,
        "",
        contact.message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend rejected the contact form email.", error);
      return Response.json(
        { error: "We could not send your message. Please try again." },
        { status: 502 },
      );
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error("Contact form email failed.", error);
    return Response.json(
      { error: "We could not send your message. Please try again." },
      { status: 500 },
    );
  }
}