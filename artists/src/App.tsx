import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import ArtistsList from "./components/ArtistsList";
import ArtistPage from "./components/ArtistPage";
import artists from "./data/db";
import "./App.css";
import AlbumPage from "./components/AlbumPage";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<ArtistsList />} />
          <Route path="/home" element={<ArtistsList />} />
          {artists.map((artist) => (
            <Route
              key={artist.id}
              path={`artist/${artist.id}`}
              element={<ArtistPage artist={artist} />}
            />
          ))}
          {artists.map((artist) =>
            artist.albums.map((album) => (
              <Route
                key={album.albumId}
                path={`artist/${artist.id}/${album.albumId}`}
                element={<AlbumPage album={album} />}
              />
            ))
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
