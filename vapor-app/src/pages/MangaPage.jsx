import { useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/MangaPage.css";
import Review from "../components/Review";
import { getManga } from "../services/MangaApi";
import useAsyncEffect from "../customHooks/useAsyncEffect";

function MangaPage() {
  const [manga, setManga] = useState(null)
  const { id } = useParams();
  const [error, setError] = useState("");

  const loadManga = async () => {
    const { success, errorText, data } = await getManga(id);
    if (success) {
      setManga(data);
    } else {
      setError(errorText);
    }
  };
  useAsyncEffect(loadManga, [id]);
  return manga ? (
    <>
      <div className="card h-100">
        <img
          src={manga.mangaPictureURL == "" ? undefined : manga.mangaPictureURL}
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
              <li key={review.id}>
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
      <h1>Loading...</h1>
    </>
  );
}

export default MangaPage;
