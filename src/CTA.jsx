import { Link } from "react-router-dom";
import { MapPin, Book, Headphones, Calendar, Camera, Globe } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay"; 

import { Navigation, Pagination } from "swiper/modules";
// import { Autoplay } from "swiper/modules/autoplay";
import sikkim1 from "./assets/sikkim1.jpg";
import sikkim2 from "./assets/sikkim2.jpg";
import sikkim3 from "./assets/sikkim3.jpg";
import sikkim4 from "./assets/sikkim4.jpg";
import sikkim5 from "./assets/sikkim5.jpg";
import sikkim6 from "./assets/sikkim6.jpg";
import sikkim7 from "./assets/sikkim7.jpg";
import heroImage from "./assets/heroImage.webp"

const ImageSlider = () => {
  const images = [sikkim1, sikkim2, sikkim3, sikkim4, sikkim5, sikkim6, sikkim7];

  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination]} 
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        // autoplay={{ delay: 3000 }}
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={img}
              alt={`Slide ${idx + 1}`}
              className="w-full h-[500px] md:h-[700px] object-cover rounded-lg shadow-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default function CTA() {
  return (
    <>
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section
        className="bg-fixed min-h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://montaxe.com/wp-content/uploads/2024/04/Sikkim-Tourism.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
            Monastery360
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Explore Sikkim’s Spiritual Heritage – Immersive Virtual Tours,
            Cultural Archives, and Smart Travel Experiences.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/tours"
              className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-full shadow-lg transition transform hover:scale-105"
            >
            Explore Virtual Tour
            </Link>
            <Link
              to="/map"
              className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-full shadow-lg transition transform hover:scale-105"
            >
            Explore through Map
            </Link>
            <Link
              to="/monasteries"
              className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-full shadow-lg transition transform hover:scale-105"
            >
            Explore Monasteries
            </Link>
            <Link
              to="/events"
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full shadow-lg transition transform hover:scale-105"
            >
              View Events
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-black/10">
        {/* <ImageSlider/> */}
      </section>
      {/* Features Section */}
      <section className="py-16 bg-fixed flex justify-center items-center flex-col bg-cover" 
      style={{backgroundImage:"url('https://www.esikkimtourism.in/wp-content/uploads/2019/04/namchimay.jpg')"}}
      >
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
        Key Features
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {[
            { icon: Camera, title: "360° Virtual Tours", desc: "Immersive panoramic monastery views." },
            { icon: Headphones, title: "Narrated Walkthroughs", desc: "Guides in multiple languages." },
            { icon: MapPin, title: "Interactive Map", desc: "Explore monasteries & nearby attractions." },
            { icon: Book, title: "Digital Archives", desc: "Manuscripts, murals, and cultural records." },
            { icon: Globe, title: "Smart Audio Guide", desc: "Works offline with location awareness." },
            { icon: Calendar, title: "Cultural Calendar", desc: "Events, festivals, and booking options." },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:scale-105 text-center"
            >
              <feature.icon className="w-12 h-12 mx-auto text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Impact Section */}
      {/* <section className="py-16 bg-white">
        <h2 className="text-4xl font-bold text-center mb-12">🌍 Our Impact</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center px-6">
          {[
            { emoji: "🌍", text: "Boosting Tourism" },
            { emoji: "📖", text: "Preserving Culture" },
            { emoji: "👩‍🎓", text: "Enabling Education" },
            { emoji: "🏘️", text: "Empowering Communities" },
          ].map((impact, idx) => (
            <div
              key={idx}
              className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="text-4xl">{impact.emoji}</div>
              <p className="mt-3 font-medium text-gray-700">{impact.text}</p>
            </div>
          ))}
        </div>
      </section> */}

      {/* Preview Section */}
      {/* <section className="py-16 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold mb-6">👀 Sneak Peek</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Take a glimpse into Monastery360 with immersive images and tours.
        </p>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
          <img
            src="https://www.sikkimtourism.gov.in/Webforms/General/Default/images/Monastery/monastery1.jpg"
            alt="Preview"
            className="rounded-xl shadow-md hover:scale-105 transition"
          />
          <img
            src="https://www.sikkimtourism.gov.in/Webforms/General/Default/images/Monastery/monastery2.jpg"
            alt="Preview"
            className="rounded-xl shadow-md hover:scale-105 transition"
          />
          <img
            src="https://www.sikkimtourism.gov.in/Webforms/General/Default/images/Monastery/monastery3.jpg"
            alt="Preview"
            className="rounded-xl shadow-md hover:scale-105 transition"
          />
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 text-center min-h-screen bg-cover bg-fixed flex flex-col justify-center items-center bg-gradient-to-br from-yellow-500 to bg-orange-500" 
      // style={{backgroundImage:"url('https://cdn.kimkim.com/files/a/images/369b17fe4ac0c1701dde076d93e920aa00f43305/original-c6ddf7b171fa552a987004d4c7d6988c.jpg')"}}
      style={{backgroundImage:"url('https://i.pinimg.com/1200x/b5/02/3b/b5023be87fa1804a5bcc0c4a16b9e55b.jpg')"}}
      >
        <div className="flex justify-center flex-col items-center m-2 p-8 text-white rounded-2xl">
          <h2 className="text-4xl font-bold mb-4 ">
          Start Your Spiritual Journey Today
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-8 text-orange-50">
          Discover monasteries, explore culture, and experience Sikkim like
          never before.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/login"
            className="px-6 py-3 bg-white text-yellow-600 font-semibold rounded-full shadow-lg hover:scale-105 transition"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-6 py-3 bg-black text-white font-semibold rounded-full shadow-lg hover:scale-105 transition"
          >
            Sign Up
          </Link>
        </div>
        </div>
      </section>
    </div>
      </>
  );
}
