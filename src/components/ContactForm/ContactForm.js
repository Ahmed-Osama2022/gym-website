import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [userInputsHandler, setUserInputsHandler] = useState({
    userName: '',
    userEmail: '',
    userQuery: '',
  });

  //   console.log(userInputsHandler['userName']);
  const onChangeHandler = (identifier, value) => {
    if (identifier === 'name') {
      setUserInputsHandler({
        ...userInputsHandler,
        userName: value,
      });
    } else if (identifier === 'email') {
      setUserInputsHandler({
        ...userInputsHandler,
        userEmail: value,
      });
    } else {
      setUserInputsHandler({
        ...userInputsHandler,
        userQuery: value,
      });
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(userInputsHandler);
    setUserInputsHandler({
      userName: '',
      userEmail: '',
      userQuery: '',
    });
  };

  return (
    <>
      <div className="container-md">
        <div className="text-center">
          <h2>Contact Us</h2>
          <p className="lead">Feel free to reach us, and to communicate with our online coach</p>
        </div>

        <div className="row justify-content-center my-5">
          <div className="col-lg-6">
            <form onSubmit={submitHandler}>
              <label htmlFor="name" className="form-label">
                Name:
              </label>
              <div className="input-group mb-4">
                <span className="input-group-text ">
                  <i className="bi bi-person-fill"></i>
                </span>
                <input
                  type="text"
                  value={userInputsHandler['userName']}
                  className="form-control"
                  id="name"
                  required
                  placeholder="e.g. Ahmed"
                  onChange={(event) => onChangeHandler('name', event.target.value)}
                />
              </div>

              <label htmlFor="email" className="form-label">
                Email address:
              </label>
              <div className="input-group mb-4">
                <span className="input-group-text ">
                  <i className="bi bi-envelope-fill"></i>
                </span>
                <input
                  type="text"
                  value={userInputsHandler['userEmail']}
                  className="form-control"
                  required
                  id="email"
                  placeholder="e.g. mohammedkhalid@example.com"
                  onChange={(event) => onChangeHandler('email', event.target.value)}
                />
              </div>
              <label htmlFor="subject" className="form-label">
                What is your question about?
              </label>
              <div className="input-group mb-4">
                <span className="input-group-text ">
                  <i className="bi bi-chat-left-dots-fill"></i>
                </span>
                <select className="form-select" id="subject">
                  <option value="pricing" defaultValue>
                    Pricing query
                  </option>
                  <option value="content">Content query</option>
                  <option value="other">Other query</option>
                </select>
              </div>

              {/* <!-- New with "trick" --> */}
              <div className="mb-4 mt-4 form-floating">
                <textarea
                  className="form-control"
                  id="query"
                  style={{ height: '140px' }}
                  placeholder="query"
                  value={userInputsHandler['userQuery']}
                  onChange={(event) => onChangeHandler('query', event.target.value)}
                ></textarea>
                <label htmlFor="query">Your query...</label>
              </div>

              <div className="my-4  text-center ">
                <button type="submit" className="btn btn-danger">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
