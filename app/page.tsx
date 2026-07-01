import { Brand } from "@/components/Brand";
import { ContactForm } from "@/components/ContactForm";
import { GrowthDesk } from "@/components/GrowthDesk";
import { Header } from "@/components/Header";
import { Icon } from "@/components/Icons";

const websiteLink = "https://wa.me/27769952813?text=Hi%20Glowline%20Media%2C%20I%27d%20like%20a%20quote%20for%20a%20professional%20website.";
const socialLink = "https://wa.me/27621380450?text=Hi%20Glowline%20Media%2C%20I%27d%20like%20to%20ask%20about%20social%20media%20management.";
const previewLink = "https://wa.me/2769952813?text=Hi%20Glowline%20Media%2C%20I%20would%20like%20to%20request%20a%20free%20website%20preview.";
const websiteFeatures = ["Custom website design", "Mobile-friendly layouts", "Fast loading pages", "Website hosting", "Basic SEO setup", "WhatsApp enquiry buttons", "Ongoing support"];
const socialFeatures = ["Social media content creation", "Monthly content planning", "Instagram and Facebook management", "Meta ads support", "Caption writing", "Brand consistency", "Performance-focused strategy"];

export default function Home() {
  const schema = {
    "@context": "https://schema.org", "@type": "ProfessionalService", name: "Glowline Media",
    description: "A digital marketing agency helping South African businesses grow with websites, hosting, social media management, and digital marketing.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://glowlinemedia.co.za", email: "glowlinemedia@gmail.com",
    areaServed: { "@type": "Country", name: "South Africa" }, telephone: ["+27 76 995 2813", "+27 62 138 0450"],
    serviceType: ["Website development", "Website hosting", "Social media management", "Digital marketing", "Meta ads management"],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <Header />
      <main>
        <section className="hero" id="home">
          <div className="hero-copy reveal">
            <div className="hero-availability"><span>FREE PREVIEW</span><b>Available for selected South African businesses</b></div>
            <p className="eyebrow"><span /> Digital growth for South African businesses</p>
            <h1>Your business deserves to look <em>professional</em> online.</h1>
            <p className="hero-text">Glowline Media builds high-converting websites and social media strategies that help South African businesses attract more enquiries, look credible, and grow online.</p>
            <div className="hero-actions">
              <a className="button button-dark" href={previewLink} target="_blank" rel="noreferrer">Request my free preview <Icon name="arrow" /></a>
              <a className="button button-outline" href={websiteLink} target="_blank" rel="noreferrer">Get a website quote</a>
            </div>
            <p className="hero-proof"><span>Based in South Africa</span><span>Built around your business</span></p>
          </div>
          <div className="hero-visual reveal delay-1"><GrowthDesk /></div>
        </section>

        <section className="offer-band" aria-label="Website offer">
          <div className="offer-price"><span>WEBSITE DEVELOPMENT</span><strong>From R3,500</strong></div>
          <div className="offer-copy"><h2>Professional websites for South African businesses.</h2><p>Built to look credible, load fast, and turn visitors into WhatsApp enquiries.</p></div>
          <a className="button button-blue" href={websiteLink} target="_blank" rel="noreferrer">Get my website quote <Icon name="arrow" /></a>
        </section>

        <section className="problem section-pad" aria-labelledby="problem-title">
          <div className="section-heading">
            <p className="eyebrow"><span /> The credibility gap</p>
            <h2 id="problem-title">Looking good online is no longer optional.</h2>
            <p>Potential customers make quick decisions. If your online presence feels unclear or neglected, trust disappears before the conversation starts.</p>
          </div>
          <div className="problem-grid">
            <article><span className="number">01</span><h3>Outdated website</h3><p>A slow or dated website can make a capable business look less credible than it really is.</p><div className="card-mark"><i/><i/><i/></div></article>
            <article><span className="number">02</span><h3>Inconsistent social media</h3><p>Irregular posts and mixed visuals make it harder for customers to remember and trust your brand.</p><div className="rhythm-mark"><i/><i/><i/><i/></div></article>
            <article className="accent-card"><span className="number">03</span><h3>Missed enquiries</h3><p>When people cannot understand your offer or contact you quickly, attention quietly turns into lost business.</p><div className="message-mark"><span>New enquiry</span><b>Waiting...</b></div></article>
          </div>
        </section>

        <section className="work section-pad" id="work">
          <div className="work-heading">
            <div><p className="eyebrow"><span /> Website and content previews</p><h2>See how your business could show up.</h2></div>
            <p>These are honest sample directions created to show our range. They are not presented as commissioned client work.</p>
          </div>
          <div className="work-grid">
            <article className="work-card">
              <div className="work-visual service-preview"><span className="preview-label">SAMPLE DIRECTION 01</span><div className="preview-nav"><i/><i/></div><div className="preview-hero"><b>Reliable service.<br/>Right when you need it.</b><i/></div><div className="preview-foot"><i/><i/><i/></div></div>
              <div className="work-meta"><span>Website preview</span><h3>Local service business website</h3><p>Clear services, visible trust signals, and a direct route to WhatsApp.</p></div>
            </article>
            <article className="work-card featured">
              <div className="work-visual shop-preview"><span className="preview-label">SAMPLE DIRECTION 02</span><div className="shop-title">The everyday collection.</div><div className="product-row"><i/><i/><i/></div><div className="shop-line"><span>Browse by product</span><b>View catalogue →</b></div></div>
              <div className="work-meta"><span>Catalogue preview</span><h3>E-commerce product catalogue</h3><p>A clean product journey that makes browsing simple and buying feel natural.</p></div>
            </article>
            <article className="work-card">
              <div className="work-visual social-preview"><span className="preview-label">SAMPLE DIRECTION 03</span><div className="social-grid"><i/><i/><i/><i/></div><div className="social-plan"><span>CONTENT SYSTEM</span><b>12 posts planned</b></div></div>
              <div className="work-meta"><span>Content preview</span><h3>Social media content system</h3><p>A repeatable visual system for consistent, recognisable monthly content.</p></div>
            </article>
          </div>
        </section>

        <section className="free-preview section-pad" id="free-preview">
          <div className="preview-seal"><span>FREE</span><b>01</b><small>SELECTED<br/>BUSINESSES</small></div>
          <div className="free-preview-copy"><p className="eyebrow light"><span /> See the direction first</p><h2>See what your new website could look like before you commit.</h2><p>We create free website previews for selected South African businesses, so you can see the direction before making a decision.</p><div className="preview-benefits"><span>Designed around your business</span><span>No generic templates</span><span>Clear next step, no pressure</span></div></div>
          <div className="preview-action"><a className="button button-blue" href={previewLink} target="_blank" rel="noreferrer">Request My Free Preview <Icon name="arrow" /></a><small>Share your business name and what you offer. We will take it from there.</small></div>
        </section>

        <section className="services section-pad" id="services">
          <div className="services-intro">
            <p className="eyebrow light"><span /> Two sides. One stronger brand.</p>
            <h2>Websites and social media built to bring in better enquiries.</h2>
            <p>Choose the support you need today, or bring your website and social channels together under one clear direction.</p>
          </div>
          <div className="service-pair">
            <article className="service-card cream" id="websites">
              <div className="service-index">01 / WEBSITES <b>FROM R3,500</b></div><h3>Website Development <span>& Hosting</span></h3>
              <p>We design modern, mobile-friendly websites that make your business look credible and help turn visitors into enquiries.</p>
              <ul>{websiteFeatures.map(item=><li key={item}><Icon name="check" />{item}</li>)}</ul>
              <a className="text-link" href={websiteLink} target="_blank" rel="noreferrer">Start my website <Icon name="arrow" /></a>
            </article>
            <article className="service-card blue" id="social-media">
              <div className="service-index">02 / SOCIAL & MARKETING <b>CUSTOM MONTHLY PACKAGES</b></div><h3>Social Media <span>& Digital Marketing</span></h3>
              <p>We help your brand show up consistently with strategic content, clean visuals, and marketing that builds trust with your audience.</p>
              <ul>{socialFeatures.map(item=><li key={item}><Icon name="check" />{item}</li>)}</ul>
              <a className="text-link" href={socialLink} target="_blank" rel="noreferrer">Grow my socials <Icon name="arrow" /></a>
            </article>
          </div>
          <div className="price-anchors" aria-label="Starting prices">
            <div><span>01</span><p>Website Development</p><strong>From R3,500</strong></div>
            <div><span>02</span><p>Hosting & Maintenance</p><strong>From R500 <small>per month</small></strong></div>
            <div><span>03</span><p>Social Media Management</p><strong>Custom monthly packages</strong></div>
          </div>
          <p className="seo-note">From small business websites and website hosting in South Africa to Meta ads management and consistent social content, every part is designed to support real business growth.</p>
        </section>

        <section className="why section-pad" id="why-us">
          <div className="why-title"><p className="eyebrow"><span /> Why Glowline</p><h2>Built for businesses that want to look serious online.</h2></div>
          <div className="why-list">
            <article><span>01</span><div><h3>Premium, without the corporate agency price</h3><p>Thoughtful design and careful execution, scaled for growing businesses.</p></div></article>
            <article><span>02</span><div><h3>Website and social media, handled together</h3><p>One clear brand direction across the places your customers see you.</p></div></article>
            <article><span>03</span><div><h3>Clear communication and fair pricing</h3><p>Plain language, useful advice, and no confusing agency theatre.</p></div></article>
            <article><span>04</span><div><h3>Made for South African small businesses</h3><p>Practical digital support grounded in the needs of local business owners.</p></div></article>
          </div>
        </section>

        <section className="process section-pad">
          <div className="section-heading narrow"><p className="eyebrow"><span /> How it works</p><h2>Simple process. Professional result.</h2></div>
          <div className="process-track">
            {[
              ["Discovery", "We learn about your business, audience, and goals."],
              ["Direction", "We plan the pages, content, and visual style."],
              ["Build", "We design your website or content system."],
              ["Launch", "We connect WhatsApp, hosting, SEO basics, and tracking."],
            ].map(([step,copy],i)=><article key={step}><span>{String(i+1).padStart(2,"0")}</span><h3>{step}</h3><p>{copy}</p><i /></article>)}
          </div>
        </section>

        <section className="faq section-pad" id="faq">
          <div className="faq-intro"><p className="eyebrow light"><span /> Good questions, clear answers</p><h2>Questions business owners ask before starting.</h2><p>No agency fog. Here are the practical answers most business owners need first.</p></div>
          <div className="faq-list">
            <details open><summary><span>01</span>How much does a website cost?<i>+</i></summary><p>Professional Glowline Media websites start from R3,500. The final quote depends on the number of pages, features, content support, and any special integrations you need.</p></details>
            <details><summary><span>02</span>Do you offer hosting?<i>+</i></summary><p>Yes. Hosting and maintenance plans start from R500 per month, with ongoing support to keep your website running smoothly.</p></details>
            <details><summary><span>03</span>Can you manage my social media every month?<i>+</i></summary><p>Yes. We offer custom monthly packages for content planning, design, captions, Facebook and Instagram management, and Meta ads support.</p></details>
            <details><summary><span>04</span>Do you work with businesses outside Johannesburg?<i>+</i></summary><p>Yes. We work remotely with businesses across South Africa. Meetings, feedback, content, and approvals can all be handled online.</p></details>
            <details><summary><span>05</span>How long does a website take?<i>+</i></summary><p>Most small business websites take around two to four weeks once we have the required content and feedback. We confirm a realistic timeline before work begins.</p></details>
          </div>
        </section>

        <section className="cta-wrap section-pad">
          <div className="cta-panel">
            <div className="cta-copy"><p className="eyebrow light"><span /> Let&apos;s build your next chapter</p><h2>Ready to make your business look more professional online?</h2><p>Whether you need a website, social media management, or both, Glowline Media can help you build an online presence that turns attention into enquiries.</p></div>
            <div className="cta-buttons"><a className="button button-blue" href={websiteLink} target="_blank" rel="noreferrer">WhatsApp websites & hosting <Icon name="arrow" /></a><a className="button button-cream" href={socialLink} target="_blank" rel="noreferrer">WhatsApp social media <Icon name="arrow" /></a></div>
          </div>
        </section>

        <section className="contact section-pad" id="contact">
          <div className="contact-copy">
            <p className="eyebrow"><span /> Start a conversation</p><h2>Tell us where you want to grow.</h2><p>Share a little about your business and what you need. We will help you find the clearest next step.</p>
            <div className="contact-lines">
              <a href={websiteLink} target="_blank" rel="noreferrer"><span>WEBSITES & HOSTING</span><b>076 995 2813</b></a>
              <a href={socialLink} target="_blank" rel="noreferrer"><span>SOCIAL MEDIA & MARKETING</span><b>062 138 0450</b></a>
              <div><span>EMAIL</span><b>glowlinemedia@gmail.com</b></div>
              <div><span>LOCATION</span><b>South Africa</b></div>
            </div>
          </div>
          <ContactForm />
        </section>
      </main>
      <footer>
        <div className="footer-main"><Brand inverse /><p>Helping Businesses Grow Online</p><a href="#home" aria-label="Back to top">Back to top &uarr;</a></div>
        <div className="footer-bottom"><span>Website Development <i>&bull;</i> Hosting <i>&bull;</i> Social Media Management <i>&bull;</i> Digital Marketing</span><span>&copy; {new Date().getFullYear()} Glowline Media. All rights reserved.</span></div>
      </footer>
    </>
  );
}
