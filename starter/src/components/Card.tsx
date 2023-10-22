import { Link } from "react-router-dom";
import { Restaurant } from "../interfaces/types";
import Image from "./misc/image/Image";
import LoadingImage from "./misc/image/LoadingImage";
import calcAverageRating from "../utilities/calcRating";
import useFavorite from "../hooks/useFavorites";

const Card = ({
  image,
  businessname,
  restauranttype,
  id,
  reviewsList,
}: Restaurant) => {
  const { isFavorite, handleFavoriteButton } = useFavorite(id);
  const avarageRating = calcAverageRating(reviewsList);

  return (
    <div className="card">
      <Link to={`/restaurant/${id}`}>
        <div className="inner-card card-container">
          <Image
            src={image}
            alt={businessname}
            loadingPlaceholder={<LoadingImage />}
          />
          <div className="details">
            <h4>{businessname}</h4>
            <span className="restaurant-type">{restauranttype}</span>
            {avarageRating > 0 && <span>rating - {avarageRating}</span>}
            {reviewsList.length > 0 && (
              <span className="rating">
                based on {reviewsList.length} reviews
              </span>
            )}
          </div>
        </div>
      </Link>
      <div className="favorite-button" onClick={handleFavoriteButton}>
        {isFavorite ? (
          <i className="fas fa-heart"></i>
        ) : (
          <i className="far fa-heart"></i>
        )}
      </div>
    </div>
  );
};

export default Card;
