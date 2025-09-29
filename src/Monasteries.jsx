import React, { useState } from "react";
import { MapPin, PlayCircle, Menu } from "lucide-react";
import Narration from "./Narration";
import { Link } from "react-router-dom";
import pemayangste from "../public/pemayangste.png";
import phensang from "../public/Phensong_monastery.jpg";
import kartok from "../public/Kartok-Monastery.jpg";
import dolling from "../public/dolling-monastery.jpg";
import serdup from "../public/Serdup Choling Monastery.jpg";
import nagdak from "../public/Ngadak Thupten Shedup Dhargey Choeling Monastery.jpg";
import durphin from "../public/Durpin Monastery (Zang Dhok Palri Phodang).jpg";
import sambdrupste from "../public/Samdruptse Monastery.avif";
export const monasteriesData = [
  {
    id: 1,
    name: "Pemayangtse Monastery",
    region: "West",
    description:
      "Pemayangtse Monastery, one of Sikkim's oldest and most prestigious monasteries, was established in the 17th century by Lama Lhatsun Chempo. It belongs to the Nyingma order of Tibetan Buddhism and is renowned for its role in preserving and propagating Nyingma teachings and traditions. The monastery is closely linked to the Chogyal (King) of Sikkim, who provided significant patronage, and is located near Pelling in West Sikkim. ",
    image: pemayangste,
    coords: { lat: 27.3143, lng: 88.2395 },
  },
  {
    id: 2,
    name: "Phensang Monastery",
    region: "East",
    description:
      "Phensang Monastery, belonging to the Nyingmapa Buddhist order, was founded in 1721 by the 3rd Lhatsun Jigmed Pawo. The monastery experienced significant damage from a devastating fire in 1947 and later from heavy rains in 1983, necessitating extensive rebuilding efforts aided by government involvement. Today, it is one of Sikkim's largest monasteries, housing approximately 300 lamas and hosting an annual sacred masked dance festival during the Sikkimese New Year in December. ",
    image: phensang,
    coords: { lat: 27.3921, lng: 88.6112 },
  },
  {
    id: 3,
    name: "Kartok Monastery",
    region: "West",
    description:
      "Kartok Monastery is a historic Sikkim site founded in the 17th century to honor the Tibetan Lama Kartok Rinpoche, who participated in the coronation of Sikkim's first king. It is located near Pelling, West Sikkim, and is considered a significant religious landmark for the state's Buddhist community, though it is a smaller, less ancient monastery than others like Pemayangtse or Rumtek. The monastery serves as a repository for the teachings of Tibetan Buddhism and features traditional Sikkimese architecture with colorful walls, sacred symbols, and murals depicting Buddhist figures.",
    image: kartok,
    coords: { lat: 27.3851, lng: 88.2541 },
  },
  {
    id: 4,
    name: "Doling Monastery",
    region: "South",
    description:
      "Doling Monastery was founded in 1718 AD by Lama Rigdzin Longyang in Ravangla, South Sikkim, following the Nyingmapa sect. The monastery was built after its founders, Lama Dorjelingpa and Rigdzin Longyang, fled Tibet during a Mongol invasion. The original structure was damaged by earthquakes and subsequently rebuilt in 1840, 1920, and 1984, with the descendants of the founders still maintaining the sacred site today.",
    image: dolling,
    coords: { lat: 27.3102, lng: 88.3702 },
  },
  {
    id: 6,
    name: "Serdup Choling Monastery",
    region: "South",
    description:
      "Serdup Choling Monastery in Namchi was established in 1967 to promote spiritual learning and peace. It features ornate paintings and offers stunning views of Mount Kanchenjunga.",
    image: sambdrupste,
    coords: { lat: 27.1701, lng: 88.3505 },
  },
  {
    id: 7,
    name: "Ngadak Thupten Shedup Dhargey Choeling Monastery",
    region: "South",
    description:
      "Ngadak Monastery, originally built in the 17th century by Chogyal Gyurmed Namgyal, is one of the oldest monasteries in Namchi. Restored after the 2011 earthquake, it remains a spiritual haven.",
    image: nagdak,
    coords: { lat: 27.1748, lng: 88.3625 },
  },
  {
    id: 8,
    name: "Durpin Monastery (Zang Dhok Palri Phodang)",
    region: "West",
    description:
      "Durpin Monastery, built in the 1960s atop Durpin Hill in Kalimpong, West Bengal, houses sacred Buddhist scriptures called the Kangyur. It offers panoramic views of Kalimpong town and surrounding hills.",
    image: durphin,
    coords: { lat: 27.0615, lng: 88.4652 },
  },
  {
    id: 10,
    name: "Samdruptse Monastery",
    region: "South",
    description:
      "Samdruptse Monastery near Namchi is famous for the towering 135 ft statue of Guru Padmasambhava, built in 2004. It is one of the most visited spiritual and tourist attractions in South Sikkim.",
    image: serdup,
    coords: { lat: 27.1533, lng: 88.3618 },
  },
];

