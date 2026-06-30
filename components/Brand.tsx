export function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <a className={`brand ${inverse ? "brand-inverse" : ""}`} href="#home" aria-label="Glowline Media home">
      <span className="brand-glowline">Glowline</span>
      <span className="brand-media">media</span>
    </a>
  );
}
