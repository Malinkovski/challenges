export interface AlbumProps {
    albumId: string;
    title: string;
    year: number;
    cover: string;
    price: number;
  }

export interface ArtistProps {
    id: number;
    cover: string;
    name: string;
    bio: string;
    albums: {
      albumId: string;
      title: string;
      year: number;
      cover: string;
      price: number;
    }[];
  
  }