import React from 'react';
import Header from "../../components/Header/Header";
import Fourths from "../../assets/4ths.png";

const CV = () => {
    return (
        <>
          <Header />
          <img src={Fourths} alt={'Fourths!'} height={300}/>
        </>
    )
}

export default CV;