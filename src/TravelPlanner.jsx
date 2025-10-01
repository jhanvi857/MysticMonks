// import { Bus, Car, Plane, Hotel, MapPin } from "lucide-react";

// export default function TravelPlanner() {
//   const destinations = [
//     {
//       name: "Rumtek Monastery",
//       location: "Gangtok",
//       transport: [
//         { type: "Taxi", icon: <Car size={18} />, duration: "45 min", fare: "₹1200" },
//         { type: "Bus", icon: <Bus size={18} />, duration: "1 hr", fare: "₹100" },
//       ],
//       hotels: [
//         { name: "Hotel Rumtek Dzong", price: "₹2,500/night" },
//         { name: "Delight The Fortuna", price: "₹3,200/night" },
//       ],
//     },
//     {
//       name: "Pemayangtse Monastery",
//       location: "Pelling",
//       transport: [
//         { type: "Taxi", icon: <Car size={18} />, duration: "5 hrs", fare: "₹4000" },
//         { type: "Bus", icon: <Bus size={18} />, duration: "6 hrs", fare: "₹350" },
//       ],
//       hotels: [
//         { name: "Norbu Ghang Resort", price: "₹4,000/night" },
//         { name: "Summit Newa Regency", price: "₹3,500/night" },
//       ],
//     },
//     {
//       name: "Nathula Pass",
//       location: "Near Gangtok",
//       transport: [
//         { type: "Taxi", icon: <Car size={18} />, duration: "2 hrs", fare: "₹3500" },
//       ],
//       hotels: [
//         { name: "Mayfair Spa Resort", price: "₹7,500/night" },
//         { name: "The Elgin Nor-Khill", price: "₹5,200/night" },
//       ],
//     },
//   ];

//   return (
//     <div className="p-8 py-24 space-y-8">
//       <h1 className="text-3xl font-bold text-orange-700 flex items-center gap-2">
//         <MapPin className="text-orange-600" /> Travel & Tourism Planner
//       </h1>
//       <p className="text-gray-600">
//         Select a destination to explore transport options and nearby hotels.
//       </p>

//       <div className="grid md:grid-cols-2 gap-6">
//         {destinations.map((dest, idx) => (
//           <div
//             key={idx}
//             className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition"
//           >
//             <h2 className="text-xl font-semibold text-gray-800">{dest.name}</h2>
//             <p className="text-gray-500 text-sm flex items-center gap-1 mt-1">
//               <MapPin size={14} className="text-orange-600" /> {dest.location}
//             </p>

//             {/* Transport Section */}
//             <div className="mt-4">
//               <h3 className="text-orange-700 font-semibold mb-2 flex items-center gap-2">
//                 <Bus className="text-orange-600" size={18} /> Transport Options
//               </h3>
//               <ul className="space-y-2">
//                 {dest.transport.map((t, i) => (
//                   <li
//                     key={i}
//                     className="bg-orange-50 rounded-lg p-2 flex justify-between items-center"
//                   >
//                     <span className="flex items-center gap-2">
//                       {t.icon} {t.type}
//                     </span>
//                     <span className="text-gray-600 text-sm">
//                       {t.duration} • {t.fare}
//                     </span>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Hotels Section */}
//             <div className="mt-4">
//               <h3 className="text-orange-700 font-semibold mb-2 flex items-center gap-2">
//                 <Hotel className="text-orange-600" size={18} /> Nearby Hotels
//               </h3>
//               <ul className="space-y-2">
//                 {dest.hotels.map((h, i) => (
//                   <li
//                     key={i}
//                     className="bg-gray-50 rounded-lg p-2 flex justify-between items-center"
//                   >
//                     <a href="#" className="block">{h.name}</a>
//                     <span className="text-gray-600 text-sm">{h.price}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* CTA */}
//             <button className="mt-5 w-full bg-orange-600 text-white py-2 rounded-xl hover:bg-orange-700">
//               Plan Trip
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
import React, { useState } from "react";
import { Bus, Car, Plane, Hotel, MapPin, X } from "lucide-react";

