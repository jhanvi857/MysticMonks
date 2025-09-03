import React from "react";
import { MapPin, PlayCircle } from "lucide-react";
import Narration from "./Narration";
import { Link } from "react-router-dom";
export const monasteriesData = [
  {
    id: 1,
    name: "Pemayangtse Monastery",
    description:
      "Pemayangtse Monastery, one of Sikkim's oldest and most prestigious monasteries, was established in the 17th century by Lama Lhatsun Chempo. It belongs to the Nyingma order of Tibetan Buddhism and is renowned for its role in preserving and propagating Nyingma teachings and traditions. The monastery is closely linked to the Chogyal (King) of Sikkim, who provided significant patronage, and is located near Pelling in West Sikkim. ",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThFEVwAmNW6Yr2fEQm16cjLbfRx4yhU_9NkQ&s",
    coords: { lat: 27.3143, lng: 88.2395 },
  },
  {
    id: 2,
    name: "Phensang Monastery",
    description:
      "Phensang Monastery, belonging to the Nyingmapa Buddhist order, was founded in 1721 by the 3rd Lhatsun Jigmed Pawo. The monastery experienced significant damage from a devastating fire in 1947 and later from heavy rains in 1983, necessitating extensive rebuilding efforts aided by government involvement. Today, it is one of Sikkim's largest monasteries, housing approximately 300 lamas and hosting an annual sacred masked dance festival during the Sikkimese New Year in December. ",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2WodEuG4asCE-mDI1Lb4edB46g5GK9JEfWg&s",
    coords: { lat: 27.3921, lng: 88.6112 },
  },
  {
    id: 3,
    name: "Kartok Monastery",
    description:
      "Kartok Monastery is a historic Sikkim site founded in the 17th century to honor the Tibetan Lama Kartok Rinpoche, who participated in the coronation of Sikkim's first king. It is located near Pelling, West Sikkim, and is considered a significant religious landmark for the state's Buddhist community, though it is a smaller, less ancient monastery than others like Pemayangtse or Rumtek. The monastery serves as a repository for the teachings of Tibetan Buddhism and features traditional Sikkimese architecture with colorful walls, sacred symbols, and murals depicting Buddhist figures.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcCpyBT_qd0TNLUvkXUDYu6LJwjtZPXIRNlw&s",
    coords: { lat: 27.3851, lng: 88.2541 },
  },
  {
    id: 4,
    name: "Doling Monastery",
    description:
      "Doling Monastery was founded in 1718 AD by Lama Rigdzin Longyang in Ravangla, South Sikkim, following the Nyingmapa sect. The monastery was built after its founders, Lama Dorjelingpa and Rigdzin Longyang, fled Tibet during a Mongol invasion. The original structure was damaged by earthquakes and subsequently rebuilt in 1840, 1920, and 1984, with the descendants of the founders still maintaining the sacred site today.",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/91/36/d7/1520777767-12239537-5467085654.jpg?w=700&h=400&s=1",
    coords: { lat: 27.3102, lng: 88.3702 },
  },
  {
    id: 5,
    name: "Chawayng Ani Monastery",
    description:
      "Chawayng Ani Monastery is a Buddhist monastery located in Sikkim, India. It is one of the few nunneries in the state, serving as a spiritual center for women monastics.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ2cibAyfOvMicOKJ1zHfZCZXmFK-Og3j0AA&s",
    coords: { lat: 27.3385, lng: 88.6113 },
  },
  {
    id: 6,
    name: "Serdup Choling Monastery",
    description:
      "Serdup Choling Monastery in Namchi was established in 1967 to promote spiritual learning and peace. It features ornate paintings and offers stunning views of Mount Kanchenjunga.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQF5vF9QWi85evNMHMFTg4UuokvmN0Nt0eYw&s",
    coords: { lat: 27.1701, lng: 88.3505 },
  },
  {
    id: 7,
    name: "Ngadak Thupten Shedup Dhargey Choeling Monastery",
    description:
      "Ngadak Monastery, originally built in the 17th century by Chogyal Gyurmed Namgyal, is one of the oldest monasteries in Namchi. Restored after the 2011 earthquake, it remains a spiritual haven.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa6LvAKWa6c8wDOXI6pLv9wdKvx8C0NGuKEQ&s",
    coords: { lat: 27.1748, lng: 88.3625 },
  },
  {
    id: 8,
    name: "Durpin Monastery (Zang Dhok Palri Phodang)",
    description:
      "Durpin Monastery, built in the 1960s atop Durpin Hill in Kalimpong, West Bengal, houses sacred Buddhist scriptures called the Kangyur. It offers panoramic views of Kalimpong town and surrounding hills.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8hx8RR0gXmF7J8JNNhG3iCn7H7RtjGG3_-g&s",
    coords: { lat: 27.0615, lng: 88.4652 },
  },
  {
    id: 9,
    name: "Tingvong Monastery",
    description:
      "Tingvong Monastery, located in Dzongu, North Sikkim, was established in 1843. It is closely tied to the Lepcha community and hosts the annual Guru Drakmar Cham festival.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-MlNopALnogWQgNZT8-2-u8n7FxZVSFNVHg&s",
    coords: { lat: 27.5253, lng: 88.5046 },
  },
  {
    id: 10,
    name: "Samdruptse Monastery",
    description:
      "Samdruptse Monastery near Namchi is famous for the towering 135 ft statue of Guru Padmasambhava, built in 2004. It is one of the most visited spiritual and tourist attractions in South Sikkim.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOpLasj6HKziv1ZfHJj5l1q128OYaODBiKIw&s",
    coords: { lat: 27.1533, lng: 88.3618 },
  },
];

export default function Monasteries() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="bg-fixed min-h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://www.esikkimtourism.in/wp-content/uploads/2018/10/climate-bnnr.jpg')",
        }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white bg-black/50 px-6 py-3 rounded-lg">
          Explore Monasteries of Sikkim
        </h1>
      </section>

      {/* Monasteries Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 space-y-16">
          {monasteriesData.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-full md:w-1/2 h-72 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform"
              />

              {/* Info */}
              <div className="md:w-1/2 space-y-4">
                <h3 className="text-2xl font-bold text-gray-800">
                  {item.name}
                </h3>
                <p className="text-gray-600">{item.description}</p>
                    <Narration text={item.description} />
                    {/* <Narration text="नमस्ते, आप कैसे हैं?" /> */}


                <div className="flex gap-4 mt-4">
                  {/* View on Map */}
                  {item.coords && (
                    <Link
  to={`/map?lat=${item.coords.lat}&lng=${item.coords.lng}&name=${encodeURIComponent(item.name)}/${item.id}`}
  className="flex items-center gap-2 px-4 py-2 border border-blue-600 text-blue-500 rounded-lg shadow hover:bg-blue-700 hover:text-white"
>
  <MapPin size={18} /> View on Map
</Link>

                  )}

                  {/* 360 Tour */}
                  {/* {item.vr_tour_url && (
                    <a
                      href={item.vr_tour_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-yellow-600 text-white rounded-lg shadow hover:bg-yellow-700"
                    >
                      <PlayCircle size={18} /> 360° Tour
                    </a>
                  )} */}
                  <a
                    href={item.vr_tour_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-yellow-400 text-white rounded-lg shadow hover:bg-yellow-500 cursor-pointer"
                  >
                    <PlayCircle size={18} /> 360° Tour
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
