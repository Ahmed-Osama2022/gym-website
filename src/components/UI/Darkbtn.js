import React from 'react';
import styles from './Darkbtn.module.css';

const Darkbtn = (props) => {
  //   console.log(props.imgsHandler);
  return (
    <>
      <button
        type="button"
        className={`btn d-flex justify-content-center align-items-center  ${styles['dark-btn']}`}
        onClick={props.onDarkModeHandler}
      >
        <img className="" src={props.imgSrcHandler} alt="dark-light-mode" />
      </button>
    </>
  );
};

export default Darkbtn;
