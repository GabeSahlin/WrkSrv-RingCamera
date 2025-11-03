// src/pages/Home.jsx
import React, { useState, useEffect } from "react";
import { getLatestImage } from "../api/backend.js";

export default function Home() {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const loadImage = async () => {
      try {
        const blob = await getLatestImage();
        setImageUrl(URL.createObjectURL(blob));
      } catch (err) {
        console.error(err);
      }
    };

    loadImage();
    const interval = setInterval(loadImage, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center text-center">
      <h2 className="text-4xl font-semibold mb-8 text-gray-800">
        Live Doorbell Feed
      </h2>

      <div className="bg-white shadow-xl rounded-2xl overflow-hidden p-4 w-full max-w-xl">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="Latest snapshot"
            className="rounded-xl shadow-md w-full object-cover"
          />
        ) : (
          <p className="text-gray-500">Loading latest image...</p>
        )}
      </div>
    </div>
  );
}
