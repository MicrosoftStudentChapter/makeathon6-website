"use client"
import React from 'react';
import styles from "../about.module.css"
import { useState } from 'react';

const faqData = [
  {
    question: 'Q1- Do I need to have coding experience to participate?',
    answer:
      'While coding experience can be beneficial, it is not a prerequisite for participation. Makeathon welcomes participants from diverse backgrounds, including design, business, and engineering.',
  },
  {
    question: 'Q2- How can I stay updated on Makeathon and related announcements?',
    answer:
      'Stay tuned to the official MLSC social media channels and website for updates, announcements, and registration details for Makeathon.',
  },
  {
    question: 'Q3- Who can participate in Makeathon?',
    answer:
      'Makeathon is open to all students of Thapar Institute of Engineering and Technology, regardless of their academic background or experience level in technology.',
  },
  {
    question: 'Q4- What is the duration of Makeathon?',
    answer:
      'Participants will have a designated time period of 24 hours to work on their projects and present their solutions at the end of the event.',
  },
  // {
  //   question: 'Q5- Why do we use it?',
  //   answer:
  //     'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  // },
  
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      {faqData.map((item, index) => (
        <div key={index}>
          <button
            className={`${styles.accordion} ${activeIndex === index ? styles.active : ''}`}
            onClick={() => toggleAccordion(index)}
          >
            {item.question}
          </button>
          <div className={styles.panel} style={{ display: activeIndex === index ? 'block' : 'none' }}>
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
