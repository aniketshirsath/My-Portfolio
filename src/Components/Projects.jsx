import React, { useState, useEffect } from "react";
import "../Styles/Projects.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((proj) => proj.category === selectedCategory);

  useEffect(() => {
    const fetchedProjects = [
      {
        title: "AJIO - React E-commerce Website",
        image: "https://user-images.githubusercontent.com/86410149/134050863-999bc6f0-71f8-4cde-8631-ba9f0701c463.png",
        description: "A stylish fashion e-commerce website with a smooth shopping cart, trendy product pages, and modern UI design.",
        code: "https://github.com/aniketshirsath/Ajio_Fe",
        live: "https://ajio-fe.vercel.app/  ",
        category: "react"
      },
      {
        title: "🛍️ Westside - React E-commerce Clone Website",
        image: "https://avadaio_assets.storage.googleapis.com/uploads/2023/11/24112824/10-WESTSIDE.jpg",
        description: "A stylish fashion e-commerce website with a smooth shopping cart, trendy product pages, and modern UI design.",
        code: "https://github.com/aniketshirsath/Westside_Fe",
        live: "https://westside-fe.vercel.app/",
        category: "react"
      },
      {
        title: "🎨 Paul Smith - Frontend Clone Website",
        image: "https://a.storyblok.com/f/88751/1634x980/b092afeec7/paulsmith-preview.png/m/900x0/",
        description: "Welcome to the Paul Smith Clone – a modern, responsive frontend website inspired by the Paul Smith e-commerce design. Built with clean layouts and smooth navigation for a user-friendly shopping experience.",
        code: "https://github.com/aniketshirsath/PaulSmith_Fe",
        live: "https://paul-smith-fe.vercel.app/",
        category: "javascript"
      },
      {
        title: "🎬 CineVibe - Movie Booking Website UI",
        image: "https://i.ytimg.com/vi/dyGO7vQw3xM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBtDlfcEtmWfedrdC3E1iwZukKhtg",
        description: "CineVibe is a modern movie booking website frontend built with HTML, CSS, and Media Queries. It features a clean UI inspired by platforms like BookMyShow and showcases responsive design skills.",
        code: "https://github.com/aniketshirsath/CineVibe",
        live: "https://cine-vibe-omega.vercel.app/",
        category: "html-css"
      },
      {
        title: "🛍️ Casmart - Fashion E-commerce Website",
        image: "https://repository-images.githubusercontent.com/489636246/cda881a2-5456-4646-aac2-63718dc43c40",
        description: "Casmart is a stylish and responsive fashion e-commerce frontend made with HTML, CSS, Bootstrap. It’s perfect for online store layouts..",
        code: "https://github.com/aniketshirsath/casmart_web",
        live: "https://casmart-webpage.vercel.app/",
        category: "html-css"
      }
    ];

    setProjects(fetchedProjects);
  }, []);

  return (
    <section className="projects-section container" id="projects">
      <h2 className="section-title">Projects</h2>

      <ul className="nav nav-tabs mb-4">
        <li className="nav-item">
          <button
            className={`nav-link ${selectedCategory === "all" ? "active" : ""}`}
            onClick={() => setSelectedCategory("all")}
          >
            All
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${selectedCategory === "html-css" ? "active" : ""}`}
            onClick={() => setSelectedCategory("html-css")}
          >
            HTML-CSS
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${selectedCategory === "javascript" ? "active" : ""}`}
            onClick={() => setSelectedCategory("javascript")}
          >
            JavaScript
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${selectedCategory === "react" ? "active" : ""}`}
            onClick={() => setSelectedCategory("react")}
          >
            React
          </button>
        </li>
      </ul>


      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <div className="project-card container" key={index}>
            <img src={project.image} alt={project.title} className="project-img img-fluid" />
            <div className="project-info p-3">
              <h4 className="mt-3">{project.title}</h4>
              <p>{project.description}</p>
              <div className="btn-group">
                <a href={project.code} target="_blank" rel="noreferrer" className="btn text-light">Code</a>
                <a href={project.live} target="_blank" rel="noreferrer" className="btn text-light">Live</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

