import { FormEvent, useState } from "react";
import StarRating from "react-star-ratings";

function Review() {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(1);
  const [error, setErrorMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    fetch("http://localhost:5030/Account/Review", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,

        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        mangaId: 1,
        comment: comment,
        rating: rating,
      }),
    })
      .then((response) => {
        if (response.status == 201) {
          return response.json();
        } else {
          console.log("nono");
        }
      })
      .catch((e) => {
        setErrorMessage(e.message);
      });
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
