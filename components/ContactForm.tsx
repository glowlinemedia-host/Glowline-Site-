"use client";

import { FormEvent, useState } from "react";
import { Icon } from "./Icons";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Glowline enquiry from ${data.get("name")}`);
    const body = encodeURIComponent(`Name: ${data.get("name")}\nPhone: ${data.get("phone")}\nInterested in: ${data.get("service")}\n\nMessage:\n${data.get("message")}`);
    setSent(true);
    window.location.href = `mailto:glowlinemedia@gmail.com?subject=${subject}&body=${body}`;
  }
  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-row">
        <label>Your name<input name="name" required autoComplete="name" placeholder="e.g. Lerato" /></label>
        <label>Phone number<input name="phone" required autoComplete="tel" placeholder="e.g. 082 000 0000" /></label>
      </div>
      <label>I am interested in<select name="service" defaultValue="Website development"><option>Website development</option><option>Social media management</option><option>Website and social media</option><option>Something else</option></select></label>
      <label>Tell us a little about your business<textarea name="message" required rows={4} placeholder="What would you like help with?" /></label>
      <button className="button button-dark" type="submit">Prepare email <Icon name="arrow" /></button>
      <p className="form-note">{sent ? "Your email app should open now." : "This form opens your email app, with your message ready to send."}</p>
    </form>
  );
}
