import { useEffect, useState } from "react";
import { Manga } from "../types/Manga";
import { useParams } from "react-router-dom";
import "./MangaPage.css";
import Navbar from "./NavBar";
import Review from "./Review";

function MangaPage() {
  const [manga, setManga] = useState<Manga | null>(null);
  const { id } = useParams();
  const mangaId = id ? Number(id) : 0;

  useEffect(() => {
    fetch(`http://localhost:5030/Manga/${id}`)
      .then((response) => response.json())
      .then((manga: Manga) => setManga(manga));
  }, [id]);

  return manga ? (
    <>
      <Navbar />
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
          <ul className="rev-list">
            {manga.reviews.map((review) => (
              <li key={review.createdBy}>
                <div className="rev">
                  <span>Author: {review.createdBy}</span>
                  <span>Rating: {review.rating}</span>
                  <span>Comment: {review.comment}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Review />
    </>
  ) : (
    <>
      <Navbar />
      <h1>Loading...</h1>
    </>
  );
}

export default MangaPage;
