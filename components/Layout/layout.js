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
    }, 800); 
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className={styles.loading}>
      <Crown/>
      {showContent && (
        <Suspense fallback={<LoadingFallback />}>
          {children}
        </Suspense>
      )}
    </div>
  );
};

const LoadingFallback = () => (
  // <p>Loading...</p>
  <Crown />
  );
  
  export default Layout;
  // */
  
  // import styles from './layout.module.css';
  
  // import Crown from '../Crown/crown';
  // const Layout = ({ children }) => {
  //   return (
  //     <div className={styles.loading}>
  //       <Suspense fallback={<LoadingFallback />}>
  //       {/* <Suspense fallback={<Crown />}> */}
  //       {/* <Suspense fallback={<p>Loadinf....</p>}> */}
  //         {children}
  //       </Suspense>
  //     </div>
  //   );
  // };
  
  // const LoadingFallback = () => (
  //   <>
  //     <Crown />
  //   </>
  // );
  
  // export default Layout;
  
  // /*
  // /*
  