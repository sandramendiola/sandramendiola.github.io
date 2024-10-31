import React from 'react';
import EDGETabling from '../../assets/edge_ambassador_tabling.png';
import PBEEShirtBack from '../../assets/pbeeshirtback.png';
import EmorySACNASPres from '../../assets/emory_sacnas_pres.png';

const CommunityEngagementContent = () => {
  return (
    <>
      <div className="section cv-content community-engagement">
        <div className="section-header">Community Engagement</div>
        <div className="community-engagement-details">
          <img src={EDGETabling} alt={'Emory Diversifying Graduate Education Ambassador Tabling'} height={'350px'} />
          <img src={PBEEShirtBack} alt={'PBEE Shirt Back'} height={'350px'} />
          <img src={EmorySACNASPres} alt={'Emory SACNAS Pres'} height={'350px'} />
          <div className="edge-ambassador">
            <h1>Emory Diversifying Graduate Education Ambassador</h1>
            <p>
              As an EDGE Ambassador, I have been an active part in fostering an inclusive community at Emory. I have
              attended conferences to recruit students for Emory’s PhD programs, planned and assisted with programming
              to support students from historically excluded groups, and served as a mentor and instructor for students
              in Emory’s Summer Opportunities for Academic Research program.
            </p>
          </div>
          <div className="pbee-student-leader">
            <h1>
              Population Biology, Ecology, and Evolution Student Leader
            </h1>
            <p>
              I have played an extensive role in student life within my graduate program. As the elected representative, I advocated for students as part of the PBEE Executive Committee for two years. I have also served as a member of the Seminar Committee which facilitates our program’s weekly seminars. I also helped establish our program’s Diversity, Equity, and Inclusion (DEI) Committee and developed programming on DEI Issues for students and faculty.
            </p>
          </div>
          <div className="sacnas-president">
            <h1>
              Emory SACNAS Chapter President
            </h1>
            <p>
              I have served as president of the Emory Chapter of the Society for the Advancement of Chicanos/Hispanics and Native Americans in Science (SACNAS) since 2019.  As president, I lead the organization of events that foster our mission of building community and providing professional development opportunities for underrepresented students in STEM, particularly Latinx and Native American Students.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default CommunityEngagementContent;