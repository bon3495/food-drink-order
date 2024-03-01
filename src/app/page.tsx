import React from 'react';

import Hero from '@/components/hero';

import homeImg from '../../public/home.jpg';

const HomePage = () => {
  return (
    <div className="">
      <Hero imgData={homeImg} imgAlt="car factory" title="Home Page" />
    </div>
  );
};

export default HomePage;
