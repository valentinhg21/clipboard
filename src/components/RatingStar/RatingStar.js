import './RatingStar.css'
export default function RatingStar({
  rating,
  setRating,
  hover,
  setHover,
  ratingValue,
}) {
  return (
    <label>
      <input
        type="radio"
        name="rating"
        value={ratingValue}
        onClick={() => setRating(ratingValue)}
      />
      <i
        className={
          ratingValue <= (hover || rating)
            ? "fa fa-star Star__active"
            : "fa fa-star Star__disable"
        }
        onMouseEnter={() => setHover(ratingValue)}
        onMouseLeave={() => setHover(null)}
      ></i>
    </label>
  );
}
