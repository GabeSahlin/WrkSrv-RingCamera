// src/components/EventCard.jsx
import React from "react";

export default function EventCard({ event }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
      <img
        src={event.image_url}
        alt="Motion event"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <p className="text-gray-700 dark:text-gray-300 text-sm">
          📅 {new Date(event.timestamp).toLocaleString()}
        </p>
      </div>
    </div>
  );
}
