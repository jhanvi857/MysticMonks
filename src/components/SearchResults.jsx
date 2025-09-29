export default function SearchResults({ results }) {
  if (!results || results.length === 0) return <p>No results found.</p>;

  return (
    <div className="space-y-4 mt-4">
      {results.map((item, idx) => {
        if (item.type === "paragraph") {
          return <p key={idx}>{item.snippet}</p>;
        }
        if (item.type === "image") {
          return <img key={idx} src={item.url} alt={`img-${idx}`} className="w-full max-w-sm rounded" />;
        }
        if (item.type === "reference") {
          return <p key={idx}><a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a></p>;
        }
        return null;
      })}
    </div>
  );
}
