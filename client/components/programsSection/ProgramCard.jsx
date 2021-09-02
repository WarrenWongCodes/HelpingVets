import React from 'react';
import breakLine from '../../assets/break-line.png';
import './programCard.css';

export default function ProgramCard() {
  return (
    <div>
      <div className="card mb-3 programCards">
        <img src={breakLine} className="card-img-top" alt="Break Line Tech" />
        <div className="card-body">
          <h5 className="card-title">BreakLine Tech</h5>
          <p className="card-text">
            BreakLine provides education and coaching for exceptional,
            high-performing veterans who are interested in pivoting into the
            tech industry. Our virtual month-long program is designed to help
            you successfully land a role in tech and build your professional
            network.
          </p>
          <p className="card-text">
            <button type="button" className="btn btn-primary">
              <a
                className="buttonStyle"
                href="https://breakline.org/"
                target="_blank"
              >
                Learn More
              </a>
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
