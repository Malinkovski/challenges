import { useState, useEffect } from "react";
import { useRestaurantsContext } from "../context/RestaurantContext";

const useFavorite = (id: string) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { favorites, addToFavorites, removeFromFavorites } = useRestaurantsContext();

  useEffect(() => {
    setIsFavorite(favorites.includes(id));
  }, [favorites, id]);

  const handleFavoriteButton = () => {
    if (isFavorite) {
      removeFromFavorites(id);
    } else {
      addToFavorites(id);
    }
    setIsFavorite(!isFavorite);
  };

  return { isFavorite, handleFavoriteButton };
};

export default useFavorite;
