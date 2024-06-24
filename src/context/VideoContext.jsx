import { createContext, useContext, useState, useEffect } from "react";

const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);

  const fetchVideos = async () => {
    try {
      const response = await fetch("http://localhost:5000/videos");
      const data = await response.json();
      setVideos(data);
    } catch (error) {
      console.error("Erro ao buscar vídeos:", error);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const addVideo = (newVideo) => {
    setVideos((prevVideos) => [...prevVideos, newVideo]);
  };

  const deleteVideo = async (id) => {
    try {
      await fetch(`http://localhost:5000/videos/${id}`, {
        method: "DELETE",
      });
      setVideos((prevVideos) => prevVideos.filter((video) => video.id !== id));
    } catch (error) {
      console.error("Erro ao deletar o vídeo:", error);
    }
  };
  const updateVideo = async (updatedVideo) => {
    try {
      await fetch(`http://localhost:5000/videos/${updatedVideo.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedVideo),
      });
      setVideos((prevVideos) =>
        prevVideos.map((video) =>
          video.id === updatedVideo.id ? updatedVideo : video
        )
      );
    } catch (error) {
      console.error("Erro ao atualizar o vídeo:", error);
    }
  };

  return (
    <VideoContext.Provider
      value={{ videos, addVideo, deleteVideo, updateVideo }}
    >
      {children}
    </VideoContext.Provider>
  );
};

export const useVideos = () => {
  return useContext(VideoContext);
};
