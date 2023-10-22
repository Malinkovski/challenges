import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import { Review } from "../interfaces/types";

const ReviewForm = () => {
  const { id } = useParams<{ id: string }>();

  const authorRef = useRef<HTMLInputElement>(null);
  const commentRef = useRef<HTMLTextAreaElement>(null);
  const starsRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const res = await fetch(`http://localhost:5001/restaurants/${id}`);
    const restaurant = await res.json();

    const author = authorRef.current?.value || "";
    const comment = commentRef.current?.value || "";
    const stars = starsRef.current?.value ? Number(starsRef.current?.value) : 1;

    const newReview: Review = {
      id: restaurant.reviewsList.length,
      author,
      comment,
      stars,
    };
    restaurant.reviewsList.push(newReview);
    restaurant.reviews = restaurant.reviewsList.length;

    await fetch(`http://localhost:5001/restaurants/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(restaurant),
    });

    if (authorRef.current) authorRef.current.value = "";
    if (commentRef.current) commentRef.current.value = "";
    if (starsRef.current) starsRef.current.value = "1";
  };

  return (
    <section>
      <div className="review-form">
        <h3>Review Form</h3>
        <form className="form-input-area" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            className="form-input"
            type="text"
            id="name"
            name="author"
            ref={authorRef}
            required
          />

          <label htmlFor="comment">Comment:</label>
          <textarea
            className="form-input"
            id="comment"
            name="comment"
            ref={commentRef}
            required
          ></textarea>

          <label htmlFor="stars">Rating (1-5):</label>
          <input
            type="range"
            id="stars"
            name="stars"
            min="1"
            max="5"
            ref={starsRef}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default ReviewForm;
