# Glowline Media website

A production-ready Next.js website for Glowline Media, built with TypeScript and Tailwind CSS.

## Run locally

1. Install Node.js 20 or newer.
2. Open this folder in a terminal.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open `http://localhost:3000`.

For a production check, run `npm run build`, then `npm run start`.

## Deploy

### Vercel

1. Push this folder to a GitHub repository.
2. Import the repository at Vercel.
3. Keep the detected framework as Next.js.
4. Add `NEXT_PUBLIC_SITE_URL` with the final public URL, for example `https://glowlinemedia.co.za`.
5. Deploy.

### Other Next.js hosts

Use `npm run build` as the build command and `npm run start` as the start command. The host should use Node.js 20 or newer.

## Brand asset

The supplied source logo is preserved at `public/glowline-original-logo.jpeg`. The navigation and footer use a responsive text wordmark that matches the supplied logo styling and stays crisp at every size. To switch to a new image logo, replace the source file and update `components/Brand.tsx`.

## Contact form

The primary form action creates a formatted WhatsApp enquiry for `2769952813`. It does not open the visitor's email app.

The secondary email action uses Formspree. Create a form at Formspree, then add its endpoint to your deployment environment:

`NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID`

Replace `YOUR_FORM_ID` with the value supplied by Formspree. The placeholder and replacement comment are also in `components/ContactForm.tsx`. Email submissions can then be delivered to `glowlinemedia@gmail.com` through your Formspree account.

## SEO

Update the fallback domain in `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts`, and `app/page.tsx`, or set `NEXT_PUBLIC_SITE_URL` in the deployment environment. Metadata, Open Graph imagery, a favicon, robots.txt, sitemap.xml, and Local Business structured data are included.
