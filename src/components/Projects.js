import React from "react";

function Projects() {
  return (
    <>
      {/* <h2 className="heading" style={{ color: "#002057" }}>
        <i className="fas fa-briefcase"></i> Projects
      </h2>

      <div className="timeline">
        <div className="container left">
          <div className="content">
            <div className="tag">
              <h2>Coding Ninjas</h2>
            </div>
            <div className="desc">
              <h3>Python DSA Teaching Assistant(TA)</h3>
              <p> Dec 2022 - May 2023</p>
            </div>
          </div>
        </div>
        <div className="container right">
          <div className="content">
            <div className="tag">
              <h2>Coding Ninjas</h2>
            </div>
            <div className="desc">
              <h3>FullStack Web Development(MERN) Teaching Assistant(TA) </h3>
              <p>July 2023 - Nov 2023</p>
            </div>
          </div>
        </div>

    

        <div className="container left">
          <div className="content">
            <div className="tag">
              <h2>SR Edu Technologies Pvt Ltd</h2>
            </div>
            <div className="desc">
              <h3>Software Developer (Full Stack)</h3>
              <p>Nov 2023 - Jan 2025</p>
            </div>
            <div className='desc'>
            <ul>
            <li>Developed web applications using React.js, Laravel, Nodejs ,Express, MongoDB, MySql, and PostgreSQL</li>
            
          </ul>
          </div>
          </div>
        </div>
      </div> */}

<h2 className="heading" style={{ color: "#002057" }}>
        <i className="fas fa-briefcase"></i> Projects
      </h2>

      <div className="timeline">
        {/* Experience Section */}
        {/* <div className="container left">
          <div className="content">
            <div className="tag">
              <h2>Coding Ninjas</h2>
            </div>
            <div className="desc">
              <h3>Python DSA Teaching Assistant (TA)</h3>
              <p>Dec 2022 - May 2023</p>
            </div>
          </div>
        </div> */}
        {/* <div className="container right">
          <div className="content">
            <div className="tag">
              <h2>Coding Ninjas</h2>
            </div>
            <div className="desc">
              <h3>FullStack Web Development (MERN) Teaching Assistant (TA)</h3>
              <p>July 2023 - Nov 2023</p>
            </div>
          </div>
        </div> */}
{/* 
        <div className="container left">
          <div className="content">
            <div className="tag">
              <h2>SR Edu Technologies Pvt Ltd</h2>
            </div>
            <div className="desc">
              <h3>Software Developer (Full Stack)</h3>
              <p>Nov 2023 - Jan 2025</p>
            </div>
            <div className="desc">
              <ul>
                <li>Developed web applications using React.js, Laravel, Node.js, Express, MongoDB, MySQL, and PostgreSQL.</li>
              </ul>
            </div>
          </div>
        </div> */}

        {/* Projects Section */}
        {/* <h2 className="heading" style={{ color: "#002057", marginTop: "30px" }}>
          <i className="fas fa-project-diagram"></i> Featured Projects
        </h2> */}

        {/* Project 1: Learning Management System */}
        <div className="container right">
          <div className="content">
            <div className="tag">
              <h2>Learning Management System (LMS)</h2>
            </div>
            <div className="desc">
              <h4>Tech Stack: Node.js, MySQL, React</h4>
              <ul>
                <li>Developed a comprehensive LMS platform for educational institutions.</li>
                <li>Integrated user authentication, role-based access control, and interactive learning modules.</li>
                <li>Implemented RESTful APIs for real-time data interaction and content management.</li>
                <li>Utilized AWS S3 for secure video storage and CRUD operations.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Project 2: KYC Application */}
        <div className="container left">
          <div className="content">
            <div className="tag">
              <h2>KYC (Know Your Customer) Application</h2>
            </div>
            <div className="desc">
              <h4>Tech Stack: PHP, Laravel, React, PostgreSQL</h4>
              <ul>
                <li>Developed a comprehensive School Management System with end-to-end functionalities.</li>
                <li>Built backend with Laravel, frontend with React.js, and used PostgreSQL for high-performance data storage.</li>
                <li>Implemented role-based authentication and permission handling for secure access control.</li>
                <li>Integrated Excel bulk uploads for exam marks, attendance, and student records.</li>
                <li>Added PDF generation for report cards, certificates, and other documents.</li>
                <li>Developed features like timetable scheduling, fee management, and student attendance tracking.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
