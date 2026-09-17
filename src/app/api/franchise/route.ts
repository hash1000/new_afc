import { Resend } from "resend";

const RECIPIENT_EMAIL = "info@americasfoodcourt.com";
const MAX_FIELD_LENGTH = 120;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[+\d][\d\s().-]{6,24}$/;
const INVESTMENT_RANGES = new Set([
  "Under $100K",
  "$100K - $250K",
  "$250K - $500K",
  "$500K+",
]);
const PREFERRED_FORMATS = new Set([
  "Drive-Thru",
  "Traditional Restaurant",
  "Travel Plaza",
  "Convenience Store",
  "Retail",
  "Mall",
  "Airport",
  "Kiosk",
]);

interface FranchisePayload {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  postalCode: string;
  investmentRange: string;
  preferredFormat: string;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function validatePayload(value: unknown): FranchisePayload | null {
  if (!isRecord(value)) {
    return null;
  }

  const getString = (field: keyof FranchisePayload) =>
    typeof value[field] === "string" ? value[field].trim() : "";
  const payload: FranchisePayload = {
    firstName: getString("firstName"),
    lastName: getString("lastName"),
    email: getString("email"),
    phone: getString("phone"),
    city: getString("city"),
    state: getString("state"),
    postalCode: getString("postalCode"),
    investmentRange: getString("investmentRange"),
    preferredFormat: getString("preferredFormat"),
  };

  if (
    Object.values(payload).some(
      (field) => !field || field.length > MAX_FIELD_LENGTH,
    ) ||
    !EMAIL_PATTERN.test(payload.email) ||
    payload.email.length > 254 ||
    !PHONE_PATTERN.test(payload.phone) ||
    !INVESTMENT_RANGES.has(payload.investmentRange) ||
    !PREFERRED_FORMATS.has(payload.preferredFormat)
  ) {
    return null;
  }

  return payload;
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !from) {
    console.error("Franchise form email configuration is missing.");
    return Response.json(
      { error: "The franchise form is temporarily unavailable." },
      { status: 503 },
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const franchise = validatePayload(payload);
  if (!franchise) {
    return Response.json(
      { error: "Please provide valid franchise inquiry details." },
      { status: 400 },
    );
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: RECIPIENT_EMAIL,
      replyTo: franchise.email,
      subject: `Franchise inquiry from ${franchise.firstName} ${franchise.lastName}`,
      text: [
        `Name: ${franchise.firstName} ${franchise.lastName}`,
        `Email: ${franchise.email}`,
        `Phone: ${franchise.phone}`,
        `Location: ${franchise.city}, ${franchise.state} ${franchise.postalCode}`,
        `Investment Range: ${franchise.investmentRange}`,
        `Preferred Format: ${franchise.preferredFormat}`,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend rejected the franchise inquiry email.", error);
      return Response.json(
        { error: "We could not send your inquiry. Please try again." },
        { status: 502 },
      );
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error("Franchise inquiry email failed.", error);
    return Response.json(
      { error: "We could not send your inquiry. Please try again." },
      { status: 500 },
    );
  }
}