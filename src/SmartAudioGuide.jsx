import React, { useState, useEffect, useRef } from "react";

export default function BeaconAudioGuide({ monasteries }) {
  const [currentMonastery, setCurrentMonastery] = useState(null);
  const [audioUrl, setAudioUrl] = useState("");
  const audioRef = useRef(null);

  // Map beacon IDs to monastery IDs
  const beaconMap = {
    "beacon-uuid-1": 1, // Rumtek Monastery
    "beacon-uuid-2": 2, // Enchey Monastery
    "beacon-uuid-3": 3, // Pemayangtse
  };

  const startScanning = async () => {
    try {
      console.log("Requesting Bluetooth device...");
      const device = await navigator.bluetooth.requestDevice({
        filters: [{ services: ["battery_service"] }], // Example filter
        optionalServices: ["generic_access"],
      });

      console.log("Connecting to GATT server...");
      const server = await device.gatt.connect();

      console.log("Connected! Listening for beacon signals...");

      // Simulate detection via beaconMap
      device.addEventListener("gattserverdisconnected", () => {
        console.log("Device disconnected");
      });

      // In real app, you’d parse beacon UUIDs and detect proximity
      const detectedBeaconUUID = "beacon-uuid-1";
      const monasteryId = beaconMap[detectedBeaconUUID];

      const monastery = monasteries.find((m) => m.monastery_id === monasteryId);
      if (monastery) {
        setCurrentMonastery(monastery);
        if (monastery.audio_links?.length) {
          setAudioUrl(monastery.audio_links[0]);
          audioRef.current.play();
        }
      }
    } catch (err) {
      console.error("Bluetooth scan error:", err);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto py-24">
      <h2 className="text-2xl font-bold mb-4">Smart Audio Guide via Beacon</h2>
      <button
        onClick={startScanning}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 mb-4"
      >
        Scan for Nearby Monasteries
      </button>

      {currentMonastery && (
        <div className="bg-gray-100 p-4 rounded shadow">
          <h3 className="text-xl font-semibold">{currentMonastery.name}</h3>
          <p className="text-gray-700">{currentMonastery.description}</p>
          <audio ref={audioRef} src={audioUrl} controls />
        </div>
      )}
    </div>
  );
}
