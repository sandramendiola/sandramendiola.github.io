import React from 'react';
import Header from "../../components/Header/Header";
import FullLifeCycle from "../../assets/full_life_cycle.png";

const Publications = () => (
  <>
    <Header />
    <img src={FullLifeCycle} alt={'Full life cycle of a squash bug'} height={300}/>
  </>

)

export default Publications;