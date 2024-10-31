import React from 'react';
import Header from "../../components/Header/Header";
import Fourths from "../../assets/4ths.png";
import CVContent from "../../components/CV/CVContent";

const CV = () => {
    return (
        <>
          <Header />
          <img src={Fourths} alt={'Fourths!'} height={300} />
          <CVContent />
        </>
    )
}

export default CV;