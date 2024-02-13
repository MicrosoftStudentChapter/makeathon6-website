"use client"
import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqData = [
  {
    question: 'Q1- Do I need to have coding experience to participate?',
    answer:
      'While coding experience can be beneficial, it is not a prerequisite for participation. Makethon welcomes participants from diverse backgrounds, including design, business, and engineering.',
  },
  {
    question: 'Q2- How can I stay updated on Makethon and related announcements?',
    answer:
      'Stay tuned to the official MLSC social media channels and website for updates, announcements, and registration details for Makethon.',
  },
  {
    question: 'Q3- Who can participate in Makethon?',
    answer:
      'Makethon is open to all students of Thapar Institute of Engineering and Technology, regardless of their academic background or experience level in technology.',
  },
  {
    question: 'Q4- What is the duration of Makethon?',
    answer:
      'Participants will have a designated time period of 24 hours to work on their projects and present their solutions at the end of the event.',
  },
  // {
  //   question: 'Q5- Why do we use it?',
  //   answer:
  //     'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  // },

];

export default function FAQ() {
  return (
    <div style={{ width: '90%', margin: '0 auto' }}>
      <div style={{ padding: '10 1em' }}>{faqData.map((item, index) => (
        <Accordion
          key={index}
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            border: '2px solid rgba(255, 255, 255, 0.8)',
            marginBottom: '10px',
            borderRadius: '10px'
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: '#ffffff', padding: '0 1em' }} />}
            aria-controls={`panel${index + 1}a-content`}
            id={`panel${index + 1}a-header`}
            sx={{ color: '#ffffff', padding: '1em 0' }}
          >
            <Typography sx={{ fontSize: '18px', padding: '0 1em' }}>{item.question}</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ color: '#ffffff', padding: '1em 2em' }}>
            <Typography sx={{ fontSize: '16px', padding: '0 1em' }}>{item.answer}</Typography>
          </AccordionDetails >
        </Accordion>
      ))}
      </div>
    </div>
  );
}