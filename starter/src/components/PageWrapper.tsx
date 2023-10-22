import React from "react";
import { useRestaurantsContext } from "../context/RestaurantContext";
import LoadingPage from "../pages/LoadingPage";

interface PageWrapperProps {
  children: React.ReactNode;
}

const PageWrapper = ({ children }: PageWrapperProps) => {
  const { loading } = useRestaurantsContext();

  return (
    <div className="page-wrapper">
      {loading ? <LoadingPage /> : children}
    </div>
  );
};

export default PageWrapper;
