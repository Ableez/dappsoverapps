"use client";
import Link from "next/link";
import { TextHoverEffect } from "../text-hover-effect";
import Image from "next/image";
import type { FC } from "react";

type FooterSectionProps = {
  title: string;
  children: React.ReactNode;
};

const FooterSection: FC<FooterSectionProps> = ({ title, children }) => (
  <section className="flex flex-col gap-4">
    <h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
    {children}
  </section>
);

const NAV_LINKS: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
  { label: "Testimonial", href: "#testimonials-section" },
  { label: "Our Work", href: "/works" },
  { label: "About us", href: "#about-us-section" },
  { label: "Contact", href: "#join-the-collective" },
];

const CONTACT_LINKS: { label: string; href: string }[] = [
  { label: "Twitter", href: "https://twitter.com/dappsoverapps" },
  { label: "info@dappsoveraps.com", href: "mailto:info@dappsoveraps.com" },
];

const Footer: FC = () => {
  return (
    <div className="p-2">
      <footer className="py-4 bg-gradient-to-b from-neutral-800 rounded-4xl dark:to-black to-black">
        <div className="bg-gradient-to-b dark:from-neutral-950 dark:to-black rounded-t-[4rem] overflow-hidden">
          <div className="max-w-7xl mx-auto">
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 p-8 md:p-12 relative z-10">
              {/* Logo and Description */}
              <div className="col-span-1 flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <Image src="/doa.png" alt="DOA" width={40} height={40} />
                  <span className="text-xl font-bold text-white">
                    Dapps Over Apps
                  </span>
                </div>
                <p className="text-neutral-300 max-w-md text-sm">
                  A collective advancing Web3 through developer tooling,
                  education, and market-ready decentralized applications.
                </p>
                <div>
                  <button
                    className="w-fit cursor-pointer transition-colors duration-300 rounded-full py-2 px-5 border-2 font-semibold border-white hover:bg-white/80 bg-white text-black text-sm"
                    onClick={() =>
                      window.open("https://linktr.ee/dappsoverapps", "_blank")
                    }
                  >
                    Join the Collective
                  </button>
                </div>
              </div>

              {/* Navigation */}
              <FooterSection title="Navigation">
                <nav className="flex flex-col gap-2">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-neutral-300 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </FooterSection>

              {/* Contact */}
              <FooterSection title="Contact">
                <div className="flex flex-col gap-2">
                  {CONTACT_LINKS.map((contact) => (
                    <Link
                      key={contact.label}
                      href={contact.href}
                      className="text-neutral-300 hover:text-white transition-colors text-sm"
                      target={
                        contact.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        contact.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      {contact.label}
                    </Link>
                  ))}
                </div>
              </FooterSection>

              {/* Locations / Structure */}
              <FooterSection title="Locations">
                <ul className="text-neutral-300 text-sm space-y-1">
                  <li>Canada</li>
                  <li>Nigeria</li>
                  <li>Remote</li>
                </ul>
              </FooterSection>
            </div>

            {/* Divider */}
            <div className="border-t border-neutral-800/60 my-4" />

            {/* Background Logo and Bottom Bar */}
            <div className="relative h-fit md:h-[15rem]">
              <div className="h-[20rem] hidden md:flex items-center justify-center">
                <TextHoverEffect text="DAPPSOVERAPPS" />
              </div>
              <div className="md:hidden flex flex-col items-center justify-center gap-1">
                <TextHoverEffect text="DAPPS" />
                <TextHoverEffect text="OVER" />
                <TextHoverEffect text="APPS" />
              </div>
              <div className="relative z-10 text-center text-xs text-neutral-500 mt-4">
                &copy; {new Date().getFullYear()} Dapps Over Apps. All rights
                reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
