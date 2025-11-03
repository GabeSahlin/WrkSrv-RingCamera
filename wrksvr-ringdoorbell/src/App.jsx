// src/App.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/sidebar.jsx";

export default function App() {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />
      <main className="flex-1 ml-20 md:ml-64 p-10 transition-all duration-300">
        <div className="max-w-6xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
