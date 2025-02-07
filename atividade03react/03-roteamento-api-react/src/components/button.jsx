import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/button.css"

const BackButton = ({ destination }) => {
  const navigate = useNavigate();
  
  return <button onClick={() => navigate(destination)}>Voltar</button>;
};

export default BackButton;
