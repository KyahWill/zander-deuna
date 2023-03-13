import styles from "@/styles/latestProject.module.css";
import {useRef, useState, useEffect, UIEvent, useCallback} from 'react'
export default function LatestProject({project}:any, ) {
    const boxRef = useRef<HTMLDivElement>(null);

    // X
    const [top, setTop] = useState<number | undefined>();
  
    useEffect(() => {
        getPosition();
      }, []);
      // Re-calculate X and Y of the red box when the window gets resized by the user
    useEffect(() => {
    window.addEventListener("scroll", getPosition);
    }, [])

    // This function calculate X and Y
    const getPosition = () => {
      const x = boxRef.current?.getBoundingClientRect().top;
    //   setX(x);
      console.log(x)
    };
    return <>

    <div  className={styles.slide}>
      <div ref={boxRef} className={styles.card}>
        <p style={{color:"black",fontSize:"72px",}}>{project.title}</p>
      </div>
      
    </div>
  </>
}