// client/src/pages/Settings.jsx
import React, { useState, useEffect } from "react";

export default function Settings() {
  const defaultSettings = {
    backendIP: "192.168.0.100",
    refreshInterval: 15, // seconds
    notificationsEnabled: true,
    motionDetection: true,
  };

  // Load settings from localStorage if they exist
  const [settings, setSettings] = useState(() => {
    const saved = localStorage.getItem("wrksvr_settings");
    return saved ? JSON.parse(saved) : defaultSettings;
  });

  const [apiData, setApiData] = useState(null);

  // --- Mock API data ---
  useEffect(() => {
    setTimeout(() => {
      setApiData({
        deviceName: "ESP32-CAM #01",
        status: "Online",
        lastCheck: "Just now",
      });
    }, 1000);
  }, []);

  // --- Save to localStorage whenever settings change ---
  // Replace this with API calls as needed
  // await fetch(`${settings.backendIP}/api/settings`, { method: 'POST', body: JSON.stringify(settings) });
  useEffect(() => {
    localStorage.setItem("wrksvr_settings", JSON.stringify(settings));
  }, [settings]);

  // --- Handlers ---
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings((prev) => ({ ...prev, [name]: value }));
  };

  const handleToggle = (name) => {
    setSettings((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const handleSave = () => {
    localStorage.setItem("wrksvr_settings", JSON.stringify(settings));
    alert("Settings saved locally!");
  };

  // --- Reset to defaults ---
  const handleReset = () => {
    if (confirm("Reset all settings to default values?")) {
      setSettings(defaultSettings);
      localStorage.setItem("wrksvr_settings", JSON.stringify(defaultSettings));
      alert("Settings reset to default values.");
    }
  };

  // --- Render ---
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Settings</h1>

        {/* General Settings */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">General</h2>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Backend IP Address
            </label>
            <input
              type="text"
              name="backendIP"
              value={settings.backendIP}
              onChange={handleChange}
              className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring focus:ring-indigo-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Refresh Interval (seconds)
            </label>
            <input
              type="number"
              name="refreshInterval"
              value={settings.refreshInterval}
              onChange={handleChange}
              min="5"
              className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring focus:ring-indigo-500"
            />
          </div>

          <div className="flex items-center justify-between py-2">
            <span>Enable Notifications</span>
            <button
              onClick={() => handleToggle("notificationsEnabled")}
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                settings.notificationsEnabled
                  ? "bg-green-500 text-white"
                  : "bg-gray-500 text-white"
              }`}
            >
              {settings.notificationsEnabled ? "On" : "Off"}
            </button>
          </div>

          <div className="flex items-center justify-between py-2">
            <span>Enable Motion Detection</span>
            <button
              onClick={() => handleToggle("motionDetection")}
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                settings.motionDetection
                  ? "bg-green-500 text-white"
                  : "bg-gray-500 text-white"
              }`}
            >
              {settings.motionDetection ? "On" : "Off"}
            </button>
          </div>
        </div>

        {/* Device Info */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Device Info</h2>
          {apiData ? (
            <div>
              <p><strong>Name:</strong> {apiData.deviceName}</p>
              <p><strong>Status:</strong> {apiData.status}</p>
              <p><strong>Last Check:</strong> {apiData.lastCheck}</p>
            </div>
          ) : (
            <p className="italic text-gray-500">Loading device data...</p>
          )}
        </div>

        {/* Save Button */}
        <div className="text-right">
          <button
            onClick={handleReset}
            className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition"
          >
            Reset to Default
          </button>

          <button
            onClick={handleSave}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
}
