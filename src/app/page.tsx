import React from 'react';
import homeImg from '../../public/home.jpg';
import Hero from '@/components/hero';

const HomePage = () => {
  return (
    <div className="">
      <Hero imgData={homeImg} imgAlt="car factory" title="Home Page" />
    </div>
  );
};

export default HomePage;
