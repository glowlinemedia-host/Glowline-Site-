type IconProps = { name: "arrow" | "check" | "menu" | "close" | "message" };

export function Icon({ name }: IconProps) {
  if (name === "arrow") return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11M11 6l4 4-4 4" /></svg>;
  if (name === "check") return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="m5 10 3 3 7-7" /></svg>;
  if (name === "menu") return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M3 6h14M3 14h14" /></svg>;
  if (name === "close") return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="m5 5 10 10M15 5 5 15" /></svg>;
  return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 3a7 7 0 0 0-6 10.6L3 17l3.6-.9A7 7 0 1 0 10 3Z" /><path d="M7 7.5c.5 2.4 2.1 4 4.5 5" /></svg>;
}
