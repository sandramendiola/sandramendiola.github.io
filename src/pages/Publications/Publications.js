import React from 'react';
import Header from "../../components/Header/Header";
import FullLifeCycle from "../../assets/full_life_cycle.png";
import PublicationsContent from "../../components/Publications/PublicationsContent";

const Publications = () => (
  <>
    <Header />
    <div className="lifecycle">
      <img src={FullLifeCycle} alt={'Full life cycle of a squash bug'} height={300} width={"100%"} />
    </div>
    <PublicationsContent />
  </>

)

export default Publications;