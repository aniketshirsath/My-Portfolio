import React, { useState, useEffect } from "react";
import "../Styles/Projects.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchedProjects = [
      {
        title: "Hevenly Heven",
        image: "https://your-screenshot-link-2.png",
        description: "Hevenly Heven Ecommerce Website for selling products online. Built with modern frontend tools and components.",
        code: "https://github.com/your-username/hevenly",
        live: "https://hevenly-heven.vercel.app/",
      },
      {
        title: "🎬 CineVibe - Movie Booking Website UI",
        image: "https://private-user-images.githubusercontent.com/148868961/454013405-a0d25add-378a-42b1-a20f-3fe7bbe4552c.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDk2NjA5NzUsIm5iZiI6MTc0OTY2MDY3NSwicGF0aCI6Ii8xNDg4Njg5NjEvNDU0MDEzNDA1LWEwZDI1YWRkLTM3OGEtNDJiMS1hMjBmLTNmZTdiYmU0NTUyYy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNjExJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDYxMVQxNjUxMTVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT02OWU2MjljMWM3YWZiODk4NThjNWM4OTA3ODY0YmY5MDM0ZmVhODMxMTliODI5ZTI2ZmViMGM1ZjU5NmM2MDE0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.jlvb01prnUencBJj5dFwyoDUT9RJsBBN-FQtlDoWeqI",
        description: "CineVibe is a modern movie booking website frontend built with HTML, CSS, and Media Queries. It features a clean UI inspired by platforms like BookMyShow and showcases responsive design skills.",
        code: "https://github.com/aniketshirsath/CineVibe",
        live: "https://cine-vibe-omega.vercel.app/",
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
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-img img-fluid" />
            <div className="project-info">
              <h3>{project.title}</h3>
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

