"use client"
import React, { Suspense } from 'react';
import { useState, useEffect } from 'react';
import styles from './layout.module.css';

import Crown from '../Crown/crown';

const Layout = ({ children }) => {
  const [showContent, setShowContent] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1300); 
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className={styles.loading}>
      {showContent ? (
        <Suspense fallback={<LoadingFallback />}>
          {children}
        </Suspense>
      ) : (
        <Crown />
      )}
    </div>
  );
};

const LoadingFallback = () => (
  // <p>Loading...</p>
  <Crown/>
);

export default Layout;

  