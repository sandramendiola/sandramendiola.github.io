import React from 'react';
import Sandra from '../../assets/Sandra_2025_0Y1A1962.jpg';

const AboutMe = () => {
  return (
    <div className="section about-me">
      <div className="section-text about-me-text">
        <div className="section-header">About Me</div>
        <p>
          I’m currently an NSF Postdoctoral Fellow in the Entomology Department at the University of Georgia. At UGA, I
          am working with Kevin Vogel on investigating the impact of bacterial symbionts on the ability of triatomine
          bugs to harbor trypanosome parasites.
        </p>
        <p>
          I have a PhD in Population Biology, Ecology, and Evolution from Emory University where I worked in the Gerardo
          and Civitello labs. My doctoral work focused on how bacterial symbionts in the genus Caballeronia alter the
          ability of squash bugs (Anasa tristis) to vector Serratia marcescens to cucurbit plants. My work studying the
          tripartite interactions between insect, symbiont, and pathogen spans multiple scales of biological
          organization. I have leveraged methods in transcriptomics, microbial ecology, and mathematical modeling to
          paint a full picture of how Caballeronia symbionts interface with squash bugs and S. marcescens and the
          consequences of those interactions on pathogen transmission at the population-level.
        </p>
        <p>
          More broadly, I am interested in insect-microbe symbioses and their effects on insect vector competence. I am
          a proponent of integrating knowledge across scales of biological organization, from molecular mechanisms to
          modeling, in order to understand how we can leverage insect symbionts for vector control.
        </p>
      </div>
      <img className="about-me-pic" src={Sandra} alt="Sandra Mendiola" />
    </div>
  )
}

export default AboutMe;