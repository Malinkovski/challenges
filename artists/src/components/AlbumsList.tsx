import React from "react";
import { Link } from "react-router-dom";
import { AlbumProps } from "./types";

interface AlbumsListProps {
  albums: AlbumProps[];
  artistId: number;
}

const AlbumsList = ({ albums, artistId }: AlbumsListProps) => {
  return (
    <div className="albums">
      {albums.map((album) => (
        <div key={album.albumId} className="album">
          <Link to={`/artist/${artistId}/${album.albumId}`}>
            <img
              src={require(`../data/images/albums/${album.cover}.jpg`)}
              alt={album.cover}
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default AlbumsList;
