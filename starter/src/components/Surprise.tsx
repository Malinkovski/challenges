import Button from "./Button";
import { useRestaurantsContext } from "../context/RestaurantContext";

const Surprise = () => {
  const { restaurants } = useRestaurantsContext();

  const getRandomRestaurantId = () => {
    const randomId = Math.floor(Math.random() * restaurants.length);
    return restaurants[randomId].id;
  };

  const randomRestaurantId = getRandomRestaurantId();

  return (
    <section>
      <div className="surprise">
        <h2>don't know what to eat?</h2>
        <Button link={`/restaurant/${randomRestaurantId}`} title="Surprise me!"></Button>
      </div>
    </section>
  );
};

export default Surprise;
