import React from 'react'
import '../Styles/Navbar.css'
const Navbar = () => {
    return (
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#"><span className="text-gradient">ANIKET</span></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navLinks">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navLinks">
          <ul className="navbar-nav ms-auto mb-2 gap-4 mb-lg-0">
            <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            <li className="nav-item"><a className="btn btn-outline-light ms-3" href="/MyResume.pdf" target="_blank">Resume</a></li>
          </ul>
        </div>
      </div>
    </nav>
    )
}

export default Navbar
