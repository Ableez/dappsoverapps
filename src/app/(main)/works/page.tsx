import React from "react";
import WorksHeroSection from "./_components/hero";
import Image from "next/image";

type Highlight = {
  imageUrl: string;
  caption: string;
  showCaption?: boolean;
};

type WorkSection = {
  id: string;
  title: string;
  showTitle: boolean;
  showDescription: boolean;
  descriptionPosition: "left" | "right";
  description: string;
  highlights: Highlight[];
  gridCols?: number;
  aspectRatio?: "square" | "video";
  showCaptions?: boolean;
};

const worksData: WorkSection[] = [
  {
    id: "developer-tooling",
    title: "Developer tooling",
    showTitle: true,
    showDescription: false,
    description: "Developer tooling",
    descriptionPosition: "left",

    highlights: [
      {
        imageUrl: "/images/dt1.png",
        caption: "Tool Launch",
        showCaption: false,
      },
      {
        imageUrl: "/images/dt2.png",
        caption: "Graduation Day",
        showCaption: false,
      },
      {
        imageUrl: "/images/dt3.png",
        caption: "Mentorship Sessions",
        showCaption: false,
      },
    ],
    gridCols: 3,
    aspectRatio: "square",
  },
  {
    id: "hackathons-events",
    description: "Hosted Africa’s largest grassroots Web3 conference",
    descriptionPosition: "left",
    showTitle: true,
    showDescription: true,
    title: "Hackathons & Events",
    highlights: [
      {
        imageUrl: "/images/hne1.png",
        caption: "Tool Launch",
        showCaption: false,
      },
      {
        imageUrl: "/images/hne2.png",
        caption: "Graduation Day",
        showCaption: false,
      },
      {
        imageUrl: "/images/hne3.png",
        caption: "Mentorship Sessions",
        showCaption: false,
      },
    ],
    gridCols: 3,
    aspectRatio: "square",
  },
  {
    id: "blockchain-events",
    title: "Organized Saskatchewan's first blockchain event",
    description: "Organized Saskatchewan's first blockchain event",
    descriptionPosition: "right",
    showTitle: false,
    showDescription: true,
    highlights: [
      {
        imageUrl: "/images/works/Rectangle 21-3.png",
        caption: "Community Contributions",
        showCaption: false,
      },
      {
        imageUrl: "/images/works/Rectangle 22-2.png",
        caption: "Networking Session",
        showCaption: false,
      },
      {
        imageUrl: "/images/works/Rectangle 23-2.png",
        caption: "Protocol Integration",
        showCaption: false,
      },
    ],
    gridCols: 3,
    aspectRatio: "square",
  },
  {
    id: "canada-blockchain",
    description: "Supported Canada's largest blockchain gathering",
    showTitle: false,
    showDescription: true,
    title: "Education & Training",
    descriptionPosition: "left",
    highlights: [
      {
        imageUrl: "/images/works/clb1.png",
        caption: "Community Contributions",
        showCaption: false,
      },
      {
        imageUrl: "/images/works/clb2.png",
        caption: "Networking Session",
        showCaption: false,
      },
    ],
    gridCols: 3,
    aspectRatio: "square",
  },
  {
    id: "arbitrum-hackathon",
    title: "Workshops",
    showTitle: true,
    showDescription: true,
    description: "Arbitrum SDK Hybrid Hackathon",
    descriptionPosition: "left",
    highlights: [
      {
        imageUrl: "/images/works/arb1.png",
        caption: "Tool Launch",
        showCaption: false,
      },
      {
        imageUrl: "/images/works/arb2.png",
        caption: "Graduation Day",
        showCaption: false,
      },
      {
        imageUrl: "/images/works/arb3.png",
        caption: "Mentorship Sessions",
        showCaption: false,
      },
    ],
    gridCols: 3,
    aspectRatio: "square",
  },
  {
    id: "near-sprint",
    description: "NEAR 3-day Application Build Sprint",
    showTitle: false,
    showDescription: true,
    title: "Education & Training",
    descriptionPosition: "right",
    highlights: [
      {
        imageUrl: "/images/works/near1.png",
        caption: "Community Contributions",
        showCaption: false,
      },
      {
        imageUrl: "/images/works/near2.png",
        caption: "Networking Session",
        showCaption: false,
      },
      {
        imageUrl: "/images/works/near3.png",
        caption: "Protocol Integration",
        showCaption: false,
      },
    ],
    gridCols: 3,
    aspectRatio: "square",
  },
  {
    id: "stylus-hackathon",
    description: "Stylus Virtual Hackathon",
    showTitle: false,
    showDescription: true,
    title: "Education & Training",
    descriptionPosition: "left",
    highlights: [
      {
        imageUrl: "/images/works/svh1.png",
        caption: "Community Contributions",
        showCaption: false,
      },
      {
        imageUrl: "/images/works/svh2.png",
        caption: "Networking Session",
        showCaption: false,
      },
      {
        imageUrl: "/images/works/svh3.png",
        caption: "Protocol Integration",
        showCaption: false,
      },
    ],
    gridCols: 3,
    aspectRatio: "square",
  },
  {
    id: "ecosystem-growth",
    title: "Ecosystem Growth",
    showTitle: true,
    showDescription: true,
    description: "Ecosystem Growth",
    descriptionPosition: "left",
    highlights: [
      {
        imageUrl:
          "https://cdn.prod.website-files.com/64b702e0e92a993f08b979ce/66677ca9e4a687ee934bfd03_Arbitrum%20ecosystem.jpg",
        caption: "Leading Arbitrum ecosystem expansion across Canada",
        showCaption: true,
      },
      {
        imageUrl:
          "https://substackcdn.com/image/fetch/w_1200,h_600,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F313aef0b-44a4-4a9b-9ce1-00dce892912e_1474x722.png",
        caption:
          "Built resources to promote validator education, Stylus dev onboarding, and business adoption",
        showCaption: true,
      },
    ],
    gridCols: 2,
    aspectRatio: "video",
  },
];

