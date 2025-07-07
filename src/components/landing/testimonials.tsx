import Image from "next/image";
import { InfiniteMovingCards } from "../anims/infinit-moving-cards";

const testimonials: {
  quote: string;
  name: string;
  title: string;
  company: string;
  avatar: string;
}[] = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
    company: "Penguin Books",
    avatar: "https://github.com/shadcn.png",
  },
  {
    quote:
      "Dapps over Apps has been instrumental in helping us understand Stylus and onboard Rust developers quickly.",
    name: "Jacob Wright",
    title: "Lead Developer",
    company: "Microsoft",
    avatar: "https://github.com/shadcn.png",
  },
  {
    quote:
      "Thank you Dapps over Apps for providing us with invaluable learning experience",
    name: "McDonald Amure",
    title: "Software Engineer",
    company: "Google",
    avatar: "https://github.com/shadcn.png",
  },
  {
    quote:
      "Their developer onboarding efforts are among the most practical and impactful we've seen across Africa.",
    name: "Ahmed Abdullahi",
    title: "CTO",
    company: "Meta",
    avatar: "https://github.com/shadcn.png",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-950 p-4" id={"testimonials-section"}>
      <div className="w-full mx-auto">
        {/* Image Gallery - Masonry Layout */}
        <div className="mb-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {/* Column 1 */}
            <div className="flex flex-col gap-3">
              <div className="relative rounded-lg overflow-hidden h-[260px]">
                <Image
                  src={"/images/image-4.png"}
                  alt="Office space with developers"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative rounded-lg overflow-hidden h-[260px]">
                <Image
                  src={"/images/image-12.png"}
                  alt="Developer workspace"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-3">
              <div className="relative rounded-lg overflow-hidden h-[140px]">
                <Image
                  src={"/images/image-3.png"}
                  alt="Team presentation"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative rounded-lg overflow-hidden h-[140px]">
                <Image
                  src={"/images/image-4.png"}
                  alt="Developers collaborating"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative rounded-lg overflow-hidden h-[240px] md:h-[140px]">
                <Image
                  src={"/images/image-5.png"}
                  alt="Coding on laptop"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-3 -mt-8">
              <div className="relative rounded-lg overflow-hidden h-[400px]">
                <Image
                  src={"/images/image-6.png"}
                  alt="Developer setup"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Column 4 */}
            <div className="flex flex-col gap-3 -mt-8">
              <div className="relative rounded-lg overflow-hidden h-[400px]">
                <Image
                  src={"/images/image-7.png"}
                  alt="Coding environment"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Column 5 - Only visible on larger screens */}
            <div className="hidden lg:flex flex-col gap-3">
              <div className="relative rounded-lg overflow-hidden h-[140px]">
                <Image
                  src={"/images/image-10.png"}
                  alt="Developer desk"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative rounded-lg overflow-hidden h-[140px]">
                <Image
                  src={"/images/image-11.png"}
                  alt="Coding screen"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative rounded-lg overflow-hidden h-[140px]">
                <Image
                  src={"/images/image-12.png"}
                  alt="Developer pair programming"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Column 6 - Only visible on larger screens */}
            <div className="hidden lg:flex flex-col gap-3">
              <div className="relative rounded-lg overflow-hidden h-[260px]">
                <Image
                  src={"/images/image-13.png"}
                  alt="Night coding session"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative rounded-lg overflow-hidden h-[260px]">
                <Image
                  src={"/images/image.png"}
                  alt="Developer setup"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Header */}
        <div className="text-center md:-mt-16 mb-40">
          <div className="text-center  relative p-2 -mt-6">
            <h2 className="md:text-5xl text-5xl font-black text-neutral-200 dark:text-gray-900 "> 
              Testimonials
            </h2>
            <h2 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200/60 text-center">
              Testimonials
            </h2>
          </div>

          <h2 className="text-5xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            Trusted by creatives and leaders
          </h2>
          <p className="text-2xl text-gray-600 dark:text-gray-400">
            from various industries
          </p>
        </div>

        <div className="rounded-md flex flex-col antialiased bg-white dark:to-gray-950 bg-gradient-to-b dark:from-gray-950 dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden w-full">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
}
