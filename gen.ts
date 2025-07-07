type Highlight = {
  imageUrl: string;
  caption: string;
};

type Block = {
  title: string;
  description: string;
  highlights: Highlight[];
};

const highlightImages: string[] = [
  "/images/works/Rectangle 21-1.png",
  "/images/works/Rectangle 21-2.png",
  "/images/works/Rectangle 21-3.png",
  "/images/works/Rectangle 21-4.png",
  "/images/works/Rectangle 21.png",
  "/images/works/Rectangle 22-1.png",
  "/images/works/Rectangle 22-2.png",
  "/images/works/Rectangle 22-3.png",
  "/images/works/Rectangle 22.png",
  "/images/works/Rectangle 23-1.png",
  "/images/works/Rectangle 23-2.png",
  "/images/works/Rectangle 23-3.png",
  "/images/works/Rectangle 23.png",
  "/images/works/Rectangle 24-1.png",
  "/images/works/Rectangle 24.png",
];

const highlightCaptions: string[] = [
  "Opening Ceremony",
  "Panel Discussion",
  "Networking Session",
  "Hands-on Coding",
  "Mentorship Sessions",
  "Graduation Day",
  "Tool Launch",
  "Community Contributions",
  "Live Demos",
  "Protocol Integration",
  "DAO Workshops",
  "Joint Events",
  "Keynote Speech",
  "Hackathon Winners",
  "Workshop Activities",
  "Closing Remarks",
];

// Utility to get N random unique images and captions
function getRandomHighlights(
  count: number,
  usedIndices: Set<number>
): Highlight[] {
  const highlights: Highlight[] = [];
  const availableIndices = highlightImages
    .map((_, idx) => idx)
    .filter((idx) => !usedIndices.has(idx));
  for (let i = 0; i < count; i++) {
    if (availableIndices.length === 0) break;
    const randIdx = Math.floor(Math.random() * availableIndices.length);
    const imgIdx = availableIndices[randIdx];
    usedIndices.add(imgIdx);
    highlights.push({
      imageUrl: highlightImages[imgIdx],
      caption: highlightCaptions[imgIdx] ?? `Highlight ${imgIdx + 1}`,
    });
    availableIndices.splice(randIdx, 1);
  }
  return highlights;
}

const blocks: Block[] = [
  {
    title: "Hosted Africa’s largest grassroots Web3 conference",
    description: "Hackathons & Events",
    highlights: getRandomHighlights(3, new Set()),
  },
  {
    title: "Launched Developer Bootcamps Across Africa",
    description: "Education & Training",
    highlights: getRandomHighlights(3, new Set()),
  },
  {
    title: "Built Open Source Tools for Web3 Ecosystem",
    description: "Product Development",
    highlights: getRandomHighlights(3, new Set()),
  },
  {
    title: "Partnered with Leading Protocols & DAOs",
    description: "Collaborations",
    highlights: getRandomHighlights(3, new Set()),
  },
];

console.log("BLOCKS", blocks);