export default function Monasteries() {
  const [selectedRegion, setSelectedRegion] = useState("All");
    const [expanded, setExpanded] = useState({});

  const regions = ["All", "East", "West", "South", "North", "Central"];

  const filteredMonasteries =
    selectedRegion === "All"
      ? monasteriesData
      : monasteriesData.filter((m) => m.region === selectedRegion);
  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };
  return (
    <div className="flex min-h-screen bg-amber-50">
      {/* Sidebar */}
      <aside className="w-64 bg-amber-400 shadow-md p-6 hidden md:block py-24">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Regions</h2>
        <ul className="space-y-4">
          {regions.map((region) => (
            <li key={region}>
              <button
                onClick={() => setSelectedRegion(region)}
                className={`w-full text-white text-left px-4 py-2 rounded-lg font-medium transition 
                  ${
                    selectedRegion === region
                      ? "bg-amber-200 text-white shadow-lg"
                      : "hover:bg-amber-200"
                  }`}
              >
                {region}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section
          className="bg-fixed min-h-[60vh] bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage:
              "url('https://www.esikkimtourism.in/wp-content/uploads/2018/10/climate-bnnr.jpg')",
          }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white bg-black/50 px-6 py-3 rounded-lg" data-aos="fade-down">
            Explore Monasteries of Sikkim
          </h1>
        </section>

        {/* Monasteries Grid */}

        <section className="py-12">
          <div className="max-w-5xl mx-auto px-6 space-y-10">
            {filteredMonasteries.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              data-aos="fade-up">
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 md:h-72 object-cover"
                />

                {/* Info */}
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-serif font-bold text-gray-800">{item.name}</h3>
                  <p className="text-gray-700 font-serif text-justify">
                    {expanded[item.id]
                      ? item.description
                      : `${item.description.slice(0, 180)}...`}
                    {item.description.length > 180 && (
                      <button
                        onClick={() => toggleExpand(item.id)}
                        className="ml-2 text-amber-500 font-medium hover:underline"
                      >
                        {expanded[item.id] ? "Show less" : "Read more"}
                      </button>
                    )}
                  </p>
                  <Narration text={item.description} />
                  <div className="flex gap-4 flex-wrap mt-4">
                    {item.coords && (
                      <Link
                        to={`/map?lat=${item.coords.lat}&lng=${item.coords.lng}&name=${encodeURIComponent(
                          item.name
                        )}/${item.id}`}
                        className="flex items-center gap-2 px-4 py-2 border border-blue-600 text-blue-500 rounded-lg shadow hover:bg-blue-700 hover:text-white"
                      >
                        <MapPin size={18} /> View on Map
                      </Link>
                    )}
                    <Link
                      to={`/tour/${encodeURIComponent(item.name)}`}
                      className="flex items-center gap-2 px-4 py-2 bg-yellow-400 text-white rounded-lg shadow hover:bg-yellow-500"
                    >
                      <PlayCircle size={18} /> 360° Tour
                    </Link>
                  </div>
                </div>
              </div>
            ))}

            {filteredMonasteries.length === 0 && (
              <p className="text-center text-gray-500">
                No monasteries found in this region.
              </p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
