import React, { useState } from "react";
import SearchBar from "./components/Searchbar";
import SearchResults from "./components/SearchResults";
import CategoriesSidebar from "./components/CategoriesSidebar";
export default function AISearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
  if (!query) return;
  setLoading(true);

  try {
    const res = await fetch("https://mysticmonks.onrender.com/ai-search", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
    });

    const data = await res.json();
    console.log("Received results:", data.results);

    setResults(data.results || []);
  } catch (err) {
    console.error(err);
    setResults([]);
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="flex min-h-screen bg-gray-50 py-16">
      {/* Sidebar */}
      <CategoriesSidebar />

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6">AI powered Search</h1>
        <SearchBar
          query={query}
          setQuery={setQuery}
          onSearch={handleSearch}
          loading={loading}
        />

        <SearchResults results={results} />
      </div>
    </div>
  );
}
