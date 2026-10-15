"use server";

import { Resend } from "resend";
import { email } from "@/lib/content";

const sender = "Culinary Eco-Life <noreply@celiph.com>";

const interests = [
  "General inquiry",
  "Donate",
  "Volunteer",
  "Partner with us",
  "Sponsor a scholar",
] as const;

export type InquiryState = {
  status: "idle" | "sent" | "error";
  message?: string;
  fieldErrors?: Partial<Record<"name" | "email" | "message", string>>;
};

function field(formData: FormData, name: string) {
  return String(formData.get(name) ?? "").trim();
}

export async function sendInquiry(
  _previous: InquiryState,
  formData: FormData,
): Promise<InquiryState> {
  const name = field(formData, "name");
  const address = field(formData, "email");
  const interest = field(formData, "interest");
  const message = field(formData, "message");
  const fieldErrors: InquiryState["fieldErrors"] = {};

  if (!name || name.length > 120) fieldErrors.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(address) || address.length > 200) {
    fieldErrors.email = "Please enter a valid email address.";
  }
  if (message.length < 8 || message.length > 5000) {
    fieldErrors.message = "Please add a short message.";
  }
  if (fieldErrors.name || fieldErrors.email || fieldErrors.message) {
    return { status: "error", fieldErrors };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set.");
    return {
      status: "error",
      message: `We could not send that just now. Please email us at ${email}.`,
    };
  }

  const chosen = interests.find((option) => option === interest) ?? "General inquiry";
  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: process.env.RESEND_FROM || sender,
    to: email,
    replyTo: address,
    subject: `CELI inquiry — ${chosen}`,
    text: [`Name: ${name}`, `Email: ${address}`, `Interest: ${chosen}`, "", message].join("\n"),
  });

  if (error) {
    console.error("Inquiry email failed.", error);
    return {
      status: "error",
      message: `We could not send that just now. Please email us at ${email}.`,
    };
  }

  return { status: "sent" };
}
