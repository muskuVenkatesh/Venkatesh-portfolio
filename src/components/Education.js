import React, { useState } from "react";

function Education() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to handle click on an image and show it in full screen
  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  // Function to close the modal or full screen view
  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <h1 className="heading">
        <i className="fas fa-graduation-cap"></i> My <span>Certifications</span>
      </h1>

      <div className="cert" style={{ fontFamily: "Nunito, sans-serif" }}>
        <div className="row">
          <div className="column">
            <img
              onClick={() => handleImageClick("../assets/images/python Certificate.jpg")}
              style={{ paddingBottom: 20 }}
              width="90%"
              height="90%"
              src="../assets/images/python Certificate.jpg"
              alt="python Certificate"
            />
            <h2>Python Certification</h2>
          </div>
          <div className="column">
            <img
              onClick={() => handleImageClick("../assets/images/DSA Certificate.jpg")}
              style={{ paddingBottom: 20 }}
              width="90%"
              height="90%"
              src="../assets/images/DSA Certificate.jpg"
              alt="DSA Certificate"
            />
            <h2>DSA Certification</h2>
          </div>
          <div className="column">
            <img
              onClick={() =>
                handleImageClick("../assets/images/Frontend Certificate.jpg")
              }
              style={{ paddingBottom: 20 }}
              width="90%"
              height="90%"
              src="../assets/images/Frontend Certificate.jpg"
              alt="Frontend Certificate"
            />
            <h2>FrontEnd Certification</h2>
          </div>
          <div className="column">
            <img
              onClick={() => handleImageClick("../assets/images/Nodejs Certificate.jpg")}
              style={{ paddingBottom: 20 }}
              width="80%"
              height="80%"
              src="../assets/images/Nodejs Certificate.jpg"
              alt="Nodejs Certificate"
            />
            <h2>Backend Certification</h2>
          </div>
        </div>

        <div className="row">
          <div className="column">
            <img
              onClick={() => handleImageClick("../assets/images/Python Internship Certificate_pages-to-jpg-0001.jpg")}
              style={{ paddingBottom: 0 }}
              width="50%"
              height="50%"
              src="../assets/images/Python Internship Certificate_pages-to-jpg-0001.jpg"
              alt="Python Internship Certification"
            />
            <h2>Python DSA Internship Certification</h2>
          </div>
          <div className="column">
            <img
              onClick={() => handleImageClick("../assets/images/FullStack InternshipCertificate_page-0001.jpg")}
              style={{ paddingBottom: 20}}
              width="50%"
              height="50%"
              src="../assets/images/FullStack InternshipCertificate_page-0001.jpg"
              alt="FullStack Web Development Certificate"
            />
            <h2>FullStack Web Development Internship Certification</h2>
          </div>
        </div>
      </div>

      {/* Modal or Lightbox */}
      {selectedImage && (
        <div className="modal" onClick={handleCloseModal}>
          <span className="close">&times;</span>
          <img
            className="modal-content"
            src={selectedImage}
            alt="Full Screen"
          />
        </div>
      )}
    </>
  );
}

export default Education;
