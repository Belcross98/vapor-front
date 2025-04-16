import { useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/MangaPage.css";
import Review from "../components/Review";
import { deleteReview, getManga } from "../services/MangaApi";
import useAsyncEffect from "../customHooks/useAsyncEffect";

function MangaPage() {
  const [manga, setManga] = useState(null);
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

  const deleteRev = async (mangaId) => {
    const { success, errorText } = await deleteReview(mangaId);
    if (success) {
      loadManga();
    } else {
      setError(errorText);
    }
  };

  useAsyncEffect(loadManga, [id]);
  return manga ? (
    <div className="manga-page">
      <div className="manga-page-left">
        <img
          src={manga.mangaPictureURL == "" ? undefined : manga.mangaPictureURL}
          className="manga-page-img"
          alt={manga.name}
        />
        <div className="manga-page-left-rating">
          Average Rating: {manga.averageRating || "N/A"}
        </div>
        {localStorage.getItem("accessToken") ? (
          <div className="manga-page-left-rate">
            <Review loadManga={loadManga} />
            <button onClick={() => deleteRev(id)}>Delete Review</button>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="manga-page-right">
        <span className="manga-page-right-title">{manga.name}</span>
        <span className="manga-page-right-description">
          <div className="manga-page-right-description-text">
            {manga.description}
          </div>
        </span>
        <div className="manga-page-right-revlist">
          {manga.reviews.map((review) => (
            <div className="manga-page-right-revlist-rev">
              <span>Author: {review.createdBy}</span>
              <span>Rating: {review.rating}</span>
              <span>Comment: {review.comment}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : (
    <>
      <h1>Loading...</h1>
    </>
  );
}

export default MangaPage;
