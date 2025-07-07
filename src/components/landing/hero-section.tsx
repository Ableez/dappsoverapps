"use client";

import { useState } from "react";
import { Button } from "#/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "#/components/ui/drawer";
import { Menu } from "lucide-react";
import Image from "next/image";

const navigationItems = [
  { name: "Home", href: "#" },
  { name: "About us", href: "#" },
  { name: "Testimonial", href: "#" },
  { name: "Our Work", href: "#" },
  { name: "Contact", href: "#" },
];

const partners = [
  {
    name: "Arbitrum",
    logo: "https://cryptologos.cc/logos/arbitrum-arb-logo.svg?v=040",
  },
  {
    name: "NEAR",
    logo: "https://cryptologos.cc/logos/near-protocol-near-logo.svg?v=040",
  },
  { name: "Solana", logo: "https://cdn.worldvectorlogo.com/logos/solana.svg" },
  {
    name: "Filecoin",
    logo: "https://cryptologos.cc/logos/filecoin-fil-logo.svg?v=040",
  },
  { name: "CA1", logo: "/canada.png" },
];

export default function HeroSection() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-purple-900 to-blue-900 text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 lg:px-12">
        {/* Logo */}
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full border border-white/50 flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navigationItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-white/90 hover:text-white transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <Button
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10 hover:text-white"
            onClick={() =>
              window.open("https://linktr.ee/dappsoverapps", "_blank")
            }
          >
            Join the Collective
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
            <DrawerTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </DrawerTrigger>
            <DrawerContent className="bg-gradient-to-br from-red-900 via-purple-900 to-blue-900 border-white/20">
              <DrawerHeader className="text-left">
                <DrawerTitle className="text-white">Navigation</DrawerTitle>
                <DrawerDescription className="text-white/70">
                  Explore our Web3 collective
                </DrawerDescription>
              </DrawerHeader>
              <div className="px-4 pb-4 space-y-4">
                {navigationItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block py-2 text-white/90 hover:text-white transition-colors text-lg"
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <DrawerFooter>
                <Button
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 hover:text-white"
                  onClick={() => {
                    setIsDrawerOpen(false);
                    window.open("https://linktr.ee/dappsoverapps", "_blank");
                  }}
                >
                  Join the Collective
                </Button>
                <DrawerClose asChild>
                  <Button variant="ghost" className="text-white/70">
                    Close
                  </Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12 lg:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            We Build the Tools and
            <br />
            Talent Powering Web3
          </h1>

          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            A collective advancing Web3 through developer tooling, education,
            and market-ready decentralized applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-white/90 px-8 py-3 text-lg font-medium"
              onClick={() =>
                window.open("https://linktr.ee/dappsoverapps", "_blank")
              }
            >
              Join the Collective
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 hover:text-white px-8 py-3 text-lg font-medium"
              onClick={() =>
                window.open("https://linktr.ee/dappsoverapps", "_blank")
              }
            >
              Explore Our Work
            </Button>
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="px-6 pb-12 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <p className="text-white/70 text-sm mb-8">
            Partners and Protocols we&apos;ve worked with
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12 opacity-80">
            {partners.map((partner) => (
              <div key={partner.name} className="flex items-center">
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={120}
                  height={40}
                  className="h-8 w-auto object-contain filter brightness-0 invert"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
