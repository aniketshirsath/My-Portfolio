import React, { useState, useEffect } from 'react';
import '../Styles/Contact.css';
import { FaLinkedinIn, FaGithub, FaEnvelope, FaUser, FaPhone } from 'react-icons/fa';
import { MdPhone } from 'react-icons/md';


function Contact() {
  const [contactItems, setContactItems] = useState([]);

  useEffect(() => {
    // Simulating data fetch or initial setup
    const items = [
      {
        icon: <FaLinkedinIn size={25} />,
        label: 'Linkedin',
        url: 'https://www.linkedin.com/in/aniket-shirsath/',
        bg: '#0077B5',
      },
      {
        icon: <FaGithub size={25} />,
        label: 'Github',
        url: 'https://github.com/aniketshirsath',
        bg: '#333',
      },
      {
        icon: <FaEnvelope size={25} />,
        label: 'Email',
        url: 'mailto:aniketshirsath1411@gmail.com',
        bg: '#6dd5c5',
      },
      {
        icon: <FaUser size={25} />,
        label: 'Resume',
        url: '/AniketResume.pdf',
        bg: '#4b5c6b',
        download: true,
      },
      {
        icon: <MdPhone  size={25} />,
        label: 'Call',
        url: 'tel:+919999999999',
        bg: '#f76c6c',
      },
    ];

    setTimeout(() => {
      setContactItems(items);
    }, 500); 
  }, []);

  return (
    <section id='contact' className="contact-section text-center py-5">
      <hr />
      <h2 className="text-white mb-3 fw-bold">
        Contact <div className="underline mx-auto"></div>
      </h2>

      {contactItems.length === 0 ? (
        <p className="text-white">Loading...</p>
      ) : (
        <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
          {contactItems.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target={item.download ? "_self" : "_blank"}
              rel="noopener noreferrer"
              download={item.download ? true : undefined}
              className="contact-card text-decoration-none text-white d-flex flex-column justify-content-center align-items-center"
              style={{
                backgroundColor: item.bg,
                width: '120px',
                height: '100px',
                borderRadius: '4px',
              }}
            >
              {item.icon}
              <span className="mt-2">{item.label}</span>
            </a>
          ))}
        </div>
      )}
    </section>
  );
}

export default Contact;
