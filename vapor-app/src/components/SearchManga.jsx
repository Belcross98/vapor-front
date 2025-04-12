import { useEffect, useState } from "react";
import "../styles/SearchManga.css";

function SearchManga() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [timeoutId, setTimeoutId] = useState(null);

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }

    if (timeoutId) clearTimeout(timeoutId);
    const id = setTimeout(() => {
      fetch(
        `http://localhost:5030/Manga?MangaName=${encodeURIComponent(query)}`
      )
        .then((res) => res.json())
        .then(setResults)
        .catch((err) => console.error(err));
    }, 300);

    setTimeoutId(id);

    return () => clearTimeout(id);
  }, [query]);

  return (
    <div>
      <input
        className="nav-search"
        type="text"
        placeholder="Search mangas..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {results.length > 0 && (
        <ul>
          {results.map((manga) => (
            <li key={manga.id}>{manga.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchManga;
