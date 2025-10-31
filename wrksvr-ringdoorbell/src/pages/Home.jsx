// wrksvr-ringdoorbell/src/pages/Home.jsx

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

    // Refresh the image every 5 seconds
    const interval = setInterval(loadImage, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-2xl font-semibold">Live Doorbell Feed</h2>
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="Latest snapshot"
          className="rounded-xl shadow-lg max-w-md"
        />
      ) : (
        <p>Loading latest image...</p>
      )}
    </div>
  );
}
