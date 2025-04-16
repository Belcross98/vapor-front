import { useState } from "react";
import { useParams } from "react-router-dom";
import StarRating from "react-star-ratings";
import { createReview } from "../services/MangaApi";
import "../styles/Review.css";

function Review({ loadManga }) {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(1);
  const [error, setErrorMessage] = useState("");
  const { id } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { success, errorText, data } = await createReview(
      id,
      comment,
      rating
    );
    if (success) {
      setComment("");
      setRating(1);
      loadManga();
    } else {
      setErrorMessage(errorText);
    }
  };

  return (
    <div className="rate-container">
      <form className="rate-container-form" onSubmit={handleSubmit}>
        <textarea
          id="comment"
          name="comment"
          placeholder="Enter your comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <StarRating
          className="star"
          starDimension="3rem"
          rating={rating}
          starRatedColor="gold"
          changeRating={setRating}
          numberOfStars={5}
          name="rating"
        />
        <button type="submit">Rate</button>
      </form>
    </div>
  );
}

export default Review;
