const VideoPlayer = ({ videoUrl }) => {
  if (!videoUrl) {
    return <div>Url não encontrada</div>;
  }

  const isEmbedUrl = videoUrl.includes("youtube.com/embed/");

  const embedUrl = isEmbedUrl
    ? videoUrl
    : videoUrl.replace("watch?v=", "embed/");

  return (
    <iframe
      width="320"
      height="220"
      src={embedUrl}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="YouTube video player"
    ></iframe>
  );
};

export default VideoPlayer;
