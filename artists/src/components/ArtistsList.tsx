import React from "react";
import artists from "../data/db";
import ArtistItem from "./ArtistItem";

const ArtistsList = () => {
  return (
    <section className="artists-section">
      <h2>Browse the Artists</h2>
      <div className="artists-list">
        {artists.map((artist) => (
          <ArtistItem key={artist.id} artist={artist} />
        ))}
      </div>
    </section>
  );
};

export default ArtistsList;
