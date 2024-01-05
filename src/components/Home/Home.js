import React from 'react';
import './Home.css';
import Button from '../UI/Button';
import coachImg from '../../assets/gym-coach.png';

const Home = () => {
  return (
    <>
      {/* <!-- The main page --> */}
      <div className="home-wrapper position-relative" id="home">
        <div className="container-fluid px-3 position-absolute banner text-white ">
          <div className="row  gap-3  justify-content-around  align-items-center   ">
            {/* <!-- Text and photo --> */}
            <div className="col-12 col-md-7 first-col ">
              <div className="display-6 text-center text-md-start fw-bold">
                GET HEALTHY BODY WITH THE PERFECT EXERCISES
              </div>
              <div className="text-center text-md-start mt-2">
                We are alaways there to help you to amke a healthy body and mind through the power of fitness
              </div>
              <div className="text-center text-md-start">
                <Button className="text-capitalize btn-danger">Get statrted</Button>
                <span className="mx-4 ">
                  <a href="#" className="text text-decoration-underline text-reset ">
                    Learn more
                  </a>
                </span>
              </div>
            </div>
            {/* <div className="col-6 col-md-4 bg-black d-none d-md-block  ">  */}
            <div className="col-6 col-md-4 ">
              <img src={coachImg} className="img-fluid rounded-3 " alt="img" />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="col-md-5 text-center text-md-start my-4 d-none d-md-block ">
              <h5 className="display-5 ">Crafted by artists</h5>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi quis quod quidem quas repellat aliquam!
              </p>
            </div>
            <div className="col-md-5 text-center text-md-start my-4 d-none d-md-block">
              <h5 className="display-5  ">Crafted by artists</h5>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi quis quod quidem quas repellat aliquam!
              </p>
            </div> */}
    </>
  );
};

export default Home;
