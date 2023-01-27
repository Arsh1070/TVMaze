import FilledStar from "../../assets/filled-star.svg";
import EmptyStar from "../../assets/empty-star.svg";

const StarRating = ({ rating }) => {
  const finalRating = Math.round(rating) / 2;

  return [1, 2, 3, 4, 5].map((index) => {
    return (
      <img
        data-value={index + 1}
        className="star"
        src={index + 1 <= finalRating ? FilledStar : EmptyStar}
        alt={index + 1 <= finalRating ? "filled star" : "empty star"}
      />
    );
  });
};

export default StarRating;
