type IconProps = { name: "arrow" | "check" | "menu" | "close" | "message" | "whatsapp" };

export function Icon({ name }: IconProps) {
  if (name === "arrow") return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11M11 6l4 4-4 4" /></svg>;
  if (name === "check") return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="m5 10 3 3 7-7" /></svg>;
  if (name === "menu") return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M3 6h14M3 14h14" /></svg>;
  if (name === "close") return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="m5 5 10 10M15 5 5 15" /></svg>;
  if (name === "whatsapp") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.5L3.5 20.5l1.2-4.3A8.5 8.5 0 1 1 20.5 11.7Z" /><path d="M8.1 7.6c.3 3.8 2.5 6 6.3 6.3M8.3 7.4l1.5-.1.8 2-1 1M14.6 13.8l.1-1.6 2 .8-.1 1.5" /></svg>;
  return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 3a7 7 0 0 0-6 10.6L3 17l3.6-.9A7 7 0 1 0 10 3Z" /><path d="M7 7.5c.5 2.4 2.1 4 4.5 5" /></svg>;
}
