import React from "react";
import "../Styles/About.css";

const About = () => {
  return (
 <section className="about-section" id="about">
  <h2 className="section-title">About <span>Me</span></h2>
  <div className="about-content">
    <p>
      Hi, I'm <span className="highlight">Aniket Shirsath</span>. I make websites as a Frontend Developer. I work hard and stay motivated on my own.
    </p>
    <p>
      I'm new in this field (fresher). I know <span className="highlight">HTML, CSS, Bootstrap, JavaScript, and React</span>. I use these to build websites. I like learning new things in web development.
    </p>
    <p>
      When I'm not making websites, I go to gym. I also enjoy music and traveling to new places.
    </p>
    <p>
      <span className="highlight">Let's connect!</span> You can message me if you want to talk about work or tech.
    </p>
  </div>
</section>

  );
};

export default About;
