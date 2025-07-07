import React from "react";
import EventsPage from "./event-client-page";
import { EventDataType } from "./type";

const Page = async () => {
  const eventsJson = await fetch("/events.json");
  const eventsJSON = await eventsJson.json();

  return <EventsPage events={(eventsJSON as EventDataType[]) ?? null} />;
};

export default Page;
