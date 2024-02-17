
"use client"
import React from 'react'
import { useState } from 'react'
import dynamic from 'next/dynamic';


//lazy loading for GLB file as Next doesn't have SSR for GLB/OBJ/GLTF files 
// !important
const DynamicCrownComponent = dynamic(() => import('../../components/Loader/Crown'), {
  ssr: false, // Disable server-side rendering
});

export default function Loader(props) {

  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 5000);

    
  return (
    
    <>

    {loading ? (
        <DynamicCrownComponent />
        ) : (
        props.children
        )}
      {/* <DynamicClientComponent /> */}
      
    </>
  );
}