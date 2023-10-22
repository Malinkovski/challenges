import { useEffect, useState } from "react";

import Card from "./Card";
import { Restaurant } from "../interfaces/types";
import { useRestaurantsContext } from "../context/RestaurantContext";

const Favorites = () => {
  const { restaurants,favorites } = useRestaurantsContext();
  const [favoritedRestaurants, setFavoritedRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    const favoritedRestaurants = restaurants.filter((restaurant) => favorites.includes(restaurant.id));
    setFavoritedRestaurants(favoritedRestaurants);
  }, [favorites, restaurants]);

  return (
    <section>
      <div className="favorites container vh-80">
        {favoritedRestaurants.length > 0 ? (
          favoritedRestaurants.map((restaurant) => <Card key={restaurant.id} {...restaurant} />)
        ) : (
          <h4 className="centered">You don't have favorite restaurants.</h4>
        )}
      </div>
    </section>
  );
};

export default Favorites;
