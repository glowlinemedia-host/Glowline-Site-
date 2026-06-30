"use client";

import { useEffect, useState } from "react";
import { Brand } from "./Brand";
import { Icon } from "./Icons";

const nav = [
  ["Home", "#home"],
  ["Website Development", "#websites"],
  ["Social Media Marketing", "#social-media"],
  ["Why Us", "#why-us"],
  ["Contact", "#contact"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Brand />
        <nav className="desktop-nav" aria-label="Main navigation">
          {nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <a className="button button-dark nav-cta" href="https://wa.me/27769952813?text=Hi%20Glowline%20Media%2C%20I%27d%20like%20to%20chat%20about%20growing%20my%20business%20online." target="_blank" rel="noreferrer">
          Message us <Icon name="arrow" />
        </a>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"}>
          <Icon name={open ? "close" : "menu"} />
        </button>
      </div>
      {open && (
        <div className="mobile-menu">
          <nav aria-label="Mobile navigation">
            {nav.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}<Icon name="arrow" /></a>)}
          </nav>
          <a className="button button-blue" href="https://wa.me/27769952813?text=Hi%20Glowline%20Media%2C%20I%27d%20like%20to%20chat." target="_blank" rel="noreferrer">Message us on WhatsApp</a>
        </div>
      )}
    </header>
  );
}
