import Image from "next/image";

const features = [
  {
    number: 1,
    color: "bg-green-600 dark:bg-green-500",
    title: "Build open-source developer tooling for emerging chains",
  },
  {
    number: 2,
    color: "bg-yellow-600 dark:bg-yellow-500",
    title: "Design and run onboarding programs and hackathons",
  },
  {
    number: 3,
    color: "bg-blue-600 dark:bg-blue-500",
    title: "Launch production-ready dApps that solve real problems",
  },
  {
    number: 4,
    color: "bg-pink-600 dark:bg-pink-500",
    title: "Collaborate with protocols and communities globally",
  },
];

export default function AboutSection() {
  return (
    <section className="py-16 lg:py-24 bg-white dark:from-black dark:to-gray-950 bg-gradient-to-b" id={"about-us-section"}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          <h2 className="md:text-9xl text-7xl font-black text-neutral-200 dark:text-neutral-950 ">
            About Us
          </h2>
          <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-200 text-center">
            About Us
          </h2>
        </div>

        {/* What We Do Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20 py-20">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <h3 className="text-3xl lg:text-5xl font-bold text-neutral-900 dark:text-white">
                What We Do
              </h3>
              {/* Star/Compass Icon */}
              <div className="w-24 h-24 flex items-center justify-center">
                <svg
                  width="120"
                  height="120"
                  viewBox="0 0 93 93"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M45.5042 93.0083L51.2777 83.0083H39.7306L45.5042 93.0083ZM46.5042 10L51.2777 0H39.7306L44.5042 10H46.5042ZM45.5042 84.0083H46.5042L46.5042 9H45.5042H44.5042L44.5042 84.0083H45.5042Z"
                    fill="currentColor"
                    className="text-blue-700 dark:text-blue-400"
                  />
                  <path
                    d="M10 44.5042L0 39.7306L0 51.2777L10 46.5042V44.5042ZM93.0083 45.5042L83.0083 39.7306V51.2777L93.0083 45.5042ZM9 45.5042V46.5042H84.0083V45.5042V44.5042H9V45.5042Z"
                    fill="currentColor"
                    className="text-blue-700 dark:text-blue-400"
                  />
                  <path
                    d="M19.2777 70.9022L8.83121 74.5979L16.9962 82.7629L20.6919 72.3165L19.2777 70.9022ZM78.6805 12.9136L67.5269 15.9022L75.6919 24.0672L78.6805 12.9136ZM19.2777 72.3165L19.9848 73.0236L73.0236 19.9847L72.3165 19.2776L71.6094 18.5705L18.5706 71.6094L19.2777 72.3165Z"
                    fill="currentColor"
                    className="text-blue-700 dark:text-blue-400"
                  />
                  <path
                    d="M22.1061 19.2776L18.4104 8.83112L10.2454 16.9961L20.6918 20.6918L22.1061 19.2776ZM80.0947 78.6804L77.1061 67.5269L68.9411 75.6918L80.0947 78.6804ZM20.6918 19.2776L19.9847 19.9847L73.0236 73.0235L73.7307 72.3164L74.4378 71.6093L21.3989 18.5705L20.6918 19.2776Z"
                    fill="currentColor"
                    className="text-blue-700 dark:text-blue-400"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="lg:pl-8">
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
              Dapps over Apps is a builder-led Web3 collective focused on
              creating developer tools, onboarding ecosystems, and launching
              functional dApps. We work across multiple blockchain networks to
              remove barriers to entry, speed up development cycles, and bring
              real-world utility to decentralized tech.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="relative w-full mb-20">
          <div className="grid md:grid-cols-2 gap-8  w-full ">
            {features.map((feature) => (
              <div
                key={feature.number}
                className="relative w-full p-12 flex align-middle place-items-center justify-start gap-4"
              >
                <div
                  className={`w-12 h-12 rounded-full ${feature.color} flex items-center justify-center flex-shrink-0`}
                >
                  <span className="text-white font-bold text-lg">
                    {feature.number}
                  </span>
                </div>
                <p className="text-lg font-bold text-neutral-900 dark:text-neutral-100 leading-relaxed">
                  {feature.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission and Vision Cards */}
        <div className="grid lg:grid-cols-2 gap-12 h-fit md:h-[50dvh] place-items-center">
          <div className="flex align-middle place-items-center gap-6 md:h-[35dvh] md:flex-row flex-col">
            <div className="overflow-clip rounded-3xl relative bg-gray-400 aspect-square md:h-[35dvh] w-full">
              <Image
                src="/images/wedo1.png"
                alt="our mission"
                width={600}
                height={600}
                className="h-full object-cover w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 flex items-end p-6">
                <h3 className="text-2xl font-bold text-white">Our Mission</h3>
              </div>
            </div>
            <p className="text-neutral-700 dark:text-neutral-300 p-4 rounded-xl bg-gray-200 md:p-0 md:bg-transparent font-medium text-shadow-gray-500">
              To drive the sustainable growth of Web3 by equipping developers
              with powerful tools, accessible education, and the means to build
              applications that matter.
            </p>
          </div>
          <div className="flex align-middle place-items-center gap-6 md:h-[35dvh] md:flex-row flex-col">
            <div className="overflow-clip rounded-3xl relative bg-gray-400 aspect-square md:h-[35dvh] w-full">
              <Image
                src="/images/wedo2.png"
                alt="our vision"
                width={600}
                height={600}
                className="h-full object-cover w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 flex items-end p-6">
                <h3 className="text-2xl font-bold text-white">Our Vision</h3>
              </div>
            </div>
            <p className="text-neutral-700 dark:text-neutral-300 p-4 rounded-xl bg-gray-200 md:p-0 md:bg-transparent font-medium text-shadow-gray-500">
              A decentralized future built by empowered developers and used by
              everyday people.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
