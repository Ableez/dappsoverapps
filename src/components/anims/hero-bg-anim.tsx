"use client";
import React from "react";
import Image from "next/image";

type Partner = {
  size: number;
  name: string;
  logo: string;
};

const partners: Partner[] = [
  {
    size: 120,
    name: "Arbitrum",
    logo: "/arb.png",
  },
  {
    size: 88,
    name: "NEAR",
    logo: "/near.png",
  },
  { size: 110, name: "Solana", logo: "/sol.png" },
  {
    size: 110,
    name: "Filecoin",
    logo: "/filecoin.png",
  },
  { size: 64, name: "CA1", logo: "/can.png" },
];

export const AnimHeroSection: React.FC = () => {
  return (
    <div className="md:p-1 p-1 flex-col lg:flex-row items-center justify-center bg-white dark:bg-gray-100 w-full gap-4 mx-auto h-screen ">
      <div className="flex items-center justify-center w-full mx-auto h-full relative rounded-3xl bg-[url('/Home.webp')] bg-cover bg-center">
        <div className="relative z-20 w-full">
          <div className="h-[6rem]" />
          <div className="flex-1 flex flex-col items-center justify-center px-6 py-12 lg:py-24">
            <div className="max-w-6xl mx-auto text-center space-y-8">
              <h1 className="text-4xl md:text-5xl font-black text-white dark:text-gray-100">
                We Build the Tools and
                <br className="md:block hidden" />
                Talent Powering Web3
              </h1>

              <p className="text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
                A collective advancing Web3 through developer tooling,
                education, and market-ready decentralized applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  className="w-full cursor-pointer transition-colors duration-300 rounded-full p-2 px-4 font-semibold text-white hover:bg-neutral-800 hover:text-gray-300 dark:hover:text-white bg-black"
                  onClick={() =>
                    window.open("https://linktr.ee/dappsoverapps", "_blank")
                  }
                >
                  Join the Collective
                </button>
                <button
                  className="w-full cursor-pointer transition-colors duration-300 rounded-full p-2 px-4 border-2 font-semibold text-white border-white hover:bg-gray-400/10 hover:text-gray-300 dark:hover:text-white"
                  onClick={() =>
                    window.open("https://linktr.ee/dappsoverapps", "_blank")
                  }
                >
                  Explore Our Work
                </button>
              </div>
            </div>
          </div>
          <div className="px-6 pb-12 lg:px-12">
            <div className="max-w-6xl mx-auto md:flex-row flex flex-col items-center justify-center gap-2 md:gap-4">
              <p className="text-gray-300 dark:text-gray-400 text-sm mb-4 text-left ">
                Partners and Protocols we&apos;ve worked with
              </p>
              <div
                className=" w-full flex flex-wrap items-center justify-center gap-2 overflow-x-auto max-w-full py-2
                "
                style={{ WebkitOverflowScrolling: "touch" }}
              >
                {partners.map((partner) => (
                  <div
                    className="flex flex-col items-center justify-center h-12"
                    key={partner.name}
                  >
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={partner.size}
                      height={partner.size / 3}
                      style={{
                        objectFit: "contain",
                        maxWidth: partner.size,
                        maxHeight: partner.size,
                        width: partner.size,
                        height: partner.size / 1.8,
                        display: "block",
                      }}
                      draggable={false}
                      priority={false}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

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
