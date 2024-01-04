import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import sunImg from './assets/sun.png';
import moonImg from './assets/moon.png';
import useLocalStorageState from 'use-local-storage-state';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import ProgramSec from './components/ProgramSec/ProgramSec';

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
      </div>
    </>
  );
}

export default App;
