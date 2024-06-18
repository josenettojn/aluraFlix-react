export const GetAllVideos = async (category) => {
  try {
    const response = await fetch('http://localhost:5000/videos')
    const data = await response.json()

    if(category) {
      return data.filter((video) => video.category === category)
    }
    return data;
  } catch (error) {
    console.error(error);
  }
}