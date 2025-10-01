// // src/pages/DigitalArchives.tsx
// import { useState } from "react";
// import { Worker, Viewer } from "@react-pdf-viewer/core";
// import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

// import "@react-pdf-viewer/core/lib/styles/index.css";
// import "@react-pdf-viewer/default-layout/lib/styles/index.css";

// export default function DigitalArchives() {
// const [selectedDoc, setSelectedDoc] = useState(null);

//   const archives = [
//     {
//       id: 1,
//       title: "DETAILED INFORMATION ABOUT SIKKIM",
//       description: "Digitized version of a rare Buddhist manuscript.",
//       pdfUrl:
//         "https://dspace.cus.ac.in/jspui/bitstream/1/3337/1/Sikkim.pdf",
//     },
//     {
//       id: 2,
//       title: "SIKKIM'S MONASTERIC HERITAGE AFTER EARTHQUAKE",
//       description: "High-resolution scans of monastery murals.",
//       pdfUrl:
//         "https://himalaya.socanth.cam.ac.uk/collections/journals/bot/pdf/bot_2011_01_04.pdf",
//     },
//     {
//         id:3,
//         title:"MONASTERIES IN SIKKIM",
//         description: "",
//         pdfUrl :"https://himalaya.socanth.cam.ac.uk/collections/journals/bot/pdf/bot_1996_03_note2.pdf"
//     }
//   ];

//   const defaultLayoutPluginInstance = defaultLayoutPlugin();

//   return (
//     <div className="min-h-screen bg-gray-100 p-6 py-24">
//       <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
//         Digital Archives
//       </h1>

//       {/* Grid of cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-16">
//         {archives.map((item) => (
//           <div
//             key={item.id}
//             className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg cursor-pointer transition"
//             onClick={() => setSelectedDoc(item.pdfUrl)}
//           >
//             <h2 className="text-xl font-semibold text-gray-700">
//               {item.title}
//             </h2>
//             <p className="text-gray-500 text-sm mt-2">{item.description}</p>
//           </div>
//         ))}
//       </div>

//       {/* PDF Preview */}
//       {selectedDoc && (
//         <div className="shadow-lg rounded-xl h-[80vh] mt-4 pt-4 flex flex-col justify-center items-center bg-white">
//           <h2 className="text-lg font-semibold mb-3 text-gray-700 mt-2">Preview</h2>
//           <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
//             <Viewer
//               fileUrl={`http://localhost:5000/proxy-pdf?url=${encodeURIComponent(
//                 selectedDoc
//               )}`}
//               plugins={[defaultLayoutPluginInstance]}
//             />
//           </Worker>
//         </div>
//       )}
//     </div>
//   );
// }
// src/pages/DigitalArchives.tsx
import { useState } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

export default function DigitalArchives() {
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [selectedSection, setSelectedSection] = useState("Manuscripts");

  // Placeholder data for all sections
  const archives = [
    {
      id: 1,
      section: "Manuscripts",
      title: "DETAILED INFORMATION ABOUT SIKKIM",
      description: "Digitized version of a rare Buddhist manuscript.",
      pdfUrl: "https://dspace.cus.ac.in/jspui/bitstream/1/3337/1/Sikkim.pdf",
      imageUrl: "https://books.openedition.org/obp/file/2226/tei/img-2.jpg/download",
    },
    {
      id: 2,
      section: "Digital Archives",
      title: "SIKKIM'S MONASTERIC HERITAGE AFTER EARTHQUAKE",
      description: "High-resolution scans of monastery murals.",
      pdfUrl: "https://himalaya.socanth.cam.ac.uk/collections/journals/bot/pdf/bot_2011_01_04.pdf",
      imageUrl: "https://www.loc.gov/static/collections/sikkim-photos/images/featured-hearth.jpg",
    },
    {
      id: 3,
      section: "Photographs",
      title: "Monastery Landscape Photos",
      description: "Collection of monastery landscape images.",
      pdfUrl: "",
      imageUrl: "https://th-i.thgim.com/public/incoming/t3jtp8/article69812325.ece/alternates/LANDSCAPE_1200/Gangtok_03072025_01.jpg",
    },
    {
      id: 4,
      section: "Research Papers",
      title: "Monasteries in Sikkim",
      description: "Research article on monasteries.",
      pdfUrl: "https://himalaya.socanth.cam.ac.uk/collections/journals/bot/pdf/bot_1996_03_note2.pdf",
      imageUrl: "https://imgv2-2-f.scribdassets.com/img/document/712371282/original/4d97f53ba9/1?v=1",
    },
    {
      id: 5,
      section: "Videos",
      title: "Virtual Tour Sample",
      description: "Video of monastery interiors.",
      pdfUrl: "",
      imageUrl: "",
    },
  ];

  const sections = ["Manuscripts", "Digital Archives", "Photographs", "Research Papers", "Videos"];
  const filteredArchives = archives.filter((a) => a.section === selectedSection);

  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div className="flex min-h-screen bg-gray-100 justify-between">
      {/* Sidebar */}
      <aside className="w-64 bg-amber-400 shadow-md p-6 hidden md:block py-24 text-white">
        <h2 className="text-2xl font-serif font-bold mb-6">Sections</h2>
        <ul className="space-y-3">
          {sections.map((sec) => (
            <li key={sec}>
              <button
                onClick={() => setSelectedSection(sec)}
                className={`w-full text-left px-4 py-2 rounded-lg font-medium transition
                  ${selectedSection === sec
                    ? "bg-amber-200 text-white shadow-lg"
                    : "hover:bg-amber-200"
                  }`}
              >
                {sec}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 space-y-8 py-24 px-8">
        <h1 className="text-3xl font-bold text-gray-800 text-center md:text-left mb-6">
          {selectedSection}
        </h1>

        {/* Box Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {filteredArchives.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition cursor-pointer"
              onClick={() => item.pdfUrl && setSelectedDoc(item.pdfUrl)}
            data-aos="fade-up">
              <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                {item.imageUrl ? (
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-gray-400 font-semibold">Image Placeholder</span>
                )}
              </div>

              <div className="p-4 space-y-2">
                <h2 className="text-xl font-semibold text-gray-700">{item.title}</h2>
                {item.description && (
                  <p className="text-gray-500 text-sm">{item.description}</p>
                )}
              </div>
            </div>
          ))}
          {filteredArchives.length === 0 && (
            <p className="col-span-full text-gray-500 text-center mt-4">
              No items available in this section yet.
            </p>
          )}
        </div>

        {/* PDF Viewer */}
        {selectedDoc && (
          <div className="shadow-lg rounded-xl h-[80vh] mt-8 pt-4 flex flex-col bg-white">
            <h2 className="text-lg font-semibold mb-3 text-gray-700 px-6">Preview</h2>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
            <Viewer
              fileUrl={`https://mysticmonks.onrender.com/proxy-pdf?url=${encodeURIComponent(
                selectedDoc
              )}`}
              plugins={[defaultLayoutPluginInstance]}
            />
           </Worker>
          </div>
        )}
      </main>
    </div>
  );
}