export default function TravelPlanner() {
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    people: 1,
    hotel: "",
    transport: "",
  });

  const destinations = [
    {
      name: "Rumtek Monastery",
      location: "Gangtok",
      transport: [
        { type: "Taxi", icon: <Car size={18} />, duration: "45 min", fare: "₹1200" },
        { type: "Bus", icon: <Bus size={18} />, duration: "1 hr", fare: "₹100" },
      ],
      hotels: [
        { name: "Hotel Rumtek Dzong", price: "₹2,500/night" },
        { name: "Delight The Fortuna", price: "₹3,200/night" },
      ],
    },
    {
      name: "Pemayangtse Monastery",
      location: "Pelling",
      transport: [
        { type: "Taxi", icon: <Car size={18} />, duration: "5 hrs", fare: "₹4000" },
        { type: "Bus", icon: <Bus size={18} />, duration: "6 hrs", fare: "₹350" },
      ],
      hotels: [
        { name: "Norbu Ghang Resort", price: "₹4,000/night" },
        { name: "Summit Newa Regency", price: "₹3,500/night" },
      ],
    },
    {
      name: "Nathula Pass",
      location: "Near Gangtok",
      transport: [
        { type: "Taxi", icon: <Car size={18} />, duration: "2 hrs", fare: "₹3500" },
      ],
      hotels: [
        { name: "Mayfair Spa Resort", price: "₹7,500/night" },
        { name: "The Elgin Nor-Khill", price: "₹5,200/night" },
      ],
    },
  ];


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Trip planned:", { destination: selectedDestination, ...formData });
    alert(`Trip planned for ${selectedDestination.name}!`);
    setSelectedDestination(null);
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      people: 1,
      hotel: "",
      transport: "",
    });
  };

  return (
    <div className="p-8 py-24 space-y-8">
      <h1 className="text-3xl font-bold text-orange-700 flex items-center gap-2">
        <MapPin className="text-orange-600" /> Travel & Tourism Planner
      </h1>
      <p className="text-gray-600">
        Select a destination to explore transport options and nearby hotels.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {destinations.map((dest, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-gray-800">{dest.name}</h2>
            <p className="text-gray-500 text-sm flex items-center gap-1 mt-1">
              <MapPin size={14} className="text-orange-600" /> {dest.location}
            </p>

            <div className="mt-4">
              <h3 className="text-orange-700 font-semibold mb-2 flex items-center gap-2">
                <Bus className="text-orange-600" size={18} /> Transport Options
              </h3>
              <ul className="space-y-2">
                {dest.transport.map((t, i) => (
                  <li key={i} className="bg-orange-50 rounded-lg p-2 flex justify-between items-center">
                    <span className="flex items-center gap-2">{t.icon} {t.type}</span>
                    <span className="text-gray-600 text-sm">{t.duration} • {t.fare}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4">
              <h3 className="text-orange-700 font-semibold mb-2 flex items-center gap-2">
                <Hotel className="text-orange-600" size={18} /> Nearby Hotels
              </h3>
              <ul className="space-y-2">
                {dest.hotels.map((h, i) => (
                  <li key={i} className="bg-gray-50 rounded-lg p-2 flex justify-between items-center">
                    <span>{h.name}</span>
                    <span className="text-gray-600 text-sm">{h.price}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Plan Trip Button */}
            <button
              onClick={() => setSelectedDestination(dest)}
              className="mt-5 w-full bg-orange-600 text-white py-2 rounded-xl hover:bg-orange-700"
            >
              Plan Trip
            </button>
          </div>
        ))}
      </div>

      {/* Modal Form */}
      {selectedDestination && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 w-full max-w-md relative">
            <button
              onClick={() => setSelectedDestination(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Plan Your Trip to {selectedDestination.name}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                required
              />
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                required
              />
              <input
                type="number"
                name="people"
                min={1}
                value={formData.people}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                placeholder="Number of people"
                required
              />
              <select
                name="hotel"
                value={formData.hotel}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                required
              >
                <option value="">Select Hotel</option>
                {selectedDestination.hotels.map((h, i) => (
                  <option key={i} value={h.name}>{h.name}</option>
                ))}
              </select>
              <select
                name="transport"
                value={formData.transport}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                required
              >
                <option value="">Select Transport</option>
                {selectedDestination.transport.map((t, i) => (
                  <option key={i} value={t.type}>{t.type}</option>
                ))}
              </select>
              <button type="submit" className="w-full bg-orange-600 text-white py-2 rounded-xl hover:bg-orange-700">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
