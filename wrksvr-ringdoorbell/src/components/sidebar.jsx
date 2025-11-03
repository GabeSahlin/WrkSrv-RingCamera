// src/components/Sidebar.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Video, Settings, Menu, X } from "lucide-react";

export default function Sidebar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(true);

  const links = [
    { name: "Home", path: "/", icon: <Home size={22} /> },
    { name: "Events", path: "/events", icon: <Video size={22} /> },
    { name: "Settings", path: "/settings", icon: <Settings size={22} /> },
  ];

  return (
    <aside
      className={`${
        open ? "w-64" : "w-20"
      } h-screen bg-gradient-to-b from-blue-700 to-blue-900 text-white flex flex-col shadow-2xl transition-all duration-300 fixed left-0 top-0`}
    >
      <div className="flex items-center justify-between p-4 border-b border-blue-600">
        <h1
          className={`text-lg font-semibold tracking-wide transition-opacity ${
            open ? "opacity-100" : "opacity-0"
          }`}
        >
          WrkSvr
        </h1>
        <button
          onClick={() => setOpen(!open)}
          className="text-blue-200 hover:text-white"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <nav className="flex flex-col gap-2 mt-4 px-3">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              pathname === link.path
                ? "bg-blue-500 text-white font-semibold shadow-inner"
                : "hover:bg-blue-600 hover:text-white text-blue-200"
            }`}
          >
            {link.icon}
            {open && <span>{link.name}</span>}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
