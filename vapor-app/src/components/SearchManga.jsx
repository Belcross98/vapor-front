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

    const { success, errorText, data } = await searchManga(query);
    if (success) {
      setResults(data);
    } else {
      console.error(errorText);
    }
  };
  useDebounce(() => handleSearch(query), query, 1000);

  return (
    <div className="nav-search-container">
      <input
        spellCheck="false"
        className="nav-search"
        type="text"
        placeholder="Search mangas..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {results.length > 0 && (
        <div className="nav-search-results">
          {results.map((manga) => (
            <div className="nav-search-results-element" key={manga.id}>
              {manga.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchManga;
