"use client"
import React from 'react';
import styles from "../about.module.css"
import { useState } from 'react';

const faqData = [
  {
    question: 'Q1- What is Lorem Ipsum?',
    answer:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
  },
  {
    question: 'Q2- Why do we use it?',
    answer:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
  {
    question: 'Q3- Why do we use it?',
    answer:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
  {
    question: 'Q4- Why do we use it?',
    answer:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
  {
    question: 'Q5- Why do we use it?',
    answer:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
  
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
