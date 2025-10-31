// wrksvr-ringdoorbell/src/components/eventcard.jsx

import React from "react";

export default function EventCard({ event }) {
  return (
    <div className="bg-white shadow-md p-4 rounded-xl">
      <p className="font-medium text-gray-800">📅 {event.timestamp}</p>
      <img
        src={event.image_url}
        alt="Motion event"
        className="rounded-lg mt-2"
      />
    </div>
  );
}
