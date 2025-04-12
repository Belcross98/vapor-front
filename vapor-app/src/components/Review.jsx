import { useState } from "react";
import { useParams } from "react-router-dom";
import StarRating from "react-star-ratings";
import { createReview } from "../services/MangaApi";

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
    <>
      <form onSubmit={handleSubmit}>
        <label>Leave a review for this manga</label>
        <textarea
          id="comment"
          name="comment"
          placeholder="Enter your comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <StarRating
          rating={rating}
          starRatedColor="gold"
          changeRating={setRating}
          numberOfStars={5}
          name="rating"
        />
        <button type="submit">Submit</button>
      </form>
      {error && <div>{error}</div>}
    </>
  );
}

export default Review;
