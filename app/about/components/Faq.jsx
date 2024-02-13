"use client"
import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqData = [
  {
    question: 'Q1- What is MAKEATHON?',
    answer:
      'MAKEATHON is one of the most premiere Hackathons in India, where 1500+ students of different skill levels come together from around India to experiment and create unique software or hardware projects from scratch. This 24 hour hackathon is filled with development, mentoring, fun and a night worth remembering.',
  },
  {
    question: 'Q2- Can beginners participate in MAKEATHON?',
    answer:
      'Yes. Participants for MAKEATHON are mostly first and second-year students. If a student is willing to learn and bring creative ideas to the table, then MAKEATHON is just the place for them!',
  },
  {
    question: 'Q3- Is coding necessary for MAKEATHON?',
    answer:
      'No. It is a myth that coding is necessary for hackathons. MAKEATHON acts as a platform for similar minds to come together and execute new ideas.',
  },
  {
    question: 'Q4- What is the registration fee for MAKEATHON?',
    answer:
      'Participation in MAKEATHON is free. There are no registration or participation fees.',
  },
  {
    question: 'Q5- Is a team required for participation?',
    answer:
      'Yes. A team shall have a minimum of 3 members to a maximum of 5 members.',
  },
  {
    question: 'Q6- What is mode of hack?',
    answer:
      'MAKEATHON will be a hybrid event i.e. it will be conducted both offline and online virtually..',
  },
  {
    question: 'Q7- What if I have never been to a hackeathon before?',
    answer:
      'MAKEATHON welcomes students of all skill levels. We will have talks, mentors, and workshops to help you with your project. Just be eager to learn and excited to meet lots of awesome people.',
  },
  {
    question: 'Q8- Can NON-TIET dtudents participate in Makeathon?',
    answer:
      'Yes. MAKEATHON6 is open to students from other institutions as well. And they can join us in the campus for offline hackathon as well..',
  },
  {
    question: 'Q9- How can we chose our teammates?',
    answer:
      'There is no restriction on the formation of the team. Participants can make teams irrespective of their institutions.',
  },
  {
    question: 'Q10- What kind of workshops and activities be there?',
    answer:
      'Previously, We have  held workshops and talks for a range of skills levels from beginner to advanced intro to React. Other workshops also explore various programming tools such as APIs, databases, and platforms. Whether it is for relaxation or health, novelty or competition, our team has something exciting prepared for you to enjoy!',
  },
   {
    question: 'Q11- What is judging criteria?',
    answer:
      'The judging criteria involve concept, design, development, and presentation. A panel of judges would score the teams based on the criteria above, which would further determine the ranking of each team.',
  },
  {
    question: 'Q12- Will there be refreshments?',
    answer:
      'Yes, food and beverages will be provided throughout the event.',
  },
  {
    question: 'Q13- Will there be any bootcamp?',
    answer:
      'Yes! A week-long MLSC BootCamp marks the beginning of the MAKEATHON6 starting on 19th February. You must register for bootcamp separately.',
  },
  {
    question: 'Q14- Will there be prizes?',
    answer:
      'Yes! Best performing participants will win exciting prizes. More information on the prizes is available at MAKEATHON6 official website. and MLSC social media handles.',
  },
  {
    question: 'Q15- Will there be mentors?',
    answer:
      'Yes! You can interact with the mentors regarding any problem you might face during the hacking period.',
  },
  {
    question: 'Q16- Do all team members need to be present in person?',
    answer:
      'Yes, every team member should be present during various checkpoints. Since MAKEATHON6 is a HYBRID hackathon, every team member must be present in person if the team is offline or on discord channel if team is participating in online mode.',
  },
  {
    question: 'Q17- Will there be wireless net available?',
    answer:
      'Yes! Wi-Fi will be provided at the venue for all offline mode participants.',
  },
  {
    question: 'Q18- Who will be the part of judging panel?',
    answer:
      'The judging panel composition will be announced closer to the date of the hackathon.',
  }

];

export default function FAQ() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div style={{ width: '90%', margin: '0 auto' }}>
      <h2>Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <Accordion 
          key={index} 
          expanded={expanded === `panel${index + 1}`}
          onChange={handleChange(`panel${index + 1}`)}
          sx={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.1)', 
            border: '2px solid rgba(255, 255, 255, 0.8)',
            marginBottom: '10px',
            borderRadius: '10px'
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: '#ffffff' }} />}
            aria-controls={`panel${index + 1}a-content`}
            id={`panel${index + 1}a-header`}
            sx={{ color: '#ffffff', padding: '1em 0' }}
          >
            <Typography sx={{ fontSize: '18px', padding: '0 1em' }}>{item.question}</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ color: '#ffffff', padding: '1em 2em' }}>
            <Typography sx={{ fontSize: '16px' }}>{item.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}