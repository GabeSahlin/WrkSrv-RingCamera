// wrksvr-ringdoorbell/src/components/navbar.jsx

import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "Events", path: "/events" },
    { name: "Settings", path: "/settings" },
  ];

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      <h1 className="text-xl font-bold text-blue-600">WrkSvr RingDoorbell</h1>
      <ul className="flex gap-6">
        {links.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className={`hover:text-blue-500 ${
                pathname === link.path ? "text-blue-600 font-semibold" : ""
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
