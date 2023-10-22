import React from "react";
import { useParams } from "react-router-dom";
import { useRestaurantsContext } from "../context/RestaurantContext";
import LoadingImage from "./misc/image/LoadingImage";
import Image from "./misc/image/Image";
import calcAverageRating from "../utilities/calcRating";
import ReviewForm from "./ReviewForm";

const RestaurantDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { restaurants } = useRestaurantsContext();
  const restaurant = restaurants.find((r) => r.id === id);

  if (!restaurant) {
    return <h4 className="centered">Restaurant not found</h4>;
  }

  const averageRating = calcAverageRating(restaurant.reviewsList);

  return (
    <>
      <section>
        <div className="restaurant-details">
          <h3>{restaurant.businessname}</h3>
          <div className="card">
            <div className="inner-card card-container">
              <Image
                src={restaurant.image}
                alt={restaurant.businessname}
                loadingPlaceholder={<LoadingImage />}
              />
              <div className="details">
                {averageRating > 0 && <span>rating - {averageRating}</span>}
                {restaurant.reviewsList.length > 0 && (
                  <span className="rating">
                    based on {restaurant.reviewsList.length} reviews
                  </span>
                )}
                <div className="info">
                  <span>{restaurant.phone}</span>
                  <span>{restaurant.email}</span>
                  <span>{restaurant.address}</span>
                  {restaurant.parkinglot && (
                    <span>We have a parking lot waiting for you.</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {restaurant.reviewsList.length > 0 && (
        <section>
          <h3>reviews</h3>
          <div className="restaurant-reviews">
            {restaurant.reviewsList.map((review) => (
              <ul key={review.id} className="review-card card-container">
                <li>
                  <p>
                    <strong>Author: </strong>
                    <span>{review.author}</span>
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Message: </strong>
                    {review.comment}
                  </p>
                </li>
                <li>
                  <p>
                    <strong>stars: </strong>
                    <span>{review.stars}</span>
                  </p>
                </li>
              </ul>
            ))}
          </div>
        </section>
        
      )}
<ReviewForm/>
    </>
  );
};

export default RestaurantDetails;
