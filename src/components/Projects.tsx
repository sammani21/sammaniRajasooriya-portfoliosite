import Title from "./Title";
import ProjectsCard from "./ProjectsCard";
import { projectOne, projectThree, projectTwo, projectFour } from "../assets";
import { FaReact, FaNodeJs, FaJsSquare, FaServer } from "react-icons/fa";
import { SiMongodb, SiTypescript , SiExpress, SiC, SiArduino, SiFlutter , SiTailwindcss, SiVite} from "react-icons/si";
//import { DiFlutter } from "react-icons/di";
import { FadeIn } from "./FadeIn";



const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title
            title="Innovations & Creations"
            des="My Projects"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
          <ProjectsCard
            title="ROMODO - Passenger Transport Fleet Management System "
            des=" Second Year Software Development Project (Group)"
            src={projectOne}
            technologies={[
              <FaReact className="text-blue-500" />,
              <FaNodeJs className="text-green-500" />,
              <SiMongodb className="text-green-400" />,
              <SiTypescript className="text-blue-600" />,
              <SiExpress className="text-green-400" />,
              <SiFlutter className="text-blue-400" />,
            ]}
          />
          <ProjectsCard
            title="Student Friendly Table - IoT based system"
            des=" First Year Hardware Project (Group)"
            src={projectTwo}
            technologies={[
              <SiC className="text-blue-400" />, // C
              <SiArduino className="text-blue-600" /> // Arduino Uno
              
            ]}
          />
          <ProjectsCard
            title="FITPRO - Fitness Tracking & Workout Planner App"
            des=" Individual Project (Ongoing)"
            src={projectThree}
            technologies={[
              <FaReact className="text-blue-500" />,
              <FaNodeJs className="text-green-500" />,
              <SiMongodb className="text-green-400" />,
              <FaJsSquare className="text-yellow-500" />,
              <SiExpress className="text-green-400" />,
              <FaServer className="text-gray-600" /> 
            ]}
          />
          <ProjectsCard
            title="Personal Portfolio - Sammani Rajasooriya"
            des=" Individual Project "
            src={projectFour}
            technologies={[
              <FaReact className="text-blue-500" />,
              <FaNodeJs className="text-green-500" />,
              <SiTypescript className="text-blue-600" />,
              <SiTailwindcss className="text-blue-400" />, // Tailwind CSS
              <SiVite className="text-purple-400" /> // Vite
            ]}
          />
         
        </div>
      </FadeIn>
    </section>
  );
};

export default Projects;
