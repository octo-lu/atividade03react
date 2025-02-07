import React, { useEffect, useState } from 'react';
import ImageCard from '../components/ImageCard.jsx';  
import '../styles/home.css';

const HomePage = () => {
  const [photoGallery, setPhotoGallery] = useState([]);

  useEffect(() => {
    fetch('https://picsum.photos/v2/list')
      .then(response => response.json())
      .then(data => {
        const first21Images = data.slice(0, 21); 
        console.log("🔍 IDs carregados na galeria:", first21Images.map(img => img.id)); 
        setPhotoGallery(first21Images);
      })
      .catch(error => console.error('Erro ao buscar imagens:', error));
  }, []);

  return (
    <div>
      <h1>Galeria de Fotos</h1>
      <ul className="image-list">
        {photoGallery.map(img => (
          <ImageCard 
            key={img.id} 
            id={img.id} 
            url={img.download_url} 
            author={img.author} 
          />
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
