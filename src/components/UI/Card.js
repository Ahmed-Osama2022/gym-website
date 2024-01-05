import React from 'react';
import './Card.css';
const Card = (props) => {
  return (
    <>
      <div
        className={`col-md-4 col-lg-3 program-card  text-center text-md-start my-3  ${
          props.isDarkHandler ? 'my-shadow-dark' : 'my-shadow-light'
        } ${props.className}`}
      >
        <div className="">
          <i className="fa-solid fa-dumbbell my-3 fs-4 "></i>
          <h2 className="fw-bold text-capitalize px-3 ">{props.title}</h2>
          <p className={` ${props.paragraphClassName || 'text-muted mt-3 px-3'}`}>{props.description}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
