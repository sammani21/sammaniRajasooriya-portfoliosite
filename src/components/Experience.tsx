import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col items-center gap-10 lgl:gap-20"
    >
      {/* Container for the entire content */}
      <div className="w-full max-w-4xl flex flex-col items-center">
        {/* Header Section */}
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col items-center gap-4">
          <p className="text-sm text-designColor tracking-[4px]"></p>
          <h2 className="text-3xl md:text-4xl font-bold text-center">Job Experience</h2>
        </div>

        {/* Resume Cards Section */}
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col items-center gap-10">
          <ResumeCard
            title="Staff Trainee Intern"
            subTitle="Peoples Bank - Homagama"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
