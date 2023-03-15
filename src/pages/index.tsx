import Head from "next/head";
import styles from "@/styles/index.module.css";
import NavBar from "@/components/navbar";
import LatestProject from "@/components/latestProject";

export default function Home() {
  const latestProjects = [
    {
      title:"test 1",
      image:"",
      video:"",
    },
    {
      title:"test 2",
      image:"",
      video:"",
    },
    {
      title:"test 3",
      image:"",
      video:"",
    }
  ]
  console.log("test")
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavBar />
        <div className={styles.firstPane}>
          <video muted loop autoPlay className={styles.video}>
            <source src="/videos/sample_3.mp4" type="video/mp4" />
          </video>
          <div className={styles.downArrow}> 
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="#36454F"
              className={styles.downArrow}
              viewBox="0 0 16 16"
            >

              {" "}
              <path
                fill-rule="evenodd"
                d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
              />{" "}
            </svg>
          </div>
        </div>
        <div className={styles.intro}>
        </div>
        <div className={styles.secondPane}>
          <h2 className={styles.title}>
            His experience in vairous freelance work has provided Zander deuna the skills to adapt to any multip-media task without having issues whatsoever. 
          </h2>
          I will have to add in additional Descriptions here for next projects siguro I dunno
        </div>
        <div className={styles.thirdPane}>
          <h2 className={styles.title}>PROJECTS</h2> 

          {latestProjects.map((project, index)=> {
            return <>
              <LatestProject project={project} index={index} key={index} />
            </>

          })}
        </div>
        <div className={styles.secondPane}>
          <h2 className={styles.title}>TEST</h2> cla
        </div>
      </main>
    </>
  );
}
