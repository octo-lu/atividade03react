import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPhotoDetails } from "../api";
import ImageInfo from "../components/ImageInfo.jsx";
import BackButton from "../components/Button.jsx";

const PhotoPage = () => {
  const { id } = useParams();
  const [photoDetails, setPhotoDetails] = useState(null);

  useEffect(() => {
    const fetchPhotoDetails = async () => {
      try {
        const data = await getPhotoDetails(id);
        setPhotoDetails(data);
      } catch (error) {
        console.error("Erro ao buscar detalhes da imagem:", error);
      }
    };

    fetchPhotoDetails();
  }, [id]);

  if (!photoDetails) return <p>Carregando...</p>;

  return (
    <div>
      <h1>Detalhes da Foto</h1>
      <ImageInfo 
        url={photoDetails.download_url} 
        author={photoDetails.author} 
        width={400} 
        height={"auto"} 
      />
      <BackButton destination="/" />
    </div>
  );
};

export default PhotoPage;
