import Adults from "../../assets/adults.png";
import SandraFindingBug from "../../assets/sandra_finding_bug.jpg";
import React from "react";
import Header from "../../components/Header/Header";

const ContactMe = () => {
  return (
    <>
      <Header/>
      <img src={Adults} alt={'Adult squash bug banner'} height={300}/>
      <div className="section cv-content">
        <div className="section-header">Contact Me</div>
        <div className="contact-me">
          <img src={SandraFindingBug} alt={'Sandra kneeling at plant and searching it for bugs'} height={500}
               width={600}/>
          <div className="contact-me-details">
            <h1>Get in touch:</h1>
            <p><a href="mailto:sandra.mendiola25@uga.edu">sandra.mendiola25@uga.edu</a></p>
            <p><a href="https://twitter.com/SandraYMendiola">Twitter</a></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactMe;