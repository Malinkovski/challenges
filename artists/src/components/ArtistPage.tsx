import React from "react";
import AlbumsList from "./AlbumsList";
import { ArtistProps } from "./types";

interface ArtistPageProps {
  artist: ArtistProps;
}

const ArtistPage = ({ artist }: ArtistPageProps) => {
  const { id, cover, name, bio, albums } = artist;

  return (
    <section className="artist-page">
      <img
        className="pfp"
        src={require(`../data/images/covers/${cover}.jpg`)}
        alt={name}
      />
      <h3>{name}</h3>
      <p>{bio}</p>
      <AlbumsList albums={albums} artistId={id} />
    </section>
  );
};

export default ArtistPage;
