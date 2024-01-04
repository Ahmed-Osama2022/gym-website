import React from 'react';

const Button = (props) => {
  return (
    <>
      <button type={props} className={`btn  rounded-3 my-3 py-2 px-4 ${props.className}`}>
        {props.children}
      </button>
    </>
  );
};

export default Button;
