import React from "react";

const ImageInfo = ({ url, author, width, height }) => {
  return (
    <div>
      <img src={url} alt={author} width="300" />
      <p>Autor: {author}</p>
      <p>Resolução: {width} x {height}</p>
    </div>
  );
};

export default ImageInfo;
