import React from 'react';
import image from '../../assets/Test.png';
import './programCard.css';

export default function ProgramCard() {
  return (
    <div>
      <div className="card mb-3 programCards">
        <img src={image} className="card-img-top" alt="testImage" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
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
      {/* <div className="card bg-dark text-white">
        <img src={image} className="card-img" alt="..." />
        <div className="card-img-overlay">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p className="card-text">Last updated 3 mins ago</p>
        </div>
      </div> */}
    </div>
  );
}
