import React from "react";
import { AlbumProps } from "./types";

interface Album {
  album: AlbumProps;
}

const AlbumPage = ({ album }: Album ) => {
  const {cover, title,year,price} = album;
  return (
    <section className="album-page">
      <div>
        <img
        className="pfp"
          src={require(`../data/images/albums/${cover}.jpg`)}
          alt={cover}
        />
        <div className="content">
        <p><b>Title:</b> {title}</p>
        <p><b>Year:</b> {year}</p>
        <p><b>Price:</b> ${price}</p>
        </div>
      </div>
    </section>
  );
};

export default AlbumPage;
