import React from 'react';
import ProgramsCarousel from './ProgramsCarousel.jsx';
import './programsSection.css';

// TODO: add a carousel with cards (different programs)
// Each card will include:
// - name, learn more button, quality photo (how to store? AWS S3 bucket), small blurb

export default function ProgramsSection() {
  return (
    <section
      id="programs"
      className="sectionCenter"
      aria-labelledby="programSectionHeading"
    >
      <h2 id="programSectionHeading">Transition Programs</h2>
      <ProgramsCarousel />
    </section>
  );
}
