import React from "react";
import { Link } from "react-router-dom";

const ImageCard = ({ id, url, author }) => {
  return (
    <li className="image-item">
      <Link to={`/image/${id}`}>
        <img 
          src={url} 
          alt={`Foto de ${author}`} 
          className="image" 
        />
      </Link>
    </li>
  );
};

export default ImageCard;
