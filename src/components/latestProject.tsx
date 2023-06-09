import styles from "@/styles/latestProject.module.css";
import { useRef, useState, useEffect} from "react";

export default function LatestProject({ project , index}: any) {
  const boxRef = useRef<HTMLDivElement>(null);
  const [viewport, setviewport] = useState(0);
  // X
  const [angle, setAngle] = useState<number | undefined>(0);
   useEffect(() => {
    setviewport(window.innerHeight);
    const top = boxRef.current?.getBoundingClientRect().top;
    const bottom = boxRef.current?.getBoundingClientRect().bottom;
    const mid = (top! + bottom!) / 2
    //   setX(x);
    if (mid === undefined) {
      return;
    }
      const newAngle = ((mid *180) / viewport) -90;
      setAngle(newAngle);
    
    console.log(index,mid, angle)

  }, []);
  // Re-calculate X and Y of the red box when the window gets resized by the user
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const top = boxRef.current?.getBoundingClientRect().top;
      const bottom = boxRef.current?.getBoundingClientRect().bottom;
      const mid = (top! + bottom!) / 2
      //   setX(x);
      if (mid === undefined) {
        return;
      }
        const newAngle = ((mid *180) / viewport) -90;
        setAngle(newAngle);
      console.log(index,mid, angle)
    })
  }, [viewport]);


  return (
    <>
      <div className={styles.slide} key={index}>
        <div
          ref={boxRef}
          className={styles.card}
          style={{ transform: "perspective(4000px) rotate3d(1,0,0," + angle + "deg)" }}
        >
          <p style={{ color: "black", fontSize: "72px" }}>{project.title}</p>
        </div>
      </div>
    </>
  );
}
