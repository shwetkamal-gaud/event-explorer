import EventCard from "@/components/EventCard";
import GlassCard from "@/components/GlassCard";
import LocationFilter from "@/components/LocationFilter";
import { events } from "@/data/events";
import { useState } from "react";


export default function Home() {
  const [location, setLocation] = useState("All");

  const filteredEvents = location === "All"
    ? events
    : events.filter((e) => e.location === location);
  return (
    <main className="p-4">
      <GlassCard className="h-[85vh]">
          <LocationFilter selected={location} onChange={setLocation} />
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4">

          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
          </div>

      </GlassCard>
    </main>
  );
}
