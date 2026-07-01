"use client";

import { FormEvent, useState } from "react";
import { Icon } from "./Icons";

const whatsappNumber = "2769952813";
// Replace YOUR_FORM_ID with the real Formspree form ID, or set NEXT_PUBLIC_FORMSPREE_ENDPOINT in your hosting environment.
const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "https://formspree.io/f/YOUR_FORM_ID";

function getFormValues(form: HTMLFormElement) {
  const data = new FormData(form);
  return {
    name: String(data.get("name") || ""),
    phone: String(data.get("phone") || ""),
    business: String(data.get("business") || ""),
    service: String(data.get("service") || ""),
    message: String(data.get("message") || ""),
  };
}

export function ContactForm() {
  const [status, setStatus] = useState("");

  function submitWhatsApp(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const values = getFormValues(event.currentTarget);
    const message = [
      "Hi Glowline Media, I would like to enquire.",
      "",
      `Name: ${values.name}`,
      `Phone: ${values.phone}`,
      `Business: ${values.business}`,
      `Interested in: ${values.service}`,
      `Message: ${values.message}`,
    ].join("\n");
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    setStatus("Your WhatsApp enquiry is ready to send.");
  }

  async function submitEmail() {
    const form = document.querySelector<HTMLFormElement>("#lead-form");
    if (!form || !form.reportValidity()) return;
    if (formspreeEndpoint.includes("YOUR_FORM_ID")) {
      setStatus("Email delivery needs the Formspree endpoint added in your website settings.");
      return;
    }
    setStatus("Sending your email enquiry...");
    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      setStatus(response.ok ? "Thank you. Your email enquiry has been sent." : "Email could not be sent. Please use WhatsApp instead.");
      if (response.ok) form.reset();
    } catch {
      setStatus("Email could not be sent. Please use WhatsApp instead.");
    }
  }

  return (
    <form className="contact-form" id="lead-form" onSubmit={submitWhatsApp}>
      <div className="form-topline"><span>ENQUIRY FORM</span><b>Usually replies on WhatsApp</b></div>
      <div className="form-row">
        <label>Name<input name="name" required autoComplete="name" placeholder="e.g. Lerato" /></label>
        <label>Phone number<input name="phone" required autoComplete="tel" placeholder="e.g. 082 000 0000" /></label>
      </div>
      <label>Business name<input name="business" required autoComplete="organization" placeholder="e.g. Lerato Interiors" /></label>
      <label>Service interested in<select name="service" defaultValue="Website development"><option>Website development</option><option>Hosting and maintenance</option><option>Social media management</option><option>Website and social media</option><option>Something else</option></select></label>
      <label>Message<textarea name="message" required rows={4} placeholder="Tell us what you would like help with" /></label>
      <button className="button button-dark form-primary" type="submit"><Icon name="whatsapp" /> Send via WhatsApp <Icon name="arrow" /></button>
      <button className="email-submit" type="button" onClick={submitEmail}>Send by Email instead</button>
      <p className="form-note" aria-live="polite">{status || "Your details stay in your browser until you choose how to send them."}</p>
    </form>
  );
}
