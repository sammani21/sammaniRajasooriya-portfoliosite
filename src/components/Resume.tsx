import { useState } from "react";
import Title from "./Title";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";
import Achievement from "./Achievement";
import { FadeIn } from "./FadeIn";
import { cv } from "../assets";
import { FaDownload } from "react-icons/fa"; // Importing an icon for the download button

const Resume = () => {
  const [educationData, setEducationData] = useState<Boolean>(true);
  const [skillData, setSkillData] = useState<Boolean>(false);
  const [experienceData, setExperienceData] = useState<Boolean>(false);
  const [achievementData, setAchievementData] = useState<Boolean>(false);

  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-gray-700">
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title title=" Expertise" des="My Resume" />
        </div>
        <div className="flex flex-col items-center">
          {/* Download CV Button */}
          <a
            href={cv} // Replace this with the actual path to your CV file
            download
            className="mb-6 bg-designColor text-white py-2 px-4 rounded-lg flex items-center gap-2"
          >
            <FaDownload /> Download CV
          </a>
         
          <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
            <li
              onClick={() => {
                setEducationData(true);
                setSkillData(false);
                setExperienceData(false);
                setAchievementData(false);
              }}
              className={`${
                educationData ? "border-designColor rounded-lg" : "border-transparent"
              } resumeLi`}
            >
              Education
            </li>
            <li
              onClick={() => {
                setEducationData(false);
                setSkillData(true);
                setExperienceData(false);
                setAchievementData(false);
              }}
              className={`${
                skillData ? "border-designColor rounded-lg" : "border-transparent"
              } resumeLi`}
            >
              Professional Skills
            </li>
            <li
              onClick={() => {
                setEducationData(false);
                setSkillData(false);
                setExperienceData(true);
                setAchievementData(false);
              }}
              className={`${
                experienceData ? "border-designColor rounded-lg" : "border-transparent"
              } resumeLi`}
            >
              Experience
            </li>
            <li
              onClick={() => {
                setEducationData(false);
                setSkillData(false);
                setExperienceData(false);
                setAchievementData(true);
              }}
              className={`${
                achievementData ? "border-designColor rounded-lg" : "border-transparent"
              } resumeLi`}
            >
              Hackathons
            </li>
          </ul>
        </div>
        {educationData && <Education />}
        {skillData && <Skills />}
        {achievementData && <Achievement />}
        {experienceData && <Experience />}
      </FadeIn>
    </section>
  );
};

export default Resume;
