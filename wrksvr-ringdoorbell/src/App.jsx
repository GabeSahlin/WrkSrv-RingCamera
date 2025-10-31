// wrksvr-ringdoorbell/src/App.jsx


import React from 'react';
import Navbar from './components/navbar.jsx';
import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Navbar />
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
}
