import React, { ReactNode, useState } from "react";

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  loadingPlaceholder?: ReactNode;
}

const Image = ({ src, alt, className, loadingPlaceholder }: ImageProps) => {
  const [loaded, setLoaded] = useState(false);

  const handleImageLoaded = () => {
    setLoaded(true);
  };

  return (
    <>
      {loaded ? null : loadingPlaceholder || "Loading..."}
      <img 
        src={src}
        alt={alt}
        className={`${className} ${!loaded && "image-hidden"}`} 
        onLoad={handleImageLoaded}
        />
    </>
  );
};

export default Image;
