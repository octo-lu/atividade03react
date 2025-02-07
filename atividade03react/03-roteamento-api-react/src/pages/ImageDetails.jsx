import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ImageInfo from '../components/ImageInfo.jsx';
import BackButton from '../components/Button.jsx';

const ImageDetailsPage = () => {
  const { id } = useParams();
  const [imageDetails, setImageDetails] = useState(null);

  useEffect(() => {
    fetch(`https://picsum.photos/id/${id}/info`)
      .then(response => response.json())
      .then(data => setImageDetails(data))
      .catch(error => console.error('Erro ao buscar detalhes da imagem:', error));
  }, [id]);

  if (!imageDetails) return <p>Carregando...</p>;

  return (
    <div>
      <h1>Detalhes da Imagem</h1>
      <ImageInfo 
        url={imageDetails.download_url} 
        author={imageDetails.author} 
        width={imageDetails.width} 
        height={imageDetails.height} 
      />
      <BackButton destination="/" />
    </div>
  );
};

export default ImageDetailsPage;