const WorksPage: React.FC = () => {
  const renderSection = (section: WorkSection) => {
    const gridColsClass =
      section.gridCols === 2
        ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-2"
        : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3";

    const aspectClass =
      section.aspectRatio === "video" ? "aspect-video" : "aspect-square";

    return (
      <div key={section.id} className="max-w-7xl mx-auto py-12 px-4">
        {section.showTitle && (
          <h2 className="md:text-7xl font-black text-3xl text-center p-8 md:p-32 md:pb-32 pb-16">
            {section.title}
          </h2>
        )}
        <div className="space-y-32">
          <section className="mb-6 md:mb-14">
            {section.showDescription && (
              <div
                className={`w-full flex align-middle place-items-center ${
                  section.descriptionPosition === "left"
                    ? "justify-start text-left"
                    : "justify-end text-right"
                }`}
              >
                <h3
                  className={`text-xl md:text-2xl font-bold mb-2 px-4 max-w-md opacity-80 py-4`}
                >
                  {section.description}
                </h3>
              </div>
            )}
            <div
              className={`grid ${gridColsClass} gap-8 justify-items-center w-full`}
            >
              {section.highlights.map((highlight, idx) => (
                <div
                  key={highlight.imageUrl + highlight.caption + idx}
                  className="flex flex-col items-center bg-white rounded-xl p-2 dark:bg-gray-100 w-full group border-2 border-b-4 hover:border-neutral-200/70 border-transparent duration-300 ease-in-out transition-all"
                >
                  <Image
                    src={highlight.imageUrl}
                    alt={highlight.caption}
                    width={800}
                    height={800}
                    className={`w-full h-[50dvh] ${aspectClass} object-cover rounded-lg mb-4 group-hover:brightness-120 cursor-pointer duration-300 ease-in-out transition-all`}
                    loading="lazy"
                  />
                  {highlight.showCaption && (
                    <span className="font-semibold text-center text-lg mt-4">
                      {highlight.caption}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    );
  };

  return (
    <div>
      <WorksHeroSection />
      {worksData.map(renderSection)}
    </div>
  );
};

export default WorksPage;
