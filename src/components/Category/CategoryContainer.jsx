import Category from './Category'
import styles from './CategoryContainer.module.css'
import { GetAllVideos } from '../../utils/GetData';
import { useEffect, useState } from 'react';

export const CategoryContainer = ({category}) => {
  const [videos, setVideos] = useState([]);
  const fetchVideos = async () => {
    const videos = await GetAllVideos();
    setVideos(videos);
  }

  useEffect(() => {
    fetchVideos();
  }, [category])

  const frontendVideos = videos.filter((video) => video.category === 'frontend');
  const backendVideos = videos.filter((video) => video.category === 'backend');
  const mobileVideos = videos.filter((video) => video.category === 'mobile');
  
  return (
    <main className={styles.container}>
      <Category tech="front end" btnColor='#6BD1FF' dataTech={frontendVideos}/>
      <Category tech="back end"  btnColor='#00C86F' dataTech={backendVideos}/>
      <Category tech="mobile" btnColor='#FFBA05' dataTech={mobileVideos}/>
   </main>
  )
}
        
        