export default function SearchResults({ results }) {
  if (!results || results.length === 0) return <p>No results found.</p>;

  return (
    <div className="space-y-4 mt-4">
      {results.map((item, idx) => {
        if (item.type === "paragraph") {
          return <p key={idx} className="text-gray-800">{item.snippet}</p>;
        }

        if (item.type === "heading") {
          return <h2 key={idx} className="text-xl font-bold mt-4">{item.snippet}</h2>;
        }

        if (item.type === "list" && item.snippet) {
          return (
            <ul key={idx} className="list-disc pl-5 text-gray-700">
              {item.snippet.split("\n").map((li, i) => (
                <li key={i}>{li}</li>
              ))}
            </ul>
          );
        }

        if (item.type === "reference") {
          return (
            <div key={idx} className="text-sm text-blue-600 underline">
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {item.title}
              </a>
            </div>
          );
        }

        if (item.type === "image") {
          return <img key={idx} src={item.url} alt="AI result" className="w-full max-w-sm rounded" />;
        }

        return null;
      })}
    </div>
  );
}
