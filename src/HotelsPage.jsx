import { Hotel, Star, MapPin } from "lucide-react";

export default function HotelsPage() {
  const monasteries = [
    {
      name: "Pemayangtse Monastery (Pelling)",
      hotels: [
        {
          name: "The Elgin Mount Pandim – Heritage Resort & Spa",
          location: "Pelling",
          rating: 5,
          price: "₹7,500 / night",
          image: "https://www.elginhotels.com/wp-content/uploads/2020/02/gallery-pic1-5.jpg",
        },
        {
          name: "Magpie Chestnut Retreat",
          location: "Pelling",
          rating: 4,
          price: "₹4,500 / night",
          image: "https://www.magpiehotelsandresorts.in/images/hotels/magpie-the-chestnut-retreat/1.jpg",
        },
        {
          name: "The Chumbi Mountain Retreat & Spa",
          location: "Pelling",
          rating: 5,
          price: "₹8,200 / night",
          image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/362584096.jpg?k=974c19538417ffae04f840a11c1911455f5fd144da363d95badee732bf4aa027&o=&hp=1",
        },
      ],
    },
    {
      name: "Phensang Monastery (Near Gangtok)",
      hotels: [
        {
          name: "Mayfair Spa Resort & Casino",
          location: "Gangtok",
          rating: 5,
          price: "₹7,800 / night",
          image: "https://assets.simplotel.com/simplotel/image/upload/x_68,y_0,w_1600,h_904,r_0/q_80,w_1600,dpr_1,f_auto,fl_progressive,c_limit/mayfair-spa-resort-casino-gangtok/G4_my5gly",
        },
        {
          name: "Denzong Regency",
          location: "Gangtok",
          rating: 5,
          price: "₹6,500 / night",
          image: "https://www.denzongregency.com/Photos/5-star-hotel-in-gangtok-sikkim-14.jpg",
        },
        {
          name: "Netuk House",
          location: "Gangtok",
          rating: 4,
          price: "₹4,200 / night",
          image: "https://q-xx.bstatic.com/xdata/images/hotel/max500/86553387.jpg?k=b1990134bb68feef66671a55e2ea138276e6e494efd28dcdb8cb9e8eb9f36ffe&o=",
        },
      ],
    },
    {
      name: "Kartok Monastery (Yuksom/Pelling side)",
      hotels: [
        {
          name: "Limboo Homestay",
          location: "Yuksom",
          rating: 3,
          price: "₹2,000 / night",
          image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/ed/b5/32/limboo-homestay.jpg?w=900&h=500&s=1",
        },
        {
          name: "Hotel Demazong",
          location: "Yuksom",
          rating: 4,
          price: "₹3,500 / night",
          image: "https://imgcld.yatra.com/ytimages/image/upload/t_seo_Hotel_w_930_h_550_c_fill_g_auto_q_40_f_jpg/v1432031805/Domestic%20Hotels/Hotels_Gangtok/Club%20Mahindra%20Gangtok/Overview.jpg",
        },
        {
          name: "Magpie Chestnut Retreat",
          location: "Pelling",
          rating: 4,
          price: "₹4,500 / night",
          image: "https://gos3.ibcdn.com/6a46d764642d11ee84da0a58a9feac02.jpg",
        },
      ],
    },
    {
      name: "Doling Monastery (Ravangla, South Sikkim)",
      hotels: [
        {
          name: "Buddha Retreat",
          location: "Ravangla",
          rating: 4,
          price: "₹3,800 / night",
          image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/217243441.jpg?k=b3a097caa8c9a8f5b984cef776d9767c046e9b2b0d3a47973cdcbdddb86c874a&o=&hp=1",
        },
        {
          name: "Khachoe Residency",
          location: "Ravangla",
          rating: 3,
          price: "₹2,500 / night",
          image: "https://r1imghtlak.mmtcdn.com/9ebcdc6678ce11eb8c900242ac110005.jpg",
        },
        {
          name: "Valley Mist Homestay",
          location: "Ravangla",
          rating: 3,
          price: "₹2,200 / night",
          image: "https://assets.culturetravel.in/9c4d21ac-b004-4fcc-950d-557677ce287e/thumbnail.jpg",
        },
      ],
    },
    // 👉 Continue similarly for Chawayng Ani, Serdup Choling, Ngadak, Durpin, Tingvong, Samdruptse...
  ];

  return (
    <div className="p-8 space-y-10 py-24">
      <h1 className="text-2xl font-bold text-orange-700 flex items-center gap-2">
        <Hotel className="text-orange-600" /> Hotels & Stays
      </h1>
      <p className="text-gray-600">
        Find comfortable hotels, resorts, and homestays near monasteries in
        Sikkim.
      </p>

      {monasteries.map((monastery, idx) => (
        <div key={idx} className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
            🏯 {monastery.name}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {monastery.hotels.map((hotel, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden"
              >
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-lg font-semibold">{hotel.name}</h3>
                  <p className="flex items-center gap-2 text-gray-500 text-sm mt-1">
                    <MapPin size={14} className="text-orange-600" />{" "}
                    {hotel.location}
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
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
