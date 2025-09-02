// import React from "react";
// import { useSearchParams } from "react-router-dom";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import L from "leaflet";
// import "leaflet/dist/leaflet.css";

// import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
// import markerIcon from "leaflet/dist/images/marker-icon.png";
// import markerShadow from "leaflet/dist/images/marker-shadow.png";

// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: markerIcon2x,
//   iconUrl: markerIcon,
//   shadowUrl: markerShadow,
// });

// export default function MapView() {
//   const [searchParams] = useSearchParams();

//   const lat = parseFloat(searchParams.get("lat")) || 27.3256;
//   const lng = parseFloat(searchParams.get("lng")) || 88.6132;
//   const selectedName = searchParams.get("name") || "Selected Monastery";

//   return (
//     <div className="w-full flex justify-center items-center py-24">
//       <div className="w-[90%] h-[85vh] shadow-lg rounded-xl overflow-hidden">
//         <MapContainer
//           center={[lat, lng]}
//           zoom={13}
//           style={{ width: "100%", height: "100%" }}
//         >
//           <TileLayer
//             attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           />

//           <Marker position={[lat, lng]}>
//             <Popup>
//               <b>{selectedName}</b>
//               <br />
//               Lat: {lat}, Lng: {lng}
//             </Popup>
//           </Marker>
//         </MapContainer>
//       </div>
//     </div>
//   );
// }
// src/components/MapView.jsx
import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

function ChangeView({ center }) {
  const map = useMap();
  map.setView(center, 13);
  return null;
}

export default function MapView() {
  const [searchParams] = useSearchParams();

  const defaultLat = parseFloat(searchParams.get("lat")) || 27.3256;
  const defaultLng = parseFloat(searchParams.get("lng")) || 88.6132;
  const defaultName = searchParams.get("name") || "Selected Monastery";

  const [location, setLocation] = useState({ lat: defaultLat, lng: defaultLng, name: defaultName });
  const [query, setQuery] = useState("");

  const monasteries = [
    { name: "Rumtek Monastery", lat: 27.3256, lng: 88.6132 },
    { name: "Pemayangtse Monastery", lat: 27.3042, lng: 88.2393 },
    { name: "Tashiding Monastery", lat: 27.2904, lng: 88.2816 },
    { name: "Enchey Monastery", lat: 27.3386, lng: 88.6068 },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    const found = monasteries.find((m) =>
      m.name.toLowerCase().includes(query.toLowerCase())
    );
    if (found) {
      setLocation(found);
    } else {
      alert("No monastery found with that name");
    }
  };

  return (
    <div className="bg-fixed bg-cover w-full min-h-screen flex flex-col items-center bg-gradient-to-t from-black/80 via-black/40 to-transparent
 py-24" 
    // style={{backgroundImage:"url('https://cdn.britannica.com/82/150182-050-800BBE18/Gurudongmar-Lake-Himalayas-India-Sikkim.jpg')"}}
    >
      {/* Starter text */}
      <div className="max-w-3xl text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-900 ">Interactive Map of Sikkim’s Monasteries</h2>
        <p className="mt-2 text-gray-700 rounded-2xl m-2 p-2">
          Explore monasteries across Sikkim. Use the search bar to quickly find
          a monastery and view its exact location with travel routes and nearby
          attractions.
        </p>
      </div>

      {/* Search bar */}
      <form
        onSubmit={handleSearch}
        className="flex w-full max-w-md mb-6 bg-white shadow rounded-lg overflow-hidden"
      >
        <input
          type="text"
          placeholder="Search monastery..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 px-4 py-2 outline-none"
        />
        <button
          type="submit"
          className="px-4 bg-blue-600 text-white font-semibold hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {/* Map */}
      <div className="w-[90%] h-[75vh] shadow-lg rounded-xl overflow-hidden">
        <MapContainer
          center={[location.lat, location.lng]}
          zoom={13}
          style={{ width: "100%", height: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <ChangeView center={[location.lat, location.lng]} />

          <Marker position={[location.lat, location.lng]}>
            <Popup>
              <b>{location.name}</b>
              <br />
              Lat: {location.lat}, Lng: {location.lng}
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}
