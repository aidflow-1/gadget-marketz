import Link from "next/link";
import { MapPin } from "lucide-react";
import Logo from "./Logo";

type IconProps = { className?: string };

const InstagramIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 3.68A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84Zm0 10.16A4 4 0 1 1 16 12a4 4 0 0 1-4 4Zm6.41-10.4a1.44 1.44 0 1 0 1.44 1.44 1.44 1.44 0 0 0-1.44-1.44Z" />
  </svg>
);

const FacebookIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
  </svg>
);

const XIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.66l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23Zm-1.16 17.52h1.83L7.01 4.13H5.04l12.04 15.64Z" />
  </svg>
);

const YoutubeIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M23.5 6.2a3 3 0 0 0-2.12-2.13C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.52A3 3 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.8 3 3 0 0 0 2.12 2.13c1.88.52 9.38.52 9.38.52s7.5 0 9.38-.52a3 3 0 0 0 2.12-2.13A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.2 3.6Z" />
  </svg>
);

const columns = [
  {
    title: "Shop",
    links: [
      "Smartphones",
      "Laptops",
      "Tablets",
      "Audio",
      "Gaming",
      "Smartwatches",
    ],
  },
  {
    title: "Help",
    links: [
      "Track my order",
      "Delivery & returns",
      "Warranty claims",
      "Payment & finance",
      "Contact us",
      "FAQs",
    ],
  },
  {
    title: "Company",
    links: [
      "About Gadget Marketz",
      "How refurbishment works",
      "Trade-in programme",
      "Sustainability",
      "Careers",
      "Press",
    ],
  },
];

const socials = [
  { icon: InstagramIcon, label: "Instagram" },
  { icon: FacebookIcon, label: "Facebook" },
  { icon: XIcon, label: "X" },
  { icon: YoutubeIcon, label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-ink-950 text-ink-300">
      <div className="mx-auto max-w-7xl container-px py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo className="h-11 w-auto" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-400">
              The UK&apos;s trusted home for certified refurbished and brand-new
              tech. Quality-checked, warranty-backed, and delivered fast.
            </p>
            <div className="mt-5 flex items-start gap-2 text-sm text-ink-400">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
              <span>
                Unit 12, Tech Park, Shoreditch
                <br />
                London, EC2A 4PB · United Kingdom
              </span>
            </div>
            <div className="mt-5 flex gap-2">
              {socials.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid h-9 w-9 place-items-center rounded-lg bg-white/5 text-ink-300 transition hover:bg-brand-600 hover:text-white"
                >
                  <Icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-white">{col.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-ink-400 transition hover:text-white"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-3 text-xs text-ink-400">
            <span className="rounded-md border border-white/10 px-3 py-1.5">
              Visa
            </span>
            <span className="rounded-md border border-white/10 px-3 py-1.5">
              Mastercard
            </span>
            <span className="rounded-md border border-white/10 px-3 py-1.5">
              PayPal
            </span>
            <span className="rounded-md border border-white/10 px-3 py-1.5">
              Apple Pay
            </span>
            <span className="rounded-md border border-white/10 px-3 py-1.5">
              Klarna
            </span>
          </div>
          <p className="text-xs text-ink-500">
            © {new Date().getFullYear()} Gadget Marketz Ltd. Registered in
            England &amp; Wales. VAT GB 123 4567 89.
          </p>
        </div>
      </div>
    </footer>
  );
}
