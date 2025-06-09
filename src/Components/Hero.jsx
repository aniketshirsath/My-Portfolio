import React, { useState, useEffect } from 'react';
import '../Styles/Hero.css';

const Hero = () => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    role: '',
    image: '',
  });

  useEffect(() => {
    // Simulate fetching data (API ke jagah static object abhi ke liye)
    const data = {
      name: 'ANIKET SHIRSATH',
      role: 'Frontend Developer',
      image: 'https://img.freepik.com/premium-vector/male-face-avatar-icon-set-flat-design-social-media-profiles_1281173-3806.jpg?semt=ais_hybrid&w=730'
    };

    setUserInfo(data);
  }, []);

  return (
    <section className="hero d-flex align-items-center">
      <div className="container d-flex flex-column flex-lg-row justify-content-between align-items-center">
        <div className="text-section mb-4 mb-lg-0 text-center text-lg-start">
          <h1>
            Hi, <span role="img" aria-label="wave">👋</span><br />
            My Name is <br />
            <span className="gradient-text">{userInfo.name}</span><br />
            {userInfo.role}
          </h1>
        </div>
        <div className="border-gradient">
          <img
            src={userInfo.image}
            alt="profile"
            className="rounded-circle img-fluid"
            style={{ width: "170px", height: "170px", objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
