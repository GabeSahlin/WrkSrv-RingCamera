const BASE_URL = import.meta.env.VITE_BASE_URL;

export { BASE_URL };

const response = await fetch(`${BASE_URL}/events`);
const data = await response.json();
console.log(data);