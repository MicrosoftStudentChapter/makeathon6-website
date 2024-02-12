"use client"

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';
import styles from '../about.module.css'

export default function Faq() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <div className={styles.acc}>
      <Accordion
        expanded={expanded}
        onChange={handleExpansion}
        // slots={{ transition: Fade }}
        // slotProps={{ transition: { timeout: 400 } }}
        sx={{
          '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
          '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={styles.arrow} />}
          aria-controls="panel1-content"
          className={styles.panel2}
        >
          <Typography className={styles.texts}>Q1- Do I need to have coding experience to participate?</Typography>
        </AccordionSummary>
        <AccordionDetails className={styles.panel1}>
          <Typography className={styles.texts}>
          While coding experience can be beneficial, it is not a prerequisite for participation. Makethon welcomes participants from diverse backgrounds, including design, business, and engineering.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={styles.arrow} />}
          aria-controls="panel2-content"
          className={styles.panel2}
        >
          <Typography className={styles.texts}>Q2- How can I stay updated on Makeathon and related announcements?</Typography>
        </AccordionSummary>
        <AccordionDetails className={styles.panel1}>
          <Typography className={styles.texts}>
          Stay tuned to the official MLSC social media channels and website for updates, announcements, and registration details for Makeathon.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={styles.arrow} />}
          aria-controls="panel2-content"
          className={styles.panel2}
        >
          <Typography className={styles.texts}>Q3- Who can participate in Makeathon?</Typography>
        </AccordionSummary>
        <AccordionDetails className={styles.panel1}>
          <Typography className={styles.texts}>
          Makeathon is open to all students of Thapar Institute of Engineering and Technology, regardless of their academic background or experience level in technology.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={styles.arrow} />}
          aria-controls="panel2-content"
          className={styles.panel2}
        >
          <Typography className={styles.texts}>Q4- What is the duration of Makeathon?</Typography>
        </AccordionSummary>
        <AccordionDetails className={styles.panel1}>
          <Typography className={styles.texts}>
          Participants will have a designated time period of 24 hours to work on their projects and present their solutions at the end of the event.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
