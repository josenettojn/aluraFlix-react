import YouTube from 'react-youtube';

const VideoPlayer = ({ videoUrl }) => {
  const getVideoId = (url) => {
    // Regex para extrair o ID do vídeo do YouTube
    const regExp = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regExp);
    return match ? match[1] : null;
  };

  const videoId = getVideoId(videoUrl);

  if (!videoId) {
    return <div>URL do vídeo do YouTube inválida</div>;
  }

  const opts = {
    height: '220',
    width: '380',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  return <YouTube videoId={videoId} opts={opts} />;
};

export default VideoPlayer;
