import { FaMediumM, FaGithub, FaYoutube, FaLinkedinIn, FaGraduationCap } from "react-icons/fa";
import { contactImg } from "../assets";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#0B1120] to-[#0B1120] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Sammani Rajasooriya</h3>
        <p className="text-lg font-normal text-gray-400">
          IT Undergraduate
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          Contact me for inquiries, collaborations, or to learn more about my work. I would love to hear from you!
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+94 71 598 1043</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">kavisamrajasooriya@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in </h2>
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
  );
};

export default ContactLeft;
