import React, { useState, useEffect } from 'react';
import '../Styles/Skills.css';

const initialSkills = [
  { name: "HTML", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "GitHub", img: "https://dev-diwa.vercel.app/static/media/github.3b9e32903aa89111875d.png" },
  { name: "Bootstrap", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { name: "jQuery", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" },
  { name: "Redux", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
];

const Skills = () => {
  const [skills, setSkills] = useState([]);  

  useEffect(() => {
    setTimeout(() => {
      setSkills(initialSkills);
    }, 1000); 
  }, []); 

  return (
    <section className="skills-section py-5 text-white bg-black" id="skills">
      <div className="container text-center">
        <h2 className="section-title mb-3">Skills</h2>
        <p className="mb-5">These are the technologies I've worked with</p>

        {skills.length === 0 ? (
          <p>Loading skills...</p> 
        ) : (
          <div className="row justify-content-center g-4">
            {skills.map((skill, index) => (
              <div className="col-6 col-md-3" key={index}>
                <div className="skill-card p-3 rounded-3">
                  <img
                    src={skill.img}
                    alt={skill.name}
                    className="img-fluid mb-2"
                    style={{ height: "60px" }}
                  />
                  <h6 className="mt-2">{skill.name}</h6>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
