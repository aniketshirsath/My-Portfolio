import React, { useState, useEffect } from "react";
import "../Styles/Projects.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Simulate fetching project data from an API or external source
    const fetchedProjects = [
      {
        title: "FilmMate AI",
        image: "https://yujisatojr.github.io/react-portfolio-template/static/media/mock10.2d05b02ba569a430a255.png",
        description: "Movie finder app using OpenAI GPT-3.5 Turbo, Qdrant, React, and Flask.",
        link: "https://github.com/your-username/filmate-ai",
      },
      {
        title: "High Speed Chase",
        image: "https://yujisatojr.github.io/react-portfolio-template/static/media/mock09.e18677ccfc932e52d754.png",
        description: "3D multiplayer racing game built with Unity and C#.",
        link: "https://your-link.com/high-speed-chase",
      },
      {
        title: "Portfolio Website",
        image: "https://yujisatojr.github.io/react-portfolio-template/static/media/mock08.13f46873fdbd382f4b76.png",
        description: "My personal portfolio built using React and Bootstrap.",
        link: "https://your-portfolio-link.com",
      },
      {
        title: "Weather App",
        image: "https://yujisatojr.github.io/react-portfolio-template/static/media/mock07.3f1110f482232b33c6a2.png",
        description: "Real-time weather forecast app using OpenWeather API.",
        link: "https://github.com/your-username/weather-app",
      },
    ];

    setProjects(fetchedProjects);
  }, []);

  return (
    <section className="projects-section py-5" id="projects">
      <div className="container">
        <h2 className="section-title mb-5">Personal Projects</h2>
        <div className="row">
          {projects.map((project, index) => (
            <div className="col-md-6 col-lg-6 mb-4" key={index}>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                <div className="card project-card h-100">
                  <img
                    src={project.image}
                    className="card-img-top"
                    alt={project.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">{project.description}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
