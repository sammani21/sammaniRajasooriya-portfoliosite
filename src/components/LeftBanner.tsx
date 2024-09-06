
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaMediumM, FaGithub, FaYoutube, FaLinkedinIn, FaReact, FaNodeJs, FaJava , FaGraduationCap} from "react-icons/fa";
import {  SiFigma,  SiMongodb } from "react-icons/si";
import { FadeIn } from "./FadeIn";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["an IT Undergraduate.", "a Web Developement Enthusiastic.", " a BA Enthusiastic."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <FadeIn className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY Portfolio</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Sammani Rajasooriya</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
           <span>{text}</span>
          <Cursor cursorStyle="|" cursorColor="#ff014f" />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wider">
          Hello! I'm a passionate IT undergraduate with a love for technology and a constant drive to learn more. My curiosity fuels my journey in the tech world, where I'm always eager to tackle new challenges and create innovative solutions. Let's connect and share our passion for technology! Reach out to me on LinkedIn or via email—I'm always open to advice, opportunities, and new ideas. Together, we can make a difference in the tech industry.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
          <a href="http://www.youtube.com/@kavindhyasammanirajasooriy8629" target="_blank">
            <span className="bannerIcon">
              <FaYoutube />
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/kavindhya-sammani-rajasooriya-220188268/"
            target="_blank"
          >
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </a>
          <a href="https://medium.com/@KavindhyaSammani" target="_blank">
            <span className="bannerIcon">
              <FaMediumM />
            </span>
          </a>
          <a href="https://github.com/sammani21" target="_blank">
            <span className="bannerIcon">
              <FaGithub />
            </span>
          </a>
          <a href="https://www.coursera.org/learner/kavindhyasammanirajasooriya" target="_blank">
            <span className="bannerIcon">
              <FaGraduationCap />
            </span>
          </a>
        </div>
      </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILLS ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <FaJava />
            </span>
            <span className="bannerIcon">
              <FaNodeJs />
            </span>
            <span className="bannerIcon">
              <SiMongodb />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>

          </div>
        </div>
      
    </FadeIn>
  );
};

export default LeftBanner;
