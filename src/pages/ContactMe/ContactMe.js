import SandraFindingBug from "../../assets/sandra_finding_bug.jpg";
import React from "react";
import Header from "../../components/Header/Header";
import { Email, Twitter } from "@mui/icons-material";
import { Box, Typography, Link, Grid } from "@mui/material";

const ContactMe = () => {
  return (
    <>
      <Header />
      <div className="section contact-me-section">
        <Grid container spacing={4} className="contact-me-container">
          <Grid item xs={12} md={6} className="contact-me-image-container">
            <img 
              className="contact-me-pic-new" 
              src={SandraFindingBug}
              alt={'Sandra kneeling at plant and searching it for bugs'} 
            />
          </Grid>
          <Grid item xs={12} md={6} className="contact-me-content">
            <Typography variant="h3" className="section-header contact-header">
              Contact Me
            </Typography>
            <Typography variant="body1" className="contact-intro">
              I’m always happy to connect! Whether you have questions about my research, 
              potential collaborations, or just want to say hi, feel free to reach out.
            </Typography>
            
            <Box className="contact-methods">
              <Box className="contact-method-item">
                <Email className="contact-icon" />
                <Box>
                  <Typography variant="subtitle2" className="contact-label">Email</Typography>
                  <Link href="mailto:sandra.mendiola25@uga.edu" className="contact-link">
                    sandra.mendiola25@uga.edu
                  </Link>
                </Box>
              </Box>

              <Box className="contact-method-item">
                <Twitter className="contact-icon" />
                <Box>
                  <Typography variant="subtitle2" className="contact-label">Twitter / X</Typography>
                  <Link href="https://twitter.com/SandraYMendiola" target="_blank" rel="noopener" className="contact-link">
                    @SandraYMendiola
                  </Link>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default ContactMe;