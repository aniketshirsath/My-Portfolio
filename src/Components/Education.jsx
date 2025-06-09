import React, { useState, useEffect } from "react";
import { FaGraduationCap } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Education.css";

const Education = () => {
  const [educationList, setEducationList] = useState([]);

  useEffect(() => {
    const data = [
      {
        year: "2024 - 2025",
        course: "Frontend Development",
        institute: "Red & White Institute, Surat",
        description: "Learned HTML, CSS, JavaScript, ReactJS, Bootstrap, GitHub, APIs.",
        side: "left",
      },
      {
        year: "2022 - 2023",
        course: "12th (HSC)",
        institute: "Sunrise Vidyalaya, Surat",
        description: "Completed Higher Secondary Education (Commerce Stream).",
        side: "right",
      },
    ];

    setEducationList(data);
  }, []);

  return (
    <section className="education-section container my-5">
      <h2 className="education-title mb-5 text-center">Education</h2>

      <div className="timeline">
        {educationList.map((item, index) => (
          <div className={`timeline-item ${item.side}`} key={index}>
            <div className="timeline-content">
              <div className="icon"><FaGraduationCap /></div>
              <div className="timeline-date">{item.year}</div>
              <h3>{item.course}</h3>
              <h4>{item.institute}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
