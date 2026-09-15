import React from "react";

const Projects = () => {

  type project = {
    id:number;
    src:string;
    top:string;
    left:string;
    width:string;
    height:string;
    speed:string;
  }

  const projects:project[] =  [
    {
      id: 1,
      src: "https://cdn.prod.website-files.com/680370eb38ccbea9790c27e5/6878174235f678f789569979_04bd0d27d8b00e698793bbc1368de0ae_Frame%202085662695.webp",
      top: "0%",
      left: "55%",
      width: "clamp(300px, 45vw, 550px)",
      height: "clamp(220px, 80vh, 450px)",
      speed:"1"
    },

    {
      id: 2,
      src: "https://cdn.prod.website-files.com/680370eb38ccbea9790c27e5/68a61537a1738890325ee9af_671d9b86aae299d508f1e270d8ca0eaf_img-counterform.webp",
      top: "18%",
      left: "12%",
      width: "clamp(280px, 35vw, 480px)",
      height: "clamp(220px, 65vh, 420px)",
      speed:"1.5"
    },

    {
      id: 3,
      src: "https://cdn.prod.website-files.com/680370eb38ccbea9790c27e5/687a8985c9ad70ecdbf311b5_b02b3bbdb218669c2adc5ea72a5e89f2_4.webp",
      top: "32%",
      left: "62%",
      width: "clamp(300px, 60vw, 520px)",
      height: "clamp(220px, 50vw, 430px)",
       speed:"0.9"
    },

    {
      id: 4,
      src: "https://cdn.prod.website-files.com/680370eb38ccbea9790c27e5/687a8a3d1e71b36d417eef99_1ec98aff4dfec1bfe8ef70c2c6397e67_6.webp",
      top: "45%",
      left: "10%",
      width: "clamp(300px, 34vw, 580px)",
      height: "clamp(220px, 60vh, 480px)",
       speed:"1"
    },

    {
      id: 5,
      src: "https://cdn.prod.website-files.com/680370eb38ccbea9790c27e5/68a613f3a1372e933d838982_875da6fdfbddc381190c21ceaa171392_img-solar.webp",
      top: "60%",
      left: "68%",
      width: "clamp(280px, 27vw, 470px)",
      height: "clamp(220px, 24vw, 400px)",
      speed:"1.1"
    },

    {
      id: 6,
      src: "https://cdn.prod.website-files.com/680370eb38ccbea9790c27e5/68db9186b10f8a414a71c9df_e00f96688e66917d9143de4d0593966f_Frame%202085663156.webp",
      top: "76%",
      left: "8%",
      width: "clamp(300px, 31vw, 530px)",
      height: "clamp(220px, 27vw, 450px)",
      speed:"1.35"
    },

    {
      id: 7,
      src: "https://cdn.prod.website-files.com/680370eb38ccbea9790c27e5/6878174235f678f789569979_04bd0d27d8b00e698793bbc1368de0ae_Frame%202085662695.webp",
      top: "80%",
      left: "52%",
      width: "clamp(300px, 33vw, 560px)",
      height: "clamp(220px, 28vw, 460px)",
       speed:"1"
    },
  ];

  return (
    <main>
        <div>
            <h1 className="text-[20vw] font-bold">21-26</h1>
        </div>
        <section className="relative h-[400vh] w-full overflow-hidden">
      {projects.map((project) => (
        <div
          key={project.id}
          className={`experiment-${project.id} absolute will-change-transform`}
          style={{
            top: project.top,
            left: project.left,
            width: project.width,
            height: project.height,
          }}
        >
          <div data-speed={project.speed} className="group relative h-full w-full overflow-hidden">
            <div data-speed="0.85" className="h-full w-full overflow-hidden">
            <img
              src={project.src}
              alt={`Project ${project.id}`}
              className="h-[120%] w-full object-cover"
            />
            </div>
          </div>
        </div>
      ))}
    </section>
    </main>
  );
};

export default Projects;