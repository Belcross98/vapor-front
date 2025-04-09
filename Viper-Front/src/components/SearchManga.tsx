import { useState } from "react";
import { Manga } from "../types/Manga";

function SearchManga() {
  const [data, setData] = useState<Manga[] | null>(null);
  fetch("http://localhost:5030/Manga?PageSize=100")
    .then((response) => response.json())
    .then((data: Manga[]) => setData(data));
}

export default SearchManga;
