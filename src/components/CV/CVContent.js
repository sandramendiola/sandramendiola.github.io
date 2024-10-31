import React, {useState} from "react";
import {Accordion, AccordionDetails, AccordionSummary} from "@mui/material";
import {ExpandMore} from "@mui/icons-material";
import Button from "@mui/material/Button";

const CVContent = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="section cv-content">
      <div className="section-header">CV</div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMore/>}
          aria-controls="panel1-content"
          id="panel1-header"
          className="accordion-header"
        >
          Education
        </AccordionSummary>
        <AccordionDetails>
          <div className="accordion-details">
            <p><b>University of Georgia • Athens, GA</b></p>
            <p>NSF Postdoctoral Research Fellowship in Biology, 2024</p>
            <p><b>Emory University • Atlanta, GA</b></p>
            <p>PhD in Population Biology, Ecology, and Evolution, 2023</p>
            <p><b>Yale University • New Haven, CT</b></p>
            <p>BS in Ecology and Evolutionary Biology with Distinction, 2016</p>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMore/>}
          aria-controls="panel2-content"
          id="panel2-header"
          className="accordion-header"
        >
          Fellowships and Awards
        </AccordionSummary>
        <AccordionDetails>
          <div className="accordion-details">
            <p>NSF Postdoctoral Fellowship in Biology, 2024</p>
            <p>Kharen Fulton Diversity Graduate Award, 2022</p>
            <p>Entomological Society of America Rising Star Award, 2022</p>
            <p>USDA NIFA Predoctoral Fellow, 2021</p>
            <p>Graduate Program in Biology Academic and Professional Achievement Award, 2021</p>
            <p>Infectious Disease Across Scales Training Program Award of Distinction, 2020</p>
            <p>Bouchet Graduate Honor Society, inducted April 2020</p>
            <p>1915 Scholars Graduate Mentor of the Year, 2017</p>
            <p>NSF, Graduate Research Fellowship Program (GRFP), 2017</p>
            <p>Initiative for Maximizing Student Development (IMSD) Fellowship at Emory University, 2017</p>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMore/>}
          aria-controls="panel3-content"
          id="panel3-header"
          className="accordion-header"
        >
          Teaching
        </AccordionSummary>
        <AccordionDetails>
          <div className="accordion-details">
            <p><b>Emory University</b></p>
            <p className="underline">Teaching Assistant</p>
            <p>[BIOL499R] Undergraduate Research <i>Fall 2021, Spring 2022, Fall 2022</i></p>
            <p>[BIOL349] Ecology of Invasions <i>Summer 2018</i></p>
            <p>[BIOL386] Plants and Society <i>Summer 2018</i></p>
            <p className="underline">Instructor</p>
            <p>[BIOL120] Concepts in Biology Lab Course <i>Spring 2020</i></p>
            <p>Introduction to Research in the Biological, Biomedical, and Natural Sciences <i>Summers 2020 & 2021</i>
            </p>
          </div>
        </AccordionDetails>
      </Accordion>
      <Button variant="contained"
              href="https://drive.google.com/file/d/1aKr0HQhIOqsLxR25BNOv9HBWgjezs_dW/view?usp=sharing"
              className="full-cv-button"
              sx={{
                width: 200,
                height: 50,
                marginTop: 5,
                backgroundColor: "white",
                color: "black",
                border: "1px solid black",
                boxShadow: "none"
              }}
      >
        Full CV
      </Button>
    </div>
  )
}

export default CVContent;