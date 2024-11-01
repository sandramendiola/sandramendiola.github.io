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
        <div className="contact-me">
          <img className="contact-me-pic" src={SandraFindingBug}
               alt={'Sandra kneeling at plant and searching it for bugs'}/>
          <div className="contact-me-details">
            <div className="get-in-touch">Get in touch:</div>
            <div className="contact-detail"><a href="mailto:sandra.mendiola25@uga.edu">sandra.mendiola25@uga.edu</a></div>
            <div className="contact-detail"><a href="https://twitter.com/SandraYMendiola">Twitter</a></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactMe;