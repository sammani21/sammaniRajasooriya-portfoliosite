import { FaReact, FaNodeJs, FaJava, FaJsSquare, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiTypescript, SiMongodb, SiFlutter, SiExpress, SiMysql, SiJira, SiTrello } from "react-icons/si";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* First Column */}
      <div className="w-full lgl:w-1/2">
      <div className="py-12 font-titleFont flex flex-col gap-4"></div>
      <div className="flex flex-col gap-6">
          {/* React.js */}
          <div className="overflow-x-hidden">
            <p className="text-xm uppercase font-medium flex items-center gap-2">
              <FaReact className="text-blue-500" /> React.js
            </p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              ></motion.span>
            </span>
          </div>

          {/* Node.js */}
          <div className="overflow-x-hidden">
            <p className="text-xm uppercase font-medium flex items-center gap-2">
              <FaNodeJs className="text-green-500" /> Node.js
            </p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              ></motion.span>
            </span>
          </div>

          {/* React Native */}
          <div className="overflow-x-hidden">
            <p className="text-xm uppercase font-medium flex items-center gap-2">
              <FaReact className="text-blue-500" /> React Native
            </p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              ></motion.span>
            </span>
          </div>

          {/* TypeScript */}
          <div className="overflow-x-hidden">
            <p className="text-xm uppercase font-medium flex items-center gap-2">
              <SiTypescript className="text-blue-600" /> TypeScript
            </p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              ></motion.span>
            </span>
          </div>

          {/* MongoDB */}
          <div className="overflow-x-hidden">
            <p className="text-xm uppercase font-medium flex items-center gap-2">
              <SiMongodb className="text-green-400" /> MongoDB
            </p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              ></motion.span>
            </span>
          </div>

          {/* HTML5 */}
          <div className="overflow-x-hidden">
            <p className="text-xm uppercase font-medium flex items-center gap-2">
              <FaHtml5 className="text-orange-500" /> HTML5
            </p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              ></motion.span>
            </span>
          </div>

          {/* JIRA */}
          <div className="overflow-x-hidden">
            <p className="text-xm uppercase font-medium flex items-center gap-2">
              <SiJira className="text-blue-500" /> JIRA
            </p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              ></motion.span>
            </span>
          </div>
        </div>
      </div>

      {/* Second Column */}
      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4"></div>
        <div className="flex flex-col gap-6">
          
          {/* Java */}
          <div className="overflow-x-hidden">
            <p className="text-xm uppercase font-medium flex items-center gap-2">
              <FaJava className="text-red-500" /> Java
            </p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              ></motion.span>
            </span>
          </div>

          {/* Express.js */}
          <div className="overflow-x-hidden">
            <p className="text-xm uppercase font-medium flex items-center gap-2">
              <SiExpress className="text-gray-500" /> Express.js
            </p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              ></motion.span>
            </span>
          </div>

          {/* Flutter */}
          <div className="overflow-x-hidden">
            <p className="text-xm uppercase font-medium flex items-center gap-2">
              <SiFlutter className="text-blue-400" /> Flutter
            </p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              ></motion.span>
            </span>
          </div>

          {/* JavaScript */}
          <div className="overflow-x-hidden">
            <p className="text-xm uppercase font-medium flex items-center gap-2">
              <FaJsSquare className="text-yellow-400" /> JavaScript
            </p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              ></motion.span>
            </span>
          </div>

          {/* CSS3 */}
          <div className="overflow-x-hidden">
            <p className="text-xm uppercase font-medium flex items-center gap-2">
              <FaCss3Alt className="text-blue-500" /> CSS3
            </p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              ></motion.span>
            </span>
          </div>

          {/* MySQL */}
          <div className="overflow-x-hidden">
            <p className="text-xm uppercase font-medium flex items-center gap-2">
              <SiMysql className="text-blue-500" /> MySQL
            </p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              ></motion.span>
            </span>
          </div>

          {/* Trello */}
          <div className="overflow-x-hidden">
            <p className="text-xm uppercase font-medium flex items-center gap-2">
              <SiTrello className="text-blue-600" /> Trello
            </p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              ></motion.span>
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
