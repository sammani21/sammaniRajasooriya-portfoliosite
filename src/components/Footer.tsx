import { FaGithub, FaLinkedinIn, FaMediumM, FaYoutube, FaGraduationCap } from "react-icons/fa";
import { logo } from "../assets";
import { FadeIn } from "./FadeIn";

const Footer = () => {
  return (
    <FadeIn className="w-full py-10 h-auto border-t-[1px] border-black flex justify-between items-center">
      {/* Left side with the logo */}
      <div className="flex-shrink-0">
        <img className="w-32" src={logo} alt="logo" />
      </div>

      {/* Right side with social media links and paragraph */}
      <div className="text-right">
        {/* Social Media Links */}
        <div className="flex justify-end gap-4 mb-4">
          <a href="http://www.youtube.com/@kavindhyasammanirajasooriy8629" target="_blank">
            <span className="bannerIcon">
              <FaYoutube />
            </span>
          </a>
          <a href="https://www.linkedin.com/in/kavindhya-sammani-rajasooriya-220188268/" target="_blank">
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
          
        </div>

        {/* Copyright Text */}
        <p className="text-gray-500">
          © 2022. All rights reserved by Sammani Rajasooriya
        </p>
      </div>
    </FadeIn>
  );
};

export default Footer;
