import React from "react";
import Card from "./Card";
import { useRestaurantsContext } from "../context/RestaurantContext";
import { useParams } from "react-router-dom";

const CuisinesDetails = () => {
  const { restaurants } = useRestaurantsContext();
  const { cuisine } = useParams<{ cuisine: string }>();
  
  const filteredRestaurants = restaurants.filter(
    (restaurant) => restaurant.restauranttype.toLowerCase() === cuisine && cuisine.toLowerCase()
  );

  return (
    <section>
      <div className="restaurants centered">
        <h3>{cuisine} Restaurants</h3>
        <div className="container">
          {filteredRestaurants.length > 0 ? (
            filteredRestaurants.map((restaurant) => (
              <Card key={restaurant.id} {...restaurant} />
            ))
          ) : (
            <></>
          )}
        </div>
        {filteredRestaurants.length === 0 ? (
          <h4 className="centered vh-80">No restaurants available for this cuisine.</h4>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
};

export default CuisinesDetails;
