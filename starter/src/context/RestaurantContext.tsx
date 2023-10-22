import React, { createContext, useContext, useState, useEffect } from "react";
import useFetchRestaurants from "../hooks/useFetchRestaurants";
import { Restaurant } from "../interfaces/types";

interface RestaurantContextProps {
  restaurants: Restaurant[];
  loading: boolean;
  error: Error | null;
  favorites: string[];
  addToFavorites: (restaurantId: string) => void;
  removeFromFavorites: (restaurantId: string) => void;
}

interface ChildrenProps {
  children: React.ReactNode;
}

const RestaurantContext = createContext<RestaurantContextProps>({
  restaurants: [],
  loading: true,
  error: null,
  favorites: [],
  addToFavorites: () => {},
  removeFromFavorites: () => {},
});

export const RestaurantProvider = ({ children }: ChildrenProps) => {
  const { restaurants, loading, error } = useFetchRestaurants();

  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    setFavorites(storedFavorites);
  }, []);

  const addToFavorites = (restaurantId: string) => {
    const updatedFavorites = [...favorites, restaurantId];
    console.log(favorites);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const removeFromFavorites = (restaurantId: string) => {
    const updatedFavorites = favorites.filter((id) => id !== restaurantId);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <RestaurantContext.Provider
      value={{
        restaurants,
        loading,
        error,
        favorites,
        addToFavorites,
        removeFromFavorites,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};

export const useRestaurantsContext = () => {
  const context = useContext(RestaurantContext);
  return context;
};
