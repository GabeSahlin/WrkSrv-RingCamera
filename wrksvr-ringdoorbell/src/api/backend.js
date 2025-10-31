const BASE_URL = import.meta.env.VITE_BASE_URL;

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