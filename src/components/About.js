import React from "react";

function About() {
  function calculateAge(birthDate) {
    const today = new Date();
    const dob = new Date(birthDate);

    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      age--;
    }

    return age;
  }

  const birthDate = "1999-09-21";

  const age = calculateAge(birthDate);

  return (
    <div>
      <h2 className="heading" style={{ color: "#002057" }}>
        <i className="fas fa-user-alt"></i> About <span>Me</span>
      </h2>

      <div className="row">
        <div className="image">
          <img
            draggable="false"
            className="tilt"
            src="../assets/images/venkatesh.jpg"
            alt="Venkatesh Musku"
            // style={{ filter: "grayscale(100%)" }}
          />

          <div className="resumebtn">
            <a
              href="https://www.linkedin.com/in/venkateshwarlu-musku-179a9a247/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              <span>LinkedIn</span>
              <i className="fas fa-chevron-right"></i>
            </a>
          </div>
        </div>

        <div className="content">
          <h3 style={{ color: "#002057" }}>
            Venkateshwarlu<span style={{ color: "#ed2129" }}> Musku</span>
          </h3>
          <span className="tag">Software Developer</span>

          <p>An overall experience of 1.5 years in software development, including 9 months 
            as a Full Stack Web Development (MERN) Teaching Assistant, 
            providing mentorship and technical guidance.</p>
          <p>
          Completed a Full Stack Web Development (MERN) course through Coding Ninjas' 
          online platform and worked as a Teaching Assistant, specializing in MongoDB, 
          Express, React.js, and Node.js. Gained in-depth knowledge of the MERN stack while 
          providing career guidance and mentorship.
          </p>

      
          <p>
            Later transitioned to a Full Stack Developer role at SR Edu
            Technologies Pvt Ltd for 1.5 year, where I developed 3 major
            applications: CRM, LMS, and School KYC systems, using React,
            Node.js, and PHP Laravel.
          </p>
          <p>
            Proficient in HTML, CSS, JavaScript, ReactJs, Node.js, MySQL, PHP,
            Laravel, Git, and Scrum methodologies. Experienced in leading teams
            and managing end-to-end application development projects.
          </p>

          <div className="box-container">
            <div className="box">
              <p>
                <span> Age: </span> {age} years
              </p>
              <p>
                <span> Phone : </span> +91 8978451860
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
