import React from 'react'
import { useState } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import fedex from '../../assets/images/fedex.svg';
import gls from '../../assets/images/gls.svg';
import mor from '../../assets/images/mor.svg';

const SolutionsSection = () => {
    const tabs = ["Fulfillment", "Courier", "LTL", "Brokers", "Spot Quote", "Claims"];
    const [activeTab, setActiveTab] = useState("Fulfillment");
    return (
        <>
            <div className="ha_solutions">
                <div className="w-full max-w-full mx-auto py-16 px-4 text-center flex flex-col items-center">
                    <h2 className="text-2xl md:text-4xl font-semibold mb-6">
                        Complete <span className="ha_gradient_text">Freight & Logistics</span> Solutions
                    </h2>

                    <div className="ha_solutions_tab flex flex-wrap justify-center p-1 mb-10 max-w-full gap-0">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-2 text-sm font-medium transition-all duration-200 bg-non-active 
                                    ${activeTab === tab
                                        ? "bg-active text-[#324878]"
                                        : "text-gray-600"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    <div className="text-center max-w-5xl ">
                        {activeTab === "Fulfillment" && (
                            <>
                                <div className="flex flex-col justify-center items-center">
                                    <h3 className="text-2xl md:text-3xl font-semibold mb-3 text-[#11181C]">
                                        Comprehensive <span className="ha_gradient_text">Fulfillment Services</span> for Your Business
                                    </h3>
                                    <p className="text-[#7B7F9C] max-w-full mx-auto mb-6">
                                        Simplify your logistics with MGC Freight! We offer end-to-end fulfillment solutions,
                                        including efficient order processing, secure warehousing, and hassle-free shipping,
                                        ensuring a smooth experience for you and your customers.
                                    </p>
                                    <button
                                        className="text-white rounded-2xl border-3 bg-[#7C4EAF] px-5 py-3  hover:bg-[#fff] hover:text-[#7C4EAF] transition-colors flex items-center gap-2"
                                    >
                                        Get Started Today
                                        <MdKeyboardDoubleArrowRight />
                                    </button>
                                </div>
                            </>
                        )}

                        {activeTab === "Courier" && (
                            <div className="flex flex-col justify-center items-center">
                                <h3 className="text-2xl md:text-3xl font-semibold mb-3 text-[#11181C]">
                                    Trusted Courier Partner Solutions for <span className='ha_gradient_text'>Seamless Deliveries</span>
                                </h3>
                                <p className="text-[#7B7F9C] max-w-full mx-auto mb-6">
                                    Enhance your shipping capabilities with MGC Freight’s reliable courier partnerships. We ensure timely deliveries, secure handling, and exceptional service, providing your business with the flexibility and efficiency needed to satisfy your customers every step of the way.
                                </p>
                                <div className="flex flex-col md:flex-row gap-6">
                                    <div className="card max-w-sm bg-white rounded-xl shadow-lg p-3 text-center">
                                        <img src={fedex} alt="Courier 1" className='w-full' />
                                        <p className="text-[#7B7F9C] max-w-full mx-auto mb-6">
                                            Committed to getting your package to its destination on time.
                                        </p>
                                    </div>
                                    <div className="card max-w-sm bg-white rounded-xl shadow-lg p-3 text-center">
                                        <img src={gls} alt="Courier 1" className='w-full' />
                                        <p className="text-[#7B7F9C] max-w-full mx-auto mb-6">
                                            Committed to getting your package to its destination on time.
                                        </p>
                                    </div>
                                    <div className="card max-w-sm bg-white rounded-xl shadow-lg p-3 text-center">
                                        <img src={mor} alt="Courier 1" className='w-full' />
                                        <p className="text-[#7B7F9C] max-w-full mx-auto mb-6">
                                            Committed to getting your package to its destination on time.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === "LTL" && (
                            <div className="flex flex-col justify-center items-center">
                                <h3 className="text-2xl md:text-3xl font-semibold mb-3 text-[#11181C]">
                                    Reliable <span className="ha_gradient_text">LTL (Less Than Truckload)</span> Partner Solutions
                                </h3>
                                <p className="text-[#7B7F9C] max-w-full mx-auto mb-6">
                                    Optimize your freight shipping with MGC Freight’s LTL services. We provide cost-effective and flexible solutions, ensuring your smaller shipments are delivered safely and on time, no matter the destination.
                                </p>
                                <button
                                    className="text-white rounded-2xl border-3 bg-[#7C4EAF] px-5 py-3  hover:bg-[#fff] hover:text-[#7C4EAF] transition-colors flex items-center gap-2"
                                >
                                    Get Started Today
                                    <MdKeyboardDoubleArrowRight />
                                </button>
                            </div>
                        )}

                        {activeTab === "Brokers" && (
                            <div className="flex flex-col justify-center items-center">
                                <h3 className="text-2xl md:text-3xl font-semibold mb-3 text-[#11181C]">
                                    The <span className="ha_gradient_text">Ultimate Platform</span> for Freight Brokers
                                </h3>
                                <p className="text-[#7B7F9C] max-w-full mx-auto mb-6">
                                    Streamline your operations with MGC Freight’s broker-friendly solutions. We offer efficient tools and reliable support to help you manage shipments, connect with carriers, and ensure seamless deliveries for your clients.
                                </p>
                                <button
                                    className="text-white rounded-2xl border-3 bg-[#7C4EAF] px-5 py-3  hover:bg-[#fff] hover:text-[#7C4EAF] transition-colors flex items-center gap-2"
                                >
                                    Get Started Today
                                    <MdKeyboardDoubleArrowRight />
                                </button>
                            </div>
                        )}

                        {activeTab === "Spot Quote" && (
                            <div className="flex flex-col justify-center items-center">
                                <h3 className="text-2xl md:text-3xl font-semibold mb-3 text-[#11181C]">
                                    Fast, Reliable Spot Quotes to <span className="ha_gradient_text">Simplify Your</span> Freight Booking
                                </h3>
                                <p className="text-[#7B7F9C] max-w-full mx-auto mb-6">
                                    MGC Freight eliminates the hassle of spot quoting, reducing your workload and boosting efficiency. Looking for PTL or FTL services? Let us connect you with the best options and pricing through our trusted carrier network!
                                </p>
                                <button
                                    className="text-white rounded-2xl border-3 bg-[#7C4EAF] px-5 py-3  hover:bg-[#fff] hover:text-[#7C4EAF] transition-colors flex items-center gap-2"
                                >
                                    Get Started Today
                                    <MdKeyboardDoubleArrowRight />
                                </button>
                            </div>
                        )}

                        {activeTab === "Claims" && (
                            <div className="flex flex-col justify-center items-center">
                                <h3 className="text-2xl md:text-3xl font-semibold mb-3 text-[#11181C]">
                                    Simplified and Swift <span className="ha_gradient_text">Claims Resolution</span>
                                </h3>
                                <p className="text-[#7B7F9C] max-w-full mx-auto mb-6">
                                    Optimize your freight shipping with MGC Freight’s LTL services. We provide cost-effective and flexible solutions, ensuring your smaller shipments are delivered safely and on time, no matter the destination.
                                </p>
                                <button
                                    className="text-white rounded-2xl border-3 bg-[#7C4EAF] px-5 py-3  hover:bg-[#fff] hover:text-[#7C4EAF] transition-colors flex items-center gap-2"
                                >
                                    Get Started Today
                                    <MdKeyboardDoubleArrowRight />
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SolutionsSection