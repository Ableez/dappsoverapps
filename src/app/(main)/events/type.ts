export type EventDataType = {
  status: "Upcoming" | "Past" | "Ongoing";
  title: string;
  description: string;
  coverImage: string;
  link: string;
  time?: string;
  date?: string;
  location?: string;
};
