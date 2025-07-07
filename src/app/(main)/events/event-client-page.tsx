"use client";

import React from "react";
import { EventsHero } from "#/components/anims/events-hero";
import { motion } from "motion/react";
import Image from "next/image";
import { Button } from "#/components/ui/button";
import { CalendarDays, Clock, MapPin } from "lucide-react";
import Markdown from "react-markdown";
import { EventDataType } from "./type";

const EventsPage = ({ events }: { events: EventDataType[] | null }) => {
  if (!events || events.length === 0) {
    return (
      <>
        <EventsHero />
        <div className="flex flex-col items-center justify-center max-w-5xl mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Events</h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 text-center max-w-2xl">
              Join us for exciting workshops, hackathons, and networking events in
              the Web3 space.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center p-8 bg-gray-50 dark:bg-gray-800 rounded-xl w-full"
          >
            <Image 
              src="/placeholder.png" 
              alt="No events" 
              width={200} 
              height={200} 
              className="mb-6 opacity-50"
            />
            <h3 className="text-2xl font-semibold mb-2">No events available</h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-center mb-6">
              We don&apos;t have any events scheduled at the moment. Check back soon!
            </p>
            <Button variant="outline">Subscribe for updates</Button>
          </motion.div>
        </div>
      </>
    );
  }

  return (
    <>
      <EventsHero />

      <div className="flex flex-col items-center justify-center max-w-5xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Events</h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 text-center max-w-2xl">
            Join us for exciting workshops, hackathons, and networking events in
            the Web3 space.
          </p>
        </motion.div>

        <div className="w-full space-y-16">
          {/* Upcoming Events */}
          {events.filter((event) => event.status === "Upcoming").length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-2xl font-semibold mb-6 border-l-4 border-purple-500 pl-3">
                Upcoming Events
              </h3>
              <div className="flex flex-col">
                {events
                  .filter((event) => event.status === "Upcoming")
                  .map((event, index) => (
                    <EventCard
                      key={`${event.title}-${index}`}
                      event={event}
                      index={index}
                    />
                  ))}
              </div>
            </motion.div>
          )}

          {/* Ongoing Events */}
          {events.filter((event) => event.status === "Ongoing").length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-6 border-l-4 border-blue-500 pl-3">
                Ongoing Events
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {events
                  .filter((event) => event.status === "Ongoing")
                  .map((event, index) => (
                    <EventCard
                      key={`${event.title}-${index}`}
                      event={event}
                      index={index}
                    />
                  ))}
              </div>
            </motion.div>
          )}

          {/* Past Events */}
          {events.filter((event) => event.status === "Past").length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-2xl font-semibold mb-6 border-l-4 border-gray-500 pl-3">
                Past Events
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {events
                  .filter((event) => event.status === "Past")
                  .map((event, index) => (
                    <EventCard
                      key={`${event.title}-${index}`}
                      event={event}
                      index={index}
                    />
                  ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
};

export default EventsPage;

const EventCard = ({
  event,
  index,
}: {
  event: EventDataType;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.1 * index,
        type: "spring",
        stiffness: 100,
      }}
      className="mb-8 last:mb-0"
    >
      <div className="flex flex-col md:flex-row gap-12 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm  overflow-hidden group  cursor-pointer border-2 border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600">
        <div className="relative w-full md:w-2/5 aspect-square overflow-hidden rounded-lg">
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            className="h-full w-full"
          >
            <Image
              src={event.coverImage || "/placeholder.png"}
              alt={event.title}
              fill
              className="object-cover"
            />
          </motion.div>

          <div className="absolute top-3 right-3 z-20 ">
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium ${
                event.status === "Upcoming"
                  ? "bg-purple-500"
                  : event.status === "Ongoing"
                  ? "bg-blue-500"
                  : "bg-gray-500"
              } text-white`}
            >
              {event.status}
            </span>
          </div>
        </div>

        <div className="flex flex-col flex-1 justify-between border border-black align-middle">
          <h4 className="text-3xl md:text-5xl mb-4">{event.title}</h4>
          <div className="mt-2 mb-4 prose prose-sm dark:prose-invert">
            <Markdown>{event.description}</Markdown>
          </div>

          {event.date && (
            <div className="flex items-center text-sm text-neutral-600 dark:text-neutral-400">
              <CalendarDays className="w-4 h-4 mr-2" />
              <span>{event.date}</span>
            </div>
          )}

          {event.time && (
            <div className="flex items-center text-sm text-neutral-600 dark:text-neutral-400">
              <Clock className="w-4 h-4 mr-2" />
              <span>{event.time}</span>
            </div>
          )}

          {event.location && (
            <div className="flex items-center text-sm text-neutral-600 dark:text-neutral-400">
              <MapPin className="w-4 h-4 mr-2" />
              <span>{event.location}</span>
            </div>
          )}

          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="mt-auto"
          >
            <Button
              variant="default"
              className="w-full md:w-auto px-6 group-hover:bg-purple-600 transition-colors"
            >
              Register
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
