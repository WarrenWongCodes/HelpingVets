import React from 'react';
import Blurb from './blurb/Blurb.jsx';
import ProgramsSection from './programsSection/ProgramsSection.jsx';

// section 1 to 4 goes here
export default function Home() {
  return (
    <div id="home">
      <Blurb />
      <ProgramsSection />
    </div>
  );
}
