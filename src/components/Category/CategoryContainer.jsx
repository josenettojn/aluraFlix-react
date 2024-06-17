import { useEffect, useState } from 'react';
import Category from './Category'
import styles from './CategoryContainer.module.css'

export const CategoryContainer = () => {
    const [videos, setVideos] = useState({});
  
  useEffect(() => {
    const fetchVideos = async () => { 
      try {
        const response = await fetch('http://localhost:5000/videos')
        const data = await response.json()
        console.log('Dados recebidos:', data);
        setVideos(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchVideos()
  }, []);

  const { frontend, backend, mobile } = videos;

  console.log('esse é o frontend', frontend)
  console.log('esse é p backend ', backend)
  console.log('esse é p mobile ', mobile)

  return (
    <main className={styles.container}>
      <Category tech="front end" btnColor='#6BD1FF' dataTech={frontend}/>
      <Category tech="back end"  btnColor='#00C86F' dataTech={backend}/>
      <Category tech="mobile" btnColor='#FFBA05' dataTech={mobile}/>
    </main>
  )
}
