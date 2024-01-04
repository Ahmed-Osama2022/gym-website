import React from 'react';

const Button = (props) => {
  return (
    <>
      <div className="text-center text-md-start">
        <button type={props.type} className={`btn  btn-danger rounded-3 my-3 py-2 px-4 ${props.className}`}>
          {props.children}
        </button>
      </div>
    </>
  );
};

export default Button;
