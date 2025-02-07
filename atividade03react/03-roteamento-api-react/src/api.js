import axios from "axios";

const api = axios.create({
  baseURL: "https://picsum.photos/v2",
});

export const getPhotos = async () => {
  const response = await api.get("/list");
  return response.data;
};

export const getPhotoDetails = async (id) => {
  const response = await axios.get(`https://picsum.photos/id/${id}/info`);
  return response.data;
};

export default api;
