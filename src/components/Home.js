import React, { useEffect } from "react";
import Typed from "typed.js";

function Home() {
  useEffect(() => {
    const typed = new Typed(".typing-text", {
      strings: [
        "Frontend Developer",
        "Backend Developer",
        "Full Stack Developer",
      ],
      loop: true,
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 500,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div id="particles-js"></div>

      <div className="content">
        <h5>
          Hello!
          <br /> I&apos;m Venkateshwarlu <span>Musku</span>
        </h5>
        <p>
          I am <span className="typing-text"></span>
        </p>
        <a href="#about" className="btn">
          <span>About Me</span>
          <i className="fas fa-arrow-circle-down"></i>
        </a>
        <div className="socials">
          <ul className="social-icons">
            <li>
              <a
                className="linkedin"
                aria-label="LinkedIn"
                href="https://www.linkedin.com/in/venkateshwarlu-musku-179a9a247/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                className="github"
                aria-label="GitHub"
                href="https://github.com/muskuVenkatesh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
            </li>
            {/* <li>
              <a
                className="twitter"
                aria-label="Twitter"
                href="https://x.com/venkatesh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </li> */}
            {/* <li>
              <a
                className="telegram"
                aria-label="Facebook"
                href="https://www.facebook.com/venkatesh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook"></i>
              </a>
            </li> */}
            <li>
              <a
                className="instagram"
                aria-label="Instagram"
                href="https://www.instagram.com/_nobody__6ix/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="image">
        <img
          draggable="false"
          className="tilt"
          src="../assets/images/image1.png"
          alt="Kesav Kummari"
        />
      </div>
    </>
  );
}

export default Home;
