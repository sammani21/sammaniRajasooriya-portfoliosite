import {
  FaMediumM,
  FaGithub,
  FaYoutube,
  FaLinkedinIn,
  FaGraduationCap,
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
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
        <p className="text-lg font-normal text-gray-400">IT Undergraduate / Software Engineer</p>
        <p className="text-base text-gray-400 tracking-wide">
          Contact me for inquiries, collaborations, or to learn more about my work. I would love to hear from you!
        </p>

        <div className="text-base text-gray-400 flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-lightText" />
            <a href="tel:+94715981043" className="text-lightText hover:underline">
              +94 71 598 1043
            </a>
            <a
              href="https://wa.me/94715981043"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:underline flex items-center gap-1"
            >
              <FaWhatsapp /> WhatsApp
            </a>
          </div>
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-lightText" />
            <a href="tel:+94741235494" className="text-lightText hover:underline">
              +94 74 123 5494
            </a>
            <a
              href="https://wa.me/94741235494"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:underline flex items-center gap-1"
            >
              <FaWhatsapp /> WhatsApp
            </a>
          </div>
        </div>

        <div className="flex items-center gap-2 text-base text-gray-400">
          <FaEnvelope className="text-lightText" />
          <a
            href="mailto:kavisamrajasooriya@gmail.com"
            className="text-lightText hover:underline"
          >
            kavisamrajasooriya@gmail.com
          </a>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4 text-xl text-lightText">
          <a href="http://www.youtube.com/@kavindhyasammanirajasooriy8629" target="_blank" rel="noopener noreferrer">
            <span className="bannerIcon">
              <FaYoutube />
            </span>
          </a>
          <a href="https://www.linkedin.com/in/kavindhya-sammani-rajasooriya-220188268/" target="_blank" rel="noopener noreferrer">
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </a>
          <a href="https://medium.com/@KavindhyaSammani" target="_blank" rel="noopener noreferrer">
            <span className="bannerIcon">
              <FaMediumM />
            </span>
          </a>
          <a href="https://github.com/sammani21" target="_blank" rel="noopener noreferrer">
            <span className="bannerIcon">
              <FaGithub />
            </span>
          </a>
          <a href="https://www.coursera.org/learner/kavindhyasammanirajasooriya" target="_blank" rel="noopener noreferrer">
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
