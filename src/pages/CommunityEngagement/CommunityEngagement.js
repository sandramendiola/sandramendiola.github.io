import React from 'react';
import Adults from "../../assets/adults.png";
import CommunityEngagementContent from "../../components/CommunityEngagement/CommunityEngagementContent";
import Header from "../../components/Header/Header";

const CommunityEngagement = () => {
  return (
    <>
      <Header />
      <img src={Adults} alt={'Adult squash bug banner'} height={300}/>
      <CommunityEngagementContent />
    </>
  )
}

export default CommunityEngagement;