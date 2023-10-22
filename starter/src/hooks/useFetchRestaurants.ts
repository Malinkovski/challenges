import { useEffect, useState } from "react";
import { Restaurant } from "../interfaces/types";

const useFetchRestaurants = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5001/restaurants")
      .then(response => {
        if (!response.ok) {
          throw new Error('Error fetching data from the url.');
        }
        return response.json();
      })
      .then(data => {
        setRestaurants(data);
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { restaurants, loading, error };
};

export default useFetchRestaurants;
