import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col items-center justify-center gap-10"
    >
      <div className="w-full max-w-3xl">
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Codefest Datathon 2023 - Participation"
            subTitle="Organized by SLIIT"
          />
          <ResumeCard
            title="MoraXtream 8.0 - Participation"
            subTitle="Organized by IEEE Student Branch of University of Moratuwa"
          />
          <ResumeCard
            title="Hackaholics 6.0 - Participation"
            subTitle="Organized by University of Colombo School of Computing"
          />
          <ResumeCard
            title="CyberZee ‘24 - Participation"
            subTitle="Organized by University of Kelaniya"
          />
          <ResumeCard
            title="HackElite 1.0 - Participation"
            subTitle="Organized by IEEE Student Branch of University of Moratuwa"
          />
          <ResumeCard
            title="Hackmoral 6.0 - Participation"
            subTitle="Organized by INTECS of the Faculty of Information Technology, UOM"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
