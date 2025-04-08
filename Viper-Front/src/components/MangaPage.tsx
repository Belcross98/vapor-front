import { useEffect, useState } from "react";
import { Manga } from "../types/Manga";
import { useParams } from "react-router-dom";

function MangaPage() {
  const [manga, setManga] = useState<Manga | null>(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5030/Manga/${id}`)
      .then((response) => response.json())
      .then((manga: Manga) => setManga(manga));
  }, [id]);

  return manga ? (
    <div className="card h-100">
      <img
        src={manga.mangaPictureURL || "https://via.placeholder.com/150"}
        className="card-img-top img-fluid" // Bootstrap classes
        alt={manga.name}
        style={{ objectFit: "cover", height: "200px" }}
      />
      <div className="card-body">
        <h5 className="card-title">{manga.name}</h5>
        <p className="card-text">
          {manga.description || "No description available."}
        </p>
      </div>
      <div className="card-footer">
        <small className="text-muted">
          Average Rating: {manga.averageRating || "N/A"}
        </small>
      </div>

      <div>
        Reviews:
        <ul>
          {manga.reviews.map((review) => (
            <>
              <li>{review.comment}</li>
              <li>{review.rating}</li>
              <li>{review.userName}</li>
            </>
          ))}
        </ul>
      </div>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
}

export default MangaPage;
