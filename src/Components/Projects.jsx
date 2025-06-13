import React, { useState, useEffect } from "react";
import "../Styles/Projects.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchedProjects = [
      {
        title: "🎨 Paul Smith - Frontend Clone Website",
        image: "https://private-user-images.githubusercontent.com/148868961/454838643-bad9ea47-a1ac-42a7-9786-4e3a07b75468.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDk4MTQ0NjEsIm5iZiI6MTc0OTgxNDE2MSwicGF0aCI6Ii8xNDg4Njg5NjEvNDU0ODM4NjQzLWJhZDllYTQ3LWExYWMtNDJhNy05Nzg2LTRlM2EwN2I3NTQ2OC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNjEzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDYxM1QxMTI5MjFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1hMmUyZGI0NmU4NWJkNzliZWYxZjEyMzZhNzlkY2U0YmVhYTdiNDkzMmVlZTdjNmQwYzU5MGQyMjFlOTFkYmZmJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.SiheV59i7E6r9gRw9vGXtTvYHEociZ9kTc1GUhDlTZo",
        description: "Welcome to the Paul Smith Clone – a modern, responsive frontend website inspired by the Paul Smith e-commerce design. Built with clean layouts and smooth navigation for a user-friendly shopping experience.",
        code: "https://github.com/aniketshirsath/PaulSmith_Fe",
        live: "https://paul-smith-fe.vercel.app/",
      },
      {
        title: "🎬 CineVibe - Movie Booking Website UI",
        image: "https://private-user-images.githubusercontent.com/148868961/454013405-a0d25add-378a-42b1-a20f-3fe7bbe4552c.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDk4MDg2MTksIm5iZiI6MTc0OTgwODMxOSwicGF0aCI6Ii8xNDg4Njg5NjEvNDU0MDEzNDA1LWEwZDI1YWRkLTM3OGEtNDJiMS1hMjBmLTNmZTdiYmU0NTUyYy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNjEzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDYxM1QwOTUxNTlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0xYjUyNWE0MmI5ZmI3YjllOGI0N2FjMTA5OTU0NWEyZTY1MWI3OTA1NGRiOGY0N2EzYjIzNjU4ODUyNWNjYjQ2JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.spBQQrPtsyVp3Wfnidq8Bygdpcd-I-5D6JhdG7VQYas",
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

