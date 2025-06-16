import React, { useState, useEffect } from "react";
import "../Styles/Projects.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchedProjects = [
      {
        title: "🛍️ Westside - React E-commerce Clone Website",
        image: "https://www.westside.com/cdn/shop/files/Polo-Web_5f2d056f-0e57-4ed1-b839-325148538f6c.jpg?v=1749792532",
        description: "A stylish fashion e-commerce website with a smooth shopping cart, trendy product pages, and modern UI design.",
        code: "https://github.com/aniketshirsath/Westside_Fe",
        live: "https://westside-fe.vercel.app/",
      },
      {
        title: "🎨 Paul Smith - Frontend Clone Website",
        image: "https://www.madethought.com/uploads/projects/PAUL-SMITH/_landscape768/Madethought_PAUL-SMITH_CASE-STUDY-1.jpg",
        description: "Welcome to the Paul Smith Clone – a modern, responsive frontend website inspired by the Paul Smith e-commerce design. Built with clean layouts and smooth navigation for a user-friendly shopping experience.",
        code: "https://github.com/aniketshirsath/PaulSmith_Fe",
        live: "https://paul-smith-fe.vercel.app/",
      },
      {
        title: "🎬 CineVibe - Movie Booking Website UI",
        image: "https://i.ytimg.com/vi/dyGO7vQw3xM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBtDlfcEtmWfedrdC3E1iwZukKhtg",
        description: "CineVibe is a modern movie booking website frontend built with HTML, CSS, and Media Queries. It features a clean UI inspired by platforms like BookMyShow and showcases responsive design skills.",
        code: "https://github.com/aniketshirsath/CineVibe",
        live: "https://cine-vibe-omega.vercel.app/",
      },
      {
        title: "🛍️ Casmart - Fashion E-commerce Website",
        image: "https://repository-images.githubusercontent.com/489636246/cda881a2-5456-4646-aac2-63718dc43c40",
        description: "Casmart is a stylish and responsive fashion e-commerce frontend made with HTML, CSS, Bootstrap. It’s perfect for online store layouts..",
        code: "https://github.com/aniketshirsath/casmart_web",
        live: "https://casmart-webpage.vercel.app/",
      },
      {
        title: "🛍️ Casmart - Fashion E-commerce Website",
        image: "https://private-user-images.githubusercontent.com/148868961/453785981-58a60f31-78cd-470d-b8e1-9d803a505ad0.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDk2MjYwMDUsIm5iZiI6MTc0OTYyNTcwNSwicGF0aCI6Ii8xNDg4Njg5NjEvNDUzNzg1OTgxLTU4YTYwZjMxLTc4Y2QtNDcwZC1iOGUxLTlkODAzYTUwNWFkMC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNjExJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDYxMVQwNzA4MjVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0xOGViNWJmMTE0ZWJiMTVhNDExODAwMzM1Zjg5ZDFlOTdjZTdjYWIyNmI1MTFhYjRjZmMxZDZiNmYzZjlkNTM1JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.c9Hvz_-ySGLiDlhA00iJ4NbVWUoNl0fT9XEOX0WiePs",
        description: "Casmart is a stylish and responsive fashion e-commerce frontend made with HTML, CSS, Bootstrap. It’s perfect for online store layouts..",
        code: "https://github.com/aniketshirsath/casmart_web",
        live: "https://casmart-webpage.vercel.app/",
      }
    ];

    setProjects(fetchedProjects);
  }, []);

  return (
    <section className="projects-section container" id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card container" key={index}>
            <img src={project.image} alt={project.title} className="project-img img-fluid" />
            <div className="project-info">
              <h4>{project.title}</h4>
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

