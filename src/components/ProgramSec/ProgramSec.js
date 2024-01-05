import React from 'react';
import Card from '../UI/Card';
import './ProgramSec.css';
// import
const ProgramSec = (props) => {
  const myProgramsData = [
    {
      id: Math.random().toString(),
      title: 'Strength training',
      description: ' Our trainers will design that a progressive workout plans that proper achieve gain strength',
    },
    {
      id: Math.random().toString(),
      title: 'Basic Yoga',
      description: 'This program combines yoga and cardio & strength training to help lose weight and fats',
    },
    {
      id: Math.random().toString(),
      title: 'Body building',
      description: 'For those who are looking for increase the strength & lean muscle',
      className: 'bg-danger active-program',
      paragraphClassName: 'mt-3 px-3',
    },
    {
      id: Math.random().toString(),
      title: 'Weight loss',
      description: 'Our weight loss program are designed to help you make the suitable lifestyle changes',
    },
  ];
  return (
    <>
      <section id="program" className="">
        <div className="container-md ">
          {/* The first grid */}
          <div className="row justify-content-between  px-3">
            <div className="text-center text-md-start col-md-6">
              <h1 className="text-capitalize fw-bold">The best programs we offers for you</h1>
            </div>
            <div className="text-center text-md-start col-md-6">
              <p className="lead text-muted px-3">
                We offer a wide range of comprehensive fitness programs designed to help the individuals of all fitness
                levels, Our aim to help you achieve specific goals & maximize results.
              </p>
            </div>
          </div>

          {/* The second grid */}
          <div className="row mt-5  ">
            {myProgramsData.map((program) => {
              return (
                <Card
                  key={program.id}
                  className={program.className || ''}
                  title={program.title}
                  description={program.description}
                  isDarkHandler={props.darkModeHandler}
                  paragraphClassName={program.paragraphClassName}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProgramSec;
