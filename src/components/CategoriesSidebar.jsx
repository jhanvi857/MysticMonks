import { Link } from "react-router-dom";

const categories = [
  { name: "Monasteries", path: "/monasteries" },
  { name: "Events", path: "/events" },
  { name: "Culture", path: "/digital-archives" },
//   { name: "History", path: "/history" },  // you may create this new page
  { name: "Travel", path: "/map" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-amber-400 shadow-md p-6 hidden md:block">
      <h3 className="font-semibold text-xl mb-4">Categories</h3>
      <ul className="space-y-2">
        {categories.map((cat, idx) => (
          <li key={idx}>
            <Link
              to={cat.path}
              className="block cursor-pointer text-gray-700 hover:text-yellow-600"
            >
              {cat.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
