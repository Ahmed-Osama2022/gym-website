import React from 'react';
import './AboutUs.css';
import Button from '../UI/Button';
import teamImg from '../../assets/team.jpg';
import trademaleImg from '../../assets/trademale.jpg';

const AboutUs = () => {
  return (
    <>
      <section id="about-us">
        <div className="container-lg ">
          {/* Some text in the start of the section */}
          <div className="text-center ">
            <h1 className="text-capitalize">Who we are</h1>
            <p className="lead text-muted px-3">
              At <span className="lead fw-bold gym-name">MK Gym</span>, our mission is to empower our members to lead
              healthier lives through exercise, education, and support. We believe that fitness is not just a physical
              journey but also a mental and emotional one. With our state-of-the-art facilities, expert trainers, and
              vibrant community, we are here to guide you every step of the way.
            </p>
          </div>

          <div className="row my-5 align-items-center ">
            <div className="col-lg-6 col-md-7">
              <img src={teamImg} className="img-fluid my-pic" alt="" data-name="" />
            </div>
            <div className="col-lg-6 col-md-5">
              <h1 className="py-3 text-capitalize  text-center text-md-start mx-auto">
                Experienced more than 10 years
              </h1>
              <p className="text-muted my-4 text-capitalize  text-center text-md-start mx-auto">
                Our team of certified trainers is passionate about helping individuals reach their full potential. With
                their expert guidance, personalized workout plans, and ongoing support, you can expect a motivating and
                results-driven fitness experience. We believe in a holistic approach to fitness, focusing not only on
                physical training but also on nutrition, mindset, and overall well-being.
              </p>
              <div className="text-center text-md-start">
                <a href="#">
                  <Button type="button" className="btn btn-danger ">
                    Learn More
                  </Button>
                </a>
              </div>
            </div>
          </div>
          {/* Additional information */}
          <div className="row justify-content-center align-items-center">
            <div className="col-md-5">
              <div className="text-center text-md-start ">
                <h1 className="text-capitalize">
                  Why should poeple choose <span className=" fw-bold  gym-name">MK Gym</span>
                </h1>
                <div className="lead text-muted reasons ">
                  <p className="text-capitalize mt-3">
                    <span className="remarks">
                      <i className="fa-solid fa-check"></i>
                    </span>{' '}
                    Personal trainning
                  </p>
                  <p>
                    Our gym is proud to offer a team of highly skilled and certified trainer help achieve your health &
                    fitness goals.
                  </p>
                </div>
                <div className="lead text-muted reasons ">
                  <p className="text-capitalize">
                    <span className="remarks">
                      <i className="fa-solid fa-dumbbell"></i>
                    </span>{' '}
                    Expert trainer
                  </p>
                  <p>Our personal trainers can help you create a personalized fitness plan and track your progress.</p>
                </div>
                <div className="lead text-muted reasons ">
                  <p className="text-capitalize">
                    <span className="remarks ">
                      <i className="fa-regular fa-clock"></i>
                    </span>{' '}
                    Flexible time
                  </p>
                  <p>
                    there are many fitness calsses that are offered during off-peak hours, such as early morning or late
                    evening.
                  </p>
                </div>
              </div>
              {/* End with text column */}
            </div>

            {/* The image */}
            <div className="col-md-5">
              <img src={trademaleImg} className="img-fluid my-pic" alt="" data-name="trademale-pic" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
