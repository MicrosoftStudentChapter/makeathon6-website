import React from 'react'
import Loader from './homepage/loader';
import HomePage from './homepage/home';
import HologramThrone from '@/components/animation/animation';

export default function Home() {
  return (
    <>
      <Loader>
        <HomePage />
        <HologramThrone />
      </Loader>
    </>
  );
}