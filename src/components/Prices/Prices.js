import React from 'react';
import './Prices.css';
import Button from '../UI/Button';

const Prices = () => {
  const pricesItems = [
    {
      id: Math.random().toString(),
      title: 'Discover',
      price: 100,
      features: ['5 Classes per month', '4 groups class monthly', 'online class access'],
    },
    {
      id: Math.random().toString(),
      title: 'Enterprice',
      price: 260,
      features: ['10 Classes per month', '8 groups class monthly', '7 Extra fitness training'],
      className: 'col-9 col-lg-4',
      cardClassName: 'card border border-danger price-card ',
    },
    {
      id: Math.random().toString(),
      title: 'Professional',
      price: 320,
      features: ['7 Classes per month', '6 groups class monthly', 'online class access'],
    },
  ];

  return (
    <>
      {pricesItems.map((item) => {
        return (
          <div className={item.className || 'col-8 col-lg-4 col-xl-3'} key={item.id}>
            <div className={item.cardClassName || 'card border-0'}>
              <div className="card-body p-4 text-center ">
                <h4 className="card-title ">{item.title}</h4>
                {/* <p className="card-subtitle lead"></p> */}
                <p className="my-3 display-6 fw-bold price ">
                  {item.price} EGP<span className="fs-6 text-capitalize fst-italic ">/per month</span>
                </p>
                <div className="card-text mx-5 text-muted d-none d-md-block">
                  {item.features.map((feature, index) => {
                    return (
                      <div className="lead text-muted reasons " key={index}>
                        <p className="text-capitalize mt-3 ">
                          <span className="remarks">
                            <i className="fa-solid fa-check"></i>
                          </span>
                          {` ${feature}`}
                        </p>
                      </div>
                    );
                  })}
                </div>
                {/* <a href="#" className="btn btn-lg btn-outline-primary mt-3">
                  Buy Now
                </a> */}
                <Button className="buy-button btn-outline-danger ">Buy Now</Button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Prices;
