import React from 'react'
import marqueimage from "../../assets/images/footer-marque-imgs.png";

const FooterMarque = () => {
  return (
    <div className="marque_container py-6 border-gray-300 border-b-1 border-b-[#7C4EAF] hidden md:block">
            <div className="overflow-hidden">
                <div className="flex whitespace-nowrap animate-marquee">
                   <img src={marqueimage} alt="" />
                   <img src={marqueimage} alt="" />
                </div>
            </div>
        </div>
  )
}

export default FooterMarque