// src/pages/Events.jsx
import React, { useEffect, useState } from "react";
import { fetchEvents } from "../api/backend.js";
import EventCard from "../components/EventCard.jsx";

export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents().then(setEvents).catch(console.error);
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-semibold mb-6">Recent Motion Events</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((e) => (
          <EventCard key={e.id} event={e} />
        ))}
      </div>
    </div>
  );
}
