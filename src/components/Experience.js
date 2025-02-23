import React from "react";

function Experience() {
  return (
    <>
      <h2 className="heading" style={{ color: "#002057" }}>
        <i className="fas fa-briefcase"></i> Experience
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
      </div>
    </>
  );
}

export default Experience;
