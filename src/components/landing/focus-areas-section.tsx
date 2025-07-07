import { GraduationCap, Wrench, Rocket } from "lucide-react";

export default function FocusAreasSection() {
  return (
    <section className="py-16 lg:py-24 min-h-screen h-full bg-gradient-to-b dark:from-gray-950 dark:to-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-medium text-neutral-500 dark:text-neutral-500 mb-4">
            Focus Areas
          </p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-neutral-900 dark:text-neutral-100">
            Our Focus Areas
          </h2>
        </div>

        {/* Focus Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {/* Web3 Education & Onboarding */}
          <div className="space-y-6 p-8 min-h-[45dvh] border-r border-neutral-200 dark:border-neutral-800">
            <div className="flex items-center gap-3">
              <GraduationCap className="h-7 w-7 text-neutral-900 dark:text-neutral-100" />
              <h3 className="text-2xl font-extrabold text-neutral-900 dark:text-neutral-100">
                Web3 Education & Onboarding
              </h3>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              We design technical education programs that equip developers from
              all backgrounds to thrive in Web3.
            </p>
            <div className="space-y-1">
              <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                Highlights:
              </p>
              <ul className="space-y-4 mt-2">
                <li className="flex items-start">
                  <span className="text-neutral-600 dark:text-neutral-400 mr-2">
                    •
                  </span>
                  <span className="text-sm text-neutral-600 dark:text-neutral-400">
                    First cohort onboarding for{" "}
                    <a
                      href="#"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Arbitrum Stylus
                    </a>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-neutral-600 dark:text-neutral-400 mr-2">
                    •
                  </span>
                  <span className="text-sm text-neutral-600 dark:text-neutral-400">
                    Mastering Arbitrum curriculum
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-neutral-600 dark:text-neutral-400 mr-2">
                    •
                  </span>
                  <span className="text-sm text-neutral-600 dark:text-neutral-400">
                    Hackathons & workshops across Arbitrum, NEAR, and more
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Developer Tooling */}
          <div className="space-y-6 p-8 min-h-[45dvh] border-r border-neutral-200 dark:border-neutral-800">
            <div className="flex items-center gap-3">
              <Wrench className="h-7 w-7 text-neutral-900 dark:text-neutral-100" />
              <h3 className="text-2xl font-extrabold text-neutral-900 dark:text-neutral-100">
                Developer Tooling
              </h3>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              We build and contribute to open-source tools that streamline
              development across chains.
            </p>
            <div className="space-y-1">
              <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                Examples:
              </p>
              <ul className="space-y-4 mt-2">
                <li className="flex items-start">
                  <span className="text-neutral-600 dark:text-neutral-400 mr-2">
                    •
                  </span>
                  <span className="text-sm text-neutral-600 dark:text-neutral-400">
                    Cross-chain development SDKs
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-neutral-600 dark:text-neutral-400 mr-2">
                    •
                  </span>
                  <span className="text-sm text-neutral-600 dark:text-neutral-400">
                    Smart contract testing frameworks
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-neutral-600 dark:text-neutral-400 mr-2">
                    •
                  </span>
                  <span className="text-sm text-neutral-600 dark:text-neutral-400">
                    Developer documentation and tutorials
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Real-World dApps */}
          <div className="space-y-6 p-8 min-h-[45dvh]">
            <div className="flex items-center gap-3">
              <Rocket className="h-7 w-7 text-neutral-900 dark:text-neutral-100" />
              <h3 className="text-2xl font-extrabold text-neutral-900 dark:text-neutral-100">
                Real-World dApps
              </h3>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              We don&apos;t stop at education, we build. Our team actively
              ships decentralized applications aimed at real adoption and
              market fit.
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Projects coming soon.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
