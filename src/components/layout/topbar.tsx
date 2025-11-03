import React from 'react'
import { FaPhoneAlt, FaInstagram } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Topbar = () => {
    return (
        <section className="topbar ha_nav_gradient">
            <div className="marque_container pt-1 pb-3 border-b-2 border-gray-300">
                <div className="overflow-hidden">
                    <div className="flex whitespace-nowrap animate-marquee">
                        <p className="text-sm sm:text-base text-[#11181c] px-4">
                            All features of the website are inactive as the website is still under development for a full scale launch THIS IS JUST A PREVIEW of what to EXPECT in the FUTURE
                        </p>
                        <p className="text-sm sm:text-base text-[#11181c] px-4">
                            All features of the website are inactive as the website is still under development for a full scale launch THIS IS JUST A PREVIEW of what to EXPECT in the FUTURE
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-between items-center gap-6 py-3 px-4 sm:px-6 md:px-8">
                <div className="ha_info_con1 flex flex-col md:flex-row items-center justify-between lg:justify-start gap-4 md:gap-10 w-full lg:w-1/2 text-sm sm:text-base">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-center text-md-left justify-center">
                        <p className="logo text-[#324878]">www.mgcfreight.com</p>
                        <p className="country border-l-2 pl-2 border-base-blue text-[#324878]">United States</p>
                        <p className="country border-l-2 pl-2 border-base-blue text-[#324878]">Canada</p>
                    </div>
                    <a className="hidden md:flex items-center gap-2 text-[#324878]">
                        <FaPhoneAlt /> +1 (289) 295-1640
                    </a>
                </div>

                <div className="ha_info_con2 flex flex-col md:flex-row items-center justify-center lg:justify-end gap-4 md:gap-8 w-full lg:w-1/2">
                    <div className="socials hidden md:flex gap-2 text-[#324878]">
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaLinkedinIn /></a>
                        <a href="#"><BsYoutube /></a>
                        <a href="#"><FaTwitter /></a>
                    </div>

                    <form className="flex w-full max-w-[500px]" onSubmit={(e) => e.preventDefault()}>
                        <input
                            required
                            type="text"
                            name="tracking_number"
                            placeholder="Enter Tracking Number"
                            className="flex-grow p-3 bg-[#f4f4f6] rounded-l-2xl text-sm sm:text-base focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="bg-[#7C4EAF] text-white px-4 sm:px-6 py-3 rounded-r-2xl hover:bg-[#693d95] transition-colors text-sm sm:text-base"
                        >
                            Check Status
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Topbar