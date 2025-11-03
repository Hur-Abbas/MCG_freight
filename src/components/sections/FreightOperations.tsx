import React from 'react'
import operations1 from "../../assets/images/operations1.svg";
import operations2 from "../../assets/images/operations2.svg";
import operations3 from "../../assets/images/operations3.svg";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const FreightOperations = () => {
    return (
        <div className="bg-[#F5F8FF] py-10 sm:py-14 md:py-20 px-4 sm:px-6 md:px-10">
            <div className="container mx-auto max-w-[1280px]">
                <div className="flex flex-col items-center text-center gap-4 ">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-normal">
                        All Your <span className="ha_gradient_text">Freight Operations</span> in One Platform
                    </h2>
                    <p className="text-sm sm:text-base text-[#7B7F9C] mb-3 leading-normal max-w-2xl">
                        There are many solutions available, but most are limited in scope. MGC Freight brings together tracking, cost optimization, and logistics management, offering a seamless experience for your business needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 mt-6">
                    <div className="bg-bluegradient px-6 sm:px-8 py-8 sm:py-9 rounded-xl">
                        <div className="flex flex-col gap-3 relative">
                            <h1 className="font-semibold text-lg sm:text-2xl text-[#324878]">Global Shipping Made Simple</h1>
                            <p className="text-[#596C8D] text-sm sm:text-base">Effortlessly manage logistics with end-to-end supply chain precision across air, sea, and land.</p>
                            <img alt="shipment1" className="w-full h-auto sm:h-[15rem] object-contain" src={operations1} />
                        </div>
                    </div>

                    <div className="bg-purplegradient px-6 sm:px-8 py-8 sm:py-9 rounded-xl">
                        <div className="flex flex-col gap-3 relative">
                            <h1 className="font-semibold text-lg sm:text-2xl text-[#7C4EAF]">Global Shipping Made Simple</h1>
                            <p className="text-[#7C4EAF] text-sm sm:text-base">Effortlessly manage logistics with end-to-end supply chain precision across air, sea, and land.</p>
                            <img alt="shipment2" className="w-full h-auto sm:h-[15rem] object-contain" src={operations2} />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1">
                    <div className="bg-[#32467B] px-6 sm:px-8 py-8 sm:py-10 rounded-xl flex flex-col lg:flex-row gap-6 lg:gap-10 items-center">
                        <div className="flex flex-col gap-6 lg:gap-8 relative justify-center text-center lg:text-left">
                            <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl text-[#fff]">Connecting the World Through Logistics</h1>
                            <p className="text-[#fff] text-sm sm:text-base max-w-2xl">Streamline your global supply chain with reliable shipping solutions by air, land, and sea. From small parcels to large freight, our network ensures fast, efficient, and secure delivery to every corner of the world.</p>
                            <div className="cta flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-6">
                                <button
                                    className="text-white rounded-2xl border-0 bg-[#7C4EAF] px-4 py-2 hover:bg-[#fff] hover:text-[#7C4EAF] transition-colors flex items-center justify-center gap-2"
                                >
                                    Get Started Today
                                    <MdKeyboardDoubleArrowRight />
                                </button>
                                <button
                                    className="text-[#fff] rounded-xl border-2 border-[#fff] px-4 py-2 hover:bg-[#7C4EAF] hover:text-white transition-colors flex items-center justify-center gap-2"
                                >
                                    Get A Quote
                                    <MdKeyboardDoubleArrowRight />
                                </button>
                            </div>
                        </div>
                        <img src={operations3} className="w-full sm:w-[80%] md:w-[60%] lg:w-[45%] h-auto object-contain" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FreightOperations
