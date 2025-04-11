import { useEffect, useState } from "react";
import { Manga } from "../types/Manga";
import { useParams } from "react-router-dom";
import "../styles/MangaPage.css";
import Navbar from "../components/NavBar";
import Review from "../components/Review";
import { getManga } from "../services/MangaApi";

function MangaPage() {
  const [manga, setManga] = useState<Manga | null>(null);
  const { id } = useParams();
  const [error, setError] = useState("");

  useEffect(() => {
    const loadManga = async () => {
      try {
        const selectedManga = await getManga(id!);
        setManga(selectedManga);
      } catch (err) {
        setError("Failed to load selected manga...");
        console.log(error);
      }
    };
    loadManga();
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
      {localStorage.getItem("accessToken") ? <Review /> : ""}
    </>
  ) : (
    <>
      <Navbar />
      <h1>Loading...</h1>
    </>
  );
}

export default MangaPage;
