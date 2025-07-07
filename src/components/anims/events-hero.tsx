"use client";
import React from "react";

export const EventsHero: React.FC = () => {
  return (
    <div className="md:p-1 p-1 flex-col lg:flex-row items-center justify-center bg-white dark:bg-gray-100 w-full gap-4 mx-auto h-screen ">
      <div className="flex items-center justify-center w-full mx-auto h-full relative rounded-3xl bg-[url('/Home.webp')] bg-cover bg-center">
        <div className="relative z-20 w-full">
          <div className="flex-1 flex flex-col items-center justify-center px-6 py-12 lg:py-24">
            <div className="max-w-6xl mx-auto text-center space-y-8">
              <h1 className="text-4xl md:text-5xl font-black text-white dark:text-gray-100">
                Amazing Hackathons and
                <br className="md:block hidden" />
                Events from us
              </h1>

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
