// wrksvr-ringdoorbell/src/api/backend.js

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const fetchEvents = async () => {
  // Return some fake events until backend exists
  return [
    {
      id: 1,
      timestamp: "2025-10-31 12:00 PM",
      image_url: "/sample-event.jpg",
    },
    {
      id: 2,
      timestamp: "2025-10-30 6:15 PM",
      image_url: "/sample-event2.jpg",
    },
  ];
};

export const uploadImage = async (imageData) => {
  // Stub — pretend upload succeeded
  return { message: "Image uploaded successfully (mocked)" };
};

// ✅ Mock getLatestImage for local testing
export const getLatestImage = async () => {
  // Fetch a static image from your public folder
  const response = await fetch("/sample-latest.jpg");
  return await response.blob();
};



/*
export const fetchEvents = async () => {
    const response = await fetch(`${BASE_URL}/events`);
    if (!response.ok) {
        throw new Error('Failed to fetch events');
    }
    return await response.json();
};

export const uploadImage = async (imageData) => {
    const response = await fetch(`${BASE_URL}/upload`, {
        method: 'POST',
        body: imageData,
    });
    if (!response.ok) {
        throw new Error('Failed to upload image');
    }
    return await response.json();
};

export const getLatestImage = async () => {
  const response = await fetch(`${BASE_URL}/latest.jpg`);
  if (!response.ok) {
    throw new Error("Failed to fetch latest image");
  }
  return await response.blob();
};
*/