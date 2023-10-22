import Card from "./Card";
import { useRestaurantsContext } from "../context/RestaurantContext";

const AllRestaurants = () => {
  const { restaurants} = useRestaurantsContext();

  return (
    <section>
      <div className="all restaurants">
        <h3>all restaurants</h3>
        <div className="container">
          {restaurants.map(restaurant => (
            <Card key={restaurant.id} {...restaurant} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllRestaurants;
