import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
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
          <h2 className="text-3xl md:text-4xl font-bold text-center">Education Qualifications</h2>
        </div>

        {/* Resume Cards Section */}
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col items-center gap-10">
          <ResumeCard
            title="BSc(Hons) in Information Technology & Management"
            subTitle="University of Moratuwa (Reading)"
          />
          <ResumeCard
            title="Comprehensive Master Java Developer (CMJD)"
            subTitle="Institute of Software Engineering"
          />
          <ResumeCard
            title="Diploma in Human Resource Management"
            subTitle="Lanka Professionals Education Center (LPEC)"
          />
          <ResumeCard
            title="Professional Certificate in Marketing (PCM)"
            subTitle="Sri Lanka Institute of Marketing (SLIM)"
          />
          <ResumeCard
            title="Diploma in English (DiE)"
            subTitle="Esoft Metro Campus"
          />
          <ResumeCard
            title="G.C.E. Advanced Level"
            subTitle="Visakha Vidyalaya - Colombo 05"
          />
          <ResumeCard
            title="G.C.E. Ordinary Level"
            subTitle="Dharmapala Maha Vidyalaya - Kottawa"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
