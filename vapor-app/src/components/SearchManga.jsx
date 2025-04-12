import { useState } from "react";
import "../styles/SearchManga.css";
import useDebounce from "../customHooks/useDebounce";
import { searchManga } from "../services/MangaApi";

function SearchManga() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async (query) => {
    if (!query) {
      setResults([]);
      return;
    }

    const { success, data, errorText } = await searchManga(query);
    if (success) {
      setResults(data);
    } else {
      console.error(errorText);
    }
  };
  useDebounce(() => handleSearch(query), query, 1000);

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
