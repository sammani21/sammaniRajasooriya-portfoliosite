import { useState } from "react";
import Slider from "react-slick";

import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import Title from "./Title";
import { testimonialOne, testimonialTwo, testimonialThree, testimonialFour } from "../assets";
import { FadeIn } from "./FadeIn";

function SampleNextArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-1/2 right-0 transform -translate-y-1/2 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowRight />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-1/2 left-0 transform -translate-y-1/2 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowLeft />
    </div>
  );
}

const Testimonial = () => {
  const [dotActive, setDotActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (_current: any, next: any) => {
      setDotActive(next);
    },
    appendDots: (dots: any) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i: any) => (
      <div
        style={
          i === dotActive
            ? {
                width: "12px",
                height: "12px",
                color: "blue",
                background: "#ff014f",
                borderRadius: "50%",
                cursor: "pointer",
              }
            : {
                width: "12px",
                height: "12px",
                color: "blue",
                background: "gray",
                borderRadius: "50%",
                cursor: "pointer",
              }
        }
      ></div>
    ),
  };
  return (
    <section
      id="testimonial"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <div className="flex justify-center items-center text-center mb-1">
          <Title title="LATEST INSIGHTS" des="My Blogs" />
        </div>

        {/* ================ Slider ================== */}
        <Slider {...settings}>
          {[testimonialOne, testimonialTwo, testimonialThree , testimonialFour].map(
            (testimonial, index) => (
              <div key={index} className="flex justify-center items-center">
                <div className="w-full max-w-[1800px] h-auto flex flex-col lgl:flex-row justify-center items-center gap-8">
                 
                  <div className="w-full lgl:w-[45%] h-full xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000"> 
                  <img
                      className="h-72 md:h-32 lgl:h-72  w-[%] rounded-lg object-cover justify-center items-center"
                      src={testimonial}
                      alt={`testimonial${index + 1}`}
                    />
                    <div className="w-full flex flex-col items-center mt-4">
                      <h3 className="text-2xl font-bold">
                        {index === 0
                          ? "The Magic of Sorting"
                          : index === 1
                          ? "Mastering Sorting Algorithms"
                          : index === 2
                          ? " Lottie Files"
                          : index === 3
                          ? "Email Services in Web Development"
                          : "Mastering Website Deployment"}
                      </h3>
                      <p className="text-base tracking-wide text-gray-500">
                        {index === 0
                          ? "Exploring Bubble Sort, Insertion Sort, and Selection Sort"
                          : index === 1
                          ? "Bubble, Insertion, and Selection Sort in Java and C"
                          : index === 2
                          ? "A Step-by-Step Guide for use Lottie Files in React App"
                          : index === 3
                          ? "A Comprehensive Guide"
                          : "From Code to Live in Easy Steps"}
                      </p>
                      <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                        <a
                          href={
                            index === 0
                              ? "https://medium.com/@KavindhyaSammani/the-magic-of-sorting-exploring-bubble-sort-insertion-sort-and-selection-sort-2c108a671cd3"
                              : index === 1
                              ? "https://medium.com/@KavindhyaSammani/mastering-sorting-algorithms-bubble-insertion-and-selection-sort-in-java-and-c-abd304a2e94e"
                              : index === 2
                              ? "https://medium.com/@KavindhyaSammani/bringing-your-react-app-to-life-with-lottie-files-a-step-by-step-guide-1638f79f782e"
                              : index === 3
                              ? "https://medium.com/@KavindhyaSammani/exploring-email-services-in-web-development-a-comprehensive-guide-b66c1b3e94a0"
                              : "https://medium.com/@KavindhyaSammani/mastering-website-deployment-from-code-to-live-in-easy-steps-23274dbc563a"
                            }
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Read More...
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </Slider>
       

        <div className="flex justify-center items-center text-center">
        <a
          href="https://medium.com/@KavindhyaSammani"
          target="_blank"
          className="text-ls uppercase text-designColor flex tracking-wide mb-2 items-center text-center justify-center"
        >
          - Find More Blogs Here -
        </a>
      </div>
      </FadeIn>
    </section>
  );
};

export default Testimonial;
