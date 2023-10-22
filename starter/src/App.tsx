import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import "./styles/main.scss";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Surprise from "./components/Surprise";
import PageWrapper from "./components/PageWrapper";
import PopularRestaurants from "./components/PopularRestaurants";
import AllRestaurants from "./components/AllRestaurants";
import Cuisines from "./components/Cuisines";
import Favorites from "./components/Favorites";
import CuisineDetails from "./components/CuisineDetails";
import RestaurantDetails from "./components/RestaurantDetails";
import ScrollToTop from "./components/misc/ScrollToTop";

import Error404Page from "./pages/Error404Page";

import { RestaurantProvider } from "./context/RestaurantContext";
import { DarkThemeProvider } from "./context/ThemeContext";

const App = () => {
  return (
    <RestaurantProvider>
      <DarkThemeProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Header />
          <Routes>
            <Route path="" element={<Navigate to="/home" />} />
            <Route
              path="/home"
              element={
                <PageWrapper>
                  <Surprise />
                  <PopularRestaurants />
                  <Cuisines />
                  <AllRestaurants />
                </PageWrapper>
              }
            />
            <Route
              path="/cuisines/:cuisine"
              element={
                <PageWrapper>
                  <CuisineDetails />
                </PageWrapper>
              }
            />
            <Route
              path="/restaurant/:id"
              element={
                <PageWrapper>
                  <RestaurantDetails />
                </PageWrapper>
              }
            />
            <Route
              path="/favorites"
              element={
                <PageWrapper>
                  <Favorites />
                </PageWrapper>
              }
            />
            <Route
              path="*"
              element={
                <PageWrapper>
                  <Error404Page />
                </PageWrapper>
              }
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      </DarkThemeProvider>
    </RestaurantProvider>
  );
};

export default App;
