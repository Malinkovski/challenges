import { useRestaurantsContext } from "../context/RestaurantContext";
import Card from "./Card";
import calcAverageRating  from "../utilities/calcRating";
import { TOP_RESTAURANTS } from "../interfaces/types";

const PopularRestaurants = () => {
  const { restaurants } = useRestaurantsContext();
  
  const sortedRestaurants = [...restaurants].sort((a, b) => {
    const avgA = calcAverageRating(a.reviewsList);
    const avgB = calcAverageRating(b.reviewsList);
    return avgB - avgA;
  })

  const topRestaurants = sortedRestaurants.slice(0, TOP_RESTAURANTS);

  return (
    <section>
      <div className="popular restaurants">
        <h3>our most popular restaurants</h3>
        <div className="container">
          {topRestaurants.map(restaurant => (
            <Card key={restaurant.id} {...restaurant} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularRestaurants;
