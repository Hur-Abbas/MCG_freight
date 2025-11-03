import React from "react";
import { PiCodesandboxLogoLight } from "react-icons/pi";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import heroimg from "../../assets/images/heroimg.png";

const HeroSection = () => {
  return (
    <>
      <section className="ha_hero_section">
        <div className="container mx-auto flex flex-col items-center text-center max-w-[1240px] pt-30 px-4 md:px-6">
          
          <div className="tagline flex items-center gap-4 px-12 leading-tight py-2 border-gray-300 bg-[#FFFFFF] border-3 rounded-lg"> <p className="text-lg text-[#7b7f9c] font-semibold">Welcome to MGC FREIGHT</p> <PiCodesandboxLogoLight className='text-[#7c4eaf] text-2xl' /> </div>

          <div className="content max-w-[800px] mt-6 sm:mt-4">
            <h1 className="text-2xl md:text-5xl text-[#11181c] font-semibold tracking-tighter leading-[1.3] max-w-4xl mb-3 sm:text-2xl sm:leading-snug sm:mb-2">
              The Modern Freight{" "}
              <span className="ha_gradient_text">Solution</span> for Your Business
              in One Place
            </h1>
            <p className="text-lg text-[#4B5563] mb-3 sm:text-sm sm:mb-2">
              Seamlessly manage logistics and operations with a complete freight
              solution tailored for your business needs.
            </p>

            <div className="cta flex justify-center mt-6 gap-3 flex-wrap sm:mt-4 sm:gap-2">
              <button className="text-white rounded-2xl border-3 bg-[#7C4EAF] px-4 py-2 md:px-5 md:py-3 text-xs md:text-base hover:bg-[#fff] hover:text-[#7C4EAF] transition-colors flex items-center gap-2 ">
                Get Started Today
                <MdKeyboardDoubleArrowRight className="text-lg sm:text-base" />
              </button>
              <button className="text-[#7C4EAF] rounded-xl border-3 border-[#7C4EAF] px-4 py-2 md:px-5 md:py-3 hover:bg-[#7C4EAF] hover:text-white transition-colors flex items-center gap-2 text-xs md:text-base ">
                Get A Quote
                <MdKeyboardDoubleArrowRight className="text-lg sm:text-base" />
              </button>
            </div>
          </div>

          <div className="hero_img pt-8 sm:pt-6 w-full flex justify-center">
            <img
              src={heroimg}
              alt="Hero"
              className="w-full max-w-[1000px] sm:max-w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
