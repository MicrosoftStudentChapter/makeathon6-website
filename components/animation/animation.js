"use client"
import React, { useEffect, useState } from 'react';
import styles from './animation.module.css'; 

const HologramThrone = () => {
  const [characters, setCharacters] = useState([]);


const getRandomCharacter = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  return characters.charAt(Math.floor(Math.random() * characters.length));
};

const calculatePositions = (count) => {
  const positions = [];
  for (let i = 0; i < count; i++) {
   
    const x = 10;
    const y = 500;
    positions.push({ x, y });
  }
  return positions;
};
useEffect(() => {
    const characterCount = 100; 
    const interval = 200; 
    const widthSegments = 50; 
  
    const addCharacter = () => {
      const segmentWidth = 100 / widthSegments;
      const segment = Math.floor(Math.random() * widthSegments);
  
      setCharacters(prevChars => [
       
        ...prevChars.slice(-characterCount),

        {
          char: getRandomCharacter(),
          style: {
            left: `${segment * segmentWidth + segmentWidth / 2}%`,
            animationDuration: `${Math.random() * 3 + 2}s`,
            animationDelay: '0s',
            transform: 'translateY(100vh)',
          }
        }
      ]);
    };
  
    const intervalId = setInterval(addCharacter, interval);
  
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className={styles.hologramThrone}>
      {characters.map((item, index) => (
        <span key={index} className={styles.character} style={item.style}>
          {item.char}
        </span>
      ))}
    </div>
  );
      }
export default HologramThrone;