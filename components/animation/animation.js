"use client"
import React, { useEffect, useState } from 'react';
import styles from './animation.module.css'; 
import { myFont } from '../font/myfont';
const HologramThrone = () => {
  const [characters, setCharacters] = useState([]);


const getRandomCharacter = () => {
  const characters = 'ol';
  return characters.charAt(Math.floor(Math.random() * characters.length));
};

// const calculatePositions = (count) => {
//   const positions = [];
//   for (let i = 0; i < count; i++) {
   
//     const x = 10;
//     const y = 500;
//     positions.push({ x, y });
//   }
//   return positions;
// };
useEffect(() => {
  const interval = 100;
  const maxCharacters = 200;

  const addCharacter = () => {
    setCharacters(prevChars => {
      let newChars = [...prevChars];
      if (newChars.length > maxCharacters) {
        newChars.shift();
      }

      return [
        ...newChars,
        {
          char: getRandomCharacter(),
          style: {
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 3 + 2}s`,
            animationDelay: '0s',
            transform: 'translateY(100vh)',
          },
          key: `char-${Date.now()}-${Math.random()}`,
        }
      ];
    });
  };

  const intervalId = setInterval(addCharacter, interval);

  return () => clearInterval(intervalId);
}, []);


return (
  <div className={styles.hologramThrone}>
    {characters.map(item => (
      <span key={item.key} className={styles.character} style={item.style}>
        {item.char}
      </span>
    ))}
  </div>
);

      }
export default HologramThrone;