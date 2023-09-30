import React from "react";
import { Link } from "react-router-dom";

interface ArtistItemProps {
  id: number;
  name: string;
  cover: string;
  bio: string;
}

interface ArtistProps{
  artist: ArtistItemProps;
}

const ArtistItem = ({ artist }: ArtistProps) => {
  const { id, name, cover, bio } = artist;
  return (
    <Link to={`artist/${id}`}>
      <div className="artist-card">
        <div className="inner-card">
          <img src={require(`../data/images/covers/${cover}.jpg`)} alt={name} />
          <div className="sticker">
            <h3>{name}</h3>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArtistItem;
