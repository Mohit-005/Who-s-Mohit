/* eslint-disable react/react-in-jsx-scope */
/*
   Copyright (C), 2023-2024, Mohit Kumar (Mohit)
   Author: Mohit Kumar
   FileName: Skills.jsx
   Version: I
   Creation: 18/10/2024
   Last modification: 18/10/2024
*/

import MarqueeCards from '../Components/MarqueeCards';
import SectionTitle from '../Components/SectionTitle';
import SkillsCards from '../Components/SkillsCards';

function Skills() {
  return (
    <div id="skills" className="w-full overflow-hidden-web flex justify-center">
      <div className="w-full min-h-[800px] flex flex-col xl:w-[70%]">
        <div className="w-full">
          <SectionTitle title="SKILLS" subtitle="WHAT I DO" />
        </div>
        <div className="xl:border-l-2 xl:border-r-2 xl:border-primary-400 h-full">
          <div className="relative">
            <div className="absolute top-[45px] w-full h-[1px] bg-primary-400" />
            <MarqueeCards direction="left">
              <SkillsCards />
            </MarqueeCards>
          </div>
          <div className="relative">
            <div className="absolute top-[45px] w-full h-[1px] bg-primary-400" />
            <MarqueeCards direction="right">
              <SkillsCards />
            </MarqueeCards>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
