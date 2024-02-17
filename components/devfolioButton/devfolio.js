"use client"

import React, { useEffect } from 'react';

// import Script from 'next/script';

export default function DevfolioButton() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://apply.devfolio.co/v2/sdk.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        }
    }, []);

    return (
        <>
        {/* <Script src="https://apply.devfolio.co/v2/sdk.js" async={true} defer={true} /> */}
        <div 
            className="apply-button" 
            data-hackathon-slug="duhacks3" 
            data-button-theme="light"
            style={{height: "44px", width: "312px"}}
        ></div>
        </>
    );
}