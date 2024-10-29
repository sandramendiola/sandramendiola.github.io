import './App.css';
import Header from './components/Header/Header';
import Nymph from './assets/nymphs.png';
import React from "react";
import AboutMe from "./components/AboutMe/AboutMe";

function App() {
  return (
    <>
      <Header />
      <img src={Nymph} alt={'Nymphs!'} height={300}/>
      <AboutMe />
    </>
  );
}

export default App;
