"use client";

import { useActionState } from "react";
import { email } from "@/lib/content";
import { sendInquiry, type InquiryState } from "@/lib/send-inquiry";

const interests = [
  "General inquiry",
  "Donate",
  "Volunteer",
  "Partner with us",
  "Sponsor a scholar",
];

const initialState: InquiryState = { status: "idle" };

const shortcuts = ["Donate", "Volunteer", "Partner with us"] as const;

export function InterestShortcuts() {
  return (
    <ul className="mt-1 flex flex-wrap gap-x-4 gap-y-2 text-lg">
      {shortcuts.map((option) => (
        <li key={option}>
          <button
            type="button"
            className="underline-offset-4 hover:underline"
            onClick={() => {
              const select = document.querySelector<HTMLSelectElement>("#inquiry-interest");
              if (select) select.value = option;
              document.getElementById("inquiry")?.scrollIntoView({ block: "nearest" });
              select?.focus();
            }}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
}

export function InquiryForm() {
  const [state, action, pending] = useActionState(sendInquiry, initialState);

  if (state.status === "sent") {
    return (
      <div className="rounded-[28px] border border-line bg-white px-7 py-10 text-ink" role="status">
        <p className="font-form text-[11px] font-extrabold tracking-[0.14em] text-everglade uppercase">
          Inquiry sent
        </p>
        <p className="mt-3 font-serif text-3xl text-ink-soft">Thank you for reaching out.</p>
        <p className="mt-3 text-base leading-7 text-stone">
          Your message is on its way. If you need to add anything, write us at{" "}
          <a className="underline" href={`mailto:${email}`}>
            {email}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      action={action}
      id="inquiry"
      className="rounded-[28px] border border-line bg-white px-5 py-6 text-ink sm:px-8 sm:py-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="font-form text-[11px] font-extrabold tracking-[0.14em] text-everglade uppercase">
            Name
          </span>
          <input
            name="name"
            autoComplete="name"
            placeholder="Your name"
            required
            aria-invalid={Boolean(state.fieldErrors?.name)}
            aria-describedby={state.fieldErrors?.name ? "name-error" : undefined}
            className="mt-2 h-14 w-full rounded-[13px] border border-line bg-field px-3.5 text-base text-ink placeholder:text-[#757575] focus-visible:border-blue"
          />
          {state.fieldErrors?.name ? (
            <span id="name-error" className="mt-1 block text-sm text-[#8a2e2e]">
              {state.fieldErrors.name}
            </span>
          ) : null}
        </label>
        <label className="block">
          <span className="font-form text-[11px] font-extrabold tracking-[0.14em] text-everglade uppercase">
            Email
          </span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            required
            aria-invalid={Boolean(state.fieldErrors?.email)}
            aria-describedby={state.fieldErrors?.email ? "email-error" : undefined}
            className="mt-2 h-14 w-full rounded-[13px] border border-line bg-field px-3.5 text-base text-ink placeholder:text-[#757575] focus-visible:border-blue"
          />
          {state.fieldErrors?.email ? (
            <span id="email-error" className="mt-1 block text-sm text-[#8a2e2e]">
              {state.fieldErrors.email}
            </span>
          ) : null}
        </label>
        <label className="block sm:col-span-2">
          <span className="font-form text-[11px] font-extrabold tracking-[0.14em] text-everglade uppercase">
            I’m interested in
          </span>
          <span className="relative mt-2 block">
            <select
              id="inquiry-interest"
              name="interest"
              defaultValue="General inquiry"
              className="h-14 w-full appearance-none rounded-[13px] border border-line bg-field px-4 pr-10 text-base text-ink focus-visible:border-blue"
            >
              {interests.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
            <span aria-hidden className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-stone">
              ▾
            </span>
          </span>
        </label>
        <label className="block sm:col-span-2">
          <span className="font-form text-[11px] font-extrabold tracking-[0.14em] text-everglade uppercase">
            Message
          </span>
          <textarea
            name="message"
            rows={6}
            required
            minLength={8}
            placeholder="Tell us how you'd like to get involved."
            aria-invalid={Boolean(state.fieldErrors?.message)}
            aria-describedby={state.fieldErrors?.message ? "message-error" : undefined}
            className="mt-2 min-h-36 w-full resize-y rounded-[13px] border border-line bg-field px-3.5 py-3 text-base text-ink placeholder:text-[#757575] focus-visible:border-blue"
          />
          {state.fieldErrors?.message ? (
            <span id="message-error" className="mt-1 block text-sm text-[#8a2e2e]">
              {state.fieldErrors.message}
            </span>
          ) : null}
        </label>
      </div>
      {state.message ? (
        <p className="mt-4 text-sm leading-6 text-[#8a2e2e]" role="alert">
          {state.message}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={pending}
        aria-busy={pending}
        className="mt-5 inline-flex items-center justify-center rounded-full border border-everglade bg-everglade px-5 py-3 font-form text-[13px] font-bold text-white transition-colors hover:bg-green-deep disabled:opacity-60"
      >
        {pending ? "Sending…" : "Send Inquiry →"}
      </button>
    </form>
  );
}
