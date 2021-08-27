import React from 'react';
import './blurb.css';
import { Link } from 'react-router-dom';

// TODO: Add an image, and background image
export default function Blurb() {
  return (
    <section
      id="blurb"
      className="sectionCenter"
      aria-labelledby="blurbSectionHeading"
    >
      <h1 id="blurbSectionHeading">Helping Veterans Succeed in Tech</h1>
      <p>
        A collection of the best resources for transitioning service members and
        veterans starting a career in tech. From company apprenticeships at
        Google, and Microsoft to networking/mentorship to help you get to where
        you want to be.
      </p>
      <p>The best part? It's all free and open source!</p>
      <button type="button" className="btn btn-primary">
        <Link id="learnMoreBtn" to="/about">
          Learn More
        </Link>
      </button>
    </section>
  );
}
