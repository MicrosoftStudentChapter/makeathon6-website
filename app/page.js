import React from 'react'
import Loader from './homepage/loader';
import HomePage from './homepage/home';

export default function Home() {
  return (
    <>
      <Loader>
        <HomePage />
      </Loader>
    </>
  );
}