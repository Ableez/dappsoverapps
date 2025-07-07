"use client";

import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { cn } from "#/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { IconMenu } from "@tabler/icons-react";

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "About us", href: "#about-us-section" },
  { name: "Testimonial", href: "#testimonials-section" },
  { name: "Our Work", href: "/works" },
  { name: "Events", href: "/events" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "#join-the-collective" },
] as const;

type NavbarProps = {
  className?: string;
};

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "flex items-center justify-between px-2 p-1 lg:px-12 fixed w-full top-0 z-[999] transition-all duration-300",
        className
      )}
    >
      <div
        className={cn(
          "w-full flex align-middle place-items-center justify-between duration-200 ease-in-out transition-all  rounded-full ",
          scrolled
            ? "bg-white/40 backdrop-blur-md p-2"
            : "bg-transparent pt-4 md:pt-8"
        )}
      >
        {/* Logo */}
        <div className="flex items-center">
          <Link
            href={"/"}
            className={`${
              scrolled ? "bg-gray-800/40" : "bg-transparent "
            } p-2 flex align-middle place-items-center justify-center rounded-full`}
          >
            <Image src={"/doa.png"} alt="DOA" width={40} height={40} />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "transition-colors duration-300",
                scrolled
                  ? "text-gray-900 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
                  : "text-gray-400 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA Button and Theme Toggle */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            className={cn(
              "cursor-pointer transition-colors duration-300 rounded-full p-2 px-8 border-2 font-semibold",
              scrolled
                ? "border-gray-900 text-gray-900 dark:text-gray-200 hover:bg-indigo-500/10 hover:text-gray-900 dark:hover:text-white"
                : "text-white  border-white hover:bg-gray-400/10 hover:text-gray-300 dark:hover:text-white "
            )}
            onClick={() =>
              window.open("https://linktr.ee/dappsoverapps", "_blank")
            }
          >
            Join the Collective
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
              <button
                className={cn(
                  "transition-colors duration-300 p-3 rounded-full border-2 cursor-pointer",
                  scrolled
                    ? "text-gray-600 border-gray-600"
                    : "text-gray-200 border-white/20"
                )}
              >
                <IconMenu size={30} />
                <span className="sr-only">Open menu</span>
              </button>
            </DrawerTrigger>
            <DrawerContent className="bg-gradient-to-br bg-white  border-gray-100/20">
              <DrawerHeader className="text-left">
                <DrawerTitle className="text-gray-900">Navigation</DrawerTitle>
                <DrawerDescription className="text-gray-600">
                  Explore our Web3 collective
                </DrawerDescription>
              </DrawerHeader>
              <div className="px-4 pb-4 space-y-2">
                {navigationItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block p-3 rounded-xl  text-gray-700 hover:text-gray-900 transition-colors text-lg hover:bg-gray-600/10"
                    onClick={() => setOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <DrawerFooter>
                <button
                  className="border-gray-100/30 text-gray-800 hover:bg-gray-900/10 hover:text-gray-600 p-4 rounded-2xl cursor-pointer"
                  onClick={() => {
                    setOpen(false);
                    window.open("https://linktr.ee/dappsoverapps", "_blank");
                  }}
                >
                  Join the Collective
                </button>
                <DrawerClose asChild>
                  <Button variant="ghost" className="text-gray-300">
                    Close
                  </Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
