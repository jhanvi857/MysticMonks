import React from "react";

export default function SearchBar({ query, setQuery, onSearch, loading }) {
  return (
    <div className="mt-6 flex justify-center items-center gap-2 max-w-lg mx-auto" data-aos="fade-up">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search monasteries, culture, or events..."
        className="w-full px-4 py-2 rounded-l-full border text-gray-400 border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />
      <button
        onClick={onSearch}
        className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-r-full shadow-lg transition"
      >
        {loading ? "Searching..." : "Search"}
      </button>
    </div>
  );
}
