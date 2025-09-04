import { Hotel, Star, MapPin } from "lucide-react";

export default function HotelsPage() {
  const hotels = [
    {
      name: "Mayfair Spa Resort & Casino",
      location: "Gangtok",
      rating: 5,
      price: "₹7,500 / night",
    },
    {
      name: "The Elgin Nor-Khill",
      location: "Gangtok",
      rating: 4,
      price: "₹5,200 / night",
    },
    {
      name: "Summit Golden Crescent Resort",
      location: "Pelling",
      rating: 4,
      price: "₹3,800 / night",
    },
    {
      name: "Delight Hotels & Homestays",
      location: "Lachung",
      rating: 3,
      price: "₹2,000 / night",
    },
  ];

  return (
    <div className="p-8 space-y-6 py-24">
      <h1 className="text-2xl font-bold text-orange-700 flex items-center gap-2">
        <Hotel className="text-orange-600" /> Hotels & Stays
      </h1>
      <p className="text-gray-600">
        Find comfortable hotels, resorts, and homestays in Sikkim.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hotels.map((hotel, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-md p-5 hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold">{hotel.name}</h2>
            <p className="flex items-center gap-2 text-gray-500 text-sm mt-1">
              <MapPin size={14} className="text-orange-600" /> {hotel.location}
            </p>

            <div className="flex items-center gap-1 mt-2 text-yellow-500">
              {[...Array(hotel.rating)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>

            <p className="text-gray-700 mt-2 font-medium">{hotel.price}</p>

            <button className="mt-3 w-full bg-orange-600 text-white py-2 rounded-xl hover:bg-orange-700">
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
