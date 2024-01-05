import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import sunImg from './assets/sun.png';
import moonImg from './assets/moon.png';
import useLocalStorageState from 'use-local-storage-state';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import ProgramSec from './components/ProgramSec/ProgramSec';
import Prices from './components/Prices/Prices';
import Footer from './components/UI/Footer';

function App() {
  // const [isDark, setIsDark] = useState(false);
  const [isDark, setIsDark] = useLocalStorageState('dark', {
    defaultValue: false,
  });
  const onClickHandler = (event) => {
    if (isDark === false) {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  };
  return (
    <>
      <div className={`App ${isDark ? 'dark' : 'light'}`}>
        <Navbar
          isDarkHandler={onClickHandler}
          imgs={{ moon: moonImg, sun: sunImg }}
          imgSrc={isDark ? sunImg : moonImg}
        />
        <Home />
        <AboutUs />

        <ProgramSec darkModeHandler={isDark} />
        <section id="prices" className="my-5">
          <div className="container-lg ">
            <div className="text-center ">
              <h1 className="text-capitalize">Pricing plans</h1>
              <p className="lead text-muted ">Choose a pricing plan to suit you.</p>
            </div>
            <div className="row my-5 justify-content-center ">
              <Prices />
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default App;
