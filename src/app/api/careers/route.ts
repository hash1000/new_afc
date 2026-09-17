import { Resend } from "resend";

const RECIPIENT_EMAIL = "info@americasfoodcourt.com";
const MAX_FIELD_LENGTH = 120;
const MAX_MESSAGE_LENGTH = 2_000;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[+\d][\d\s().-]{6,24}$/;
const POSITIONS = new Set([
  "Crew Member",
  "Shift Leader",
  "Assistant General Manager",
  "General Manager",
  "Franchise Operations Coordinator",
  "Other",
]);

interface CareersPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  position: string;
  location: string;
  message: string;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function validatePayload(value: unknown): CareersPayload | null {
  if (!isRecord(value)) {
    return null;
  }

  const getString = (field: keyof CareersPayload) =>
    typeof value[field] === "string" ? value[field].trim() : "";
  const payload: CareersPayload = {
    firstName: getString("firstName"),
    lastName: getString("lastName"),
    email: getString("email"),
    phone: getString("phone"),
    position: getString("position"),
    location: getString("location"),
    message: getString("message"),
  };

  if (
    !payload.firstName ||
    !payload.lastName ||
    !payload.email ||
    !payload.phone ||
    !payload.position ||
    !payload.location ||
    payload.firstName.length > MAX_FIELD_LENGTH ||
    payload.lastName.length > MAX_FIELD_LENGTH ||
    payload.phone.length > MAX_FIELD_LENGTH ||
    payload.position.length > MAX_FIELD_LENGTH ||
    payload.location.length > MAX_FIELD_LENGTH ||
    payload.message.length > MAX_MESSAGE_LENGTH ||
    !EMAIL_PATTERN.test(payload.email) ||
    payload.email.length > 254 ||
    !PHONE_PATTERN.test(payload.phone) ||
    !POSITIONS.has(payload.position)
  ) {
    return null;
  }

  return payload;
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !from) {
    console.error("Careers form email configuration is missing.");
    return Response.json(
      { error: "The careers form is temporarily unavailable." },
      { status: 503 },
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const application = validatePayload(payload);
  if (!application) {
    return Response.json(
      { error: "Please provide valid application details." },
      { status: 400 },
    );
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: RECIPIENT_EMAIL,
      replyTo: application.email,
      subject: `Job application from ${application.firstName} ${application.lastName}`,
      text: [
        `Name: ${application.firstName} ${application.lastName}`,
        `Email: ${application.email}`,
        `Phone: ${application.phone}`,
        `Position: ${application.position}`,
        `Preferred Location: ${application.location}`,
        "",
        "About the applicant:",
        application.message || "Not provided",
      ].join("\n"),
    });

    if (error) {
      console.error("Resend rejected the careers application email.", error);
      return Response.json(
        { error: "We could not submit your application. Please try again." },
        { status: 502 },
      );
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error("Careers application email failed.", error);
    return Response.json(
      { error: "We could not submit your application. Please try again." },
      { status: 500 },
    );
  }
}