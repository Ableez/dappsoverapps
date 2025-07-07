"use client";

export default function CTASection() {
  return (
    <section
      className="py-16 lg:h-fit h-screen lg:py-24 bg-gradient-to-b dark:from-gray-950 dark:to-black"
      id="join-the-collective"
    >
      <div className="max-w-7xl mx-auto px-2 md::px-12 ">
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          <h2 className="md:text-9xl text-7xl font-black text-gray-200 dark:text-gray-900 ">
            Join Us
          </h2>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 text-center">
            Join Us
          </h2>
        </div>

        {/* CTA Card */}
        <div className="relative">
          <div className="rounded-[2rem]  bg-[url('/Collaborate.webp')] bg-cover bg-center md:rounded-[6rem] px-8 py-16 lg:px-16 lg:py-20 text-center text-white overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute left-8 top-1/2 -translate-y-1/2 opacity-20">
              <div className="w-32 h-32 rounded-full border border-white/30"></div>
              <div className="w-24 h-24 rounded-full border border-white/20 absolute top-4 left-4"></div>
              <div className="w-16 h-16 rounded-full border border-white/10 absolute top-8 left-8"></div>
            </div>

            <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-20">
              <div className="w-40 h-40 rounded-full border border-white/30"></div>
              <div className="w-32 h-32 rounded-full border border-white/20 absolute top-4 left-4"></div>
              <div className="w-24 h-24 rounded-full border border-white/10 absolute top-8 left-8"></div>
              <div className="w-16 h-16 rounded-full border border-white/5 absolute top-12 left-12"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                Want to collaborate?
              </h2>

              <p className="text-base lg:text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                We&apos;re open to partnerships, grant-funded projects, and
                developer-led initiatives.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  className={
                    "w-full cursor-pointer transition-colors duration-300 rounded-full p-2 px-4 border-2 font-semibold  border-white hover:bg-white/80 bg-white text-black"
                  }
                  onClick={() =>
                    window.open("https://linktr.ee/dappsoverapps", "_blank")
                  }
                >
                  Join the Collective
                </button>
                <button
                  className={
                    "w-full cursor-pointer transition-colors duration-300 rounded-full p-2 px-4 border-2 font-semibold text-white  border-white hover:bg-gray-400/10 hover:text-gray-300 dark:hover:text-white "
                  }
                  onClick={() =>
                    window.open("https://linktr.ee/dappsoverapps", "_blank")
                  }
                >
                  Pitch Us Your Idea
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
