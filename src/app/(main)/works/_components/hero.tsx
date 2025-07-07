"use client";
import React from "react";
import Image from "next/image";

const partners: { size: number; name: string; logo: string }[] = [
  {
    size: 44,
    name: "Arbitrum",
    logo: "/arb.png",
  },
  {
    size: 100,
    name: "NEAR",
    logo: "/near.png",
  },
  { size: 160, name: "Solana", logo: "/sol.png" },
  {
    size: 120,
    name: "Filecoin",
    logo: "/filecoin.png",
  },
  { size: 44, name: "CA1", logo: "/can.png" },
];

const BUTTON_BASE =
  "w-full cursor-pointer transition-colors duration-300 rounded-full font-semibold";
const BUTTON_SIZE = "p-2 px-4 text-sm";

export default function WorksHeroSection() {
  return (
    <div className="md:p-1 p-1 flex-col lg:flex-row items-center justify-center bg-white dark:bg-gray-100 w-full gap-4 mx-auto h-screen">
      <div className="flex items-center justify-center w-full mx-auto h-full flex-col relative rounded-3xl bg-[url('/Work.webp')] bg-cover bg-center">
        <div className={"h-[6rem] md:h-[7rem]"} />
        <div className="flex-1 flex flex-col h-full border-y border-white/40 w-full items-center justify-center px-6 py-12 lg:py-24">
          <div className="max-w-6xl mx-auto text-center space-y-8">
            <h1 className="text-5xl md:text-5xl lg:text-8xl font-black md:leading-[6rem] text-white dark:text-gray-100">
              Our Work
            </h1>

            <p className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              From grassroots hackathons to global conference stages, we
              put&apos; hands. Here&apos;s how we&apos;re making impact across
              the ecosystem
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                className={`${BUTTON_BASE} ${BUTTON_SIZE} text-white hover:bg-neutral-800 hover:text-gray-300 dark:hover:text-white bg-black`}
                onClick={() =>
                  window.open("https://linktr.ee/dappsoverapps", "_blank")
                }
              >
                Join the Collective
              </button>
              <button
                className={`${BUTTON_BASE} ${BUTTON_SIZE} border-2 text-white border-white hover:bg-gray-400/10 hover:text-gray-300 dark:hover:text-white`}
                onClick={() =>
                  window.open("https://linktr.ee/dappsoverapps", "_blank")
                }
              >
                Contact us
              </button>
            </div>
          </div>
        </div>

        <div className="px-6 lg:px-12 p-4">
          <div className="max-w-6xl mx-auto flex md:flex-row flex-col items-center justify-center gap-4 md:gap-12 lg:gap-16 place-items-center align-middle">
            <p className="text-gray-300 dark:text-gray-400 text-left font-bold">
              Partners and Protocols we&apos;ve worked with
            </p>
            <div className="md:flex w-full items-center justify-center gap-4 lg:gap-12 opacity-80 grid grid-cols-5 md:grid-cols-3 place-items-center align-middle">
              {partners.map((partner) => (
                <div
                  className="w-full flex justify-center place-items-center "
                  key={partner.name}
                >
                  <Image
                    className="max-w-[5rem] md:w-fit"
                    src={partner.logo}
                    alt={partner.name}
                    width={partner.size ?? 140}
                    height={partner.size ?? 140}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export const Icon: React.FC<IconProps> = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
