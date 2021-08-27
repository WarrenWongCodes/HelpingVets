import React from 'react';
import Blurb from './blurb/Blurb.jsx';
import ProgramsCarousel from './programsCarousel/ProgramsCarousel.jsx';

// section 1 to 4 goes here
export default function Home() {
  return (
    <div id="home">
      <Blurb />
      <ProgramsCarousel />
    </div>
  );
}
