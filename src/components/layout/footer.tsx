import React from 'react'
import FooterMarque from './FooterMarque';
import { FaPhoneAlt, FaInstagram } from "react-icons/fa";
import { BsShare, BsYoutube } from "react-icons/bs";
import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import logo from "../../assets/images/logo.svg";
import { FaShare } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

const Footer = () => {
    return (
        <>
            <FooterMarque />
            <div className="footer container mx-auto py-10 md:py-20 px-6 bg-white">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12">
                    <div className="flex flex-col gap-6 items-start">
                        <img src={logo} className="pb-4 w-40 md:w-48" />
                        <p className="text-[#7B7F9C]">Stay Connected With Us</p>
                        <div className="flex gap-3 text-icon flex-wrap">
                            <a target="_blank" href="https://www.youtube.com" rel="noopener noreferrer">
                                <BsYoutube />
                            </a>
                            <a target="_blank" href="https://www.twitter.com" rel="noopener noreferrer">
                                <FaTwitter />
                            </a>
                            <a target="_blank" href="https://www.facebook.com" rel="noopener noreferrer">
                                <FaFacebookF />
                            </a>
                            <a target="_blank" href="https://www.instagram.com" rel="noopener noreferrer">
                                <FaInstagram />
                            </a>
                            <a target="_blank" href="https://www.linkedin.com" rel="noopener noreferrer">
                                <FaLinkedinIn />
                            </a>
                        </div>
                        <a className="bg-transparent border-[#7C4EAF] border-2 text-lg font-semibold text-[#7C4EAF] w-max p-2 rounded-xl">
                            Get Quick Quote
                        </a>
                        <a className="bg-transparent border-[#7C4EAF] border-2 text-lg font-semibold text-[#7C4EAF] w-max p-2 rounded-xl">
                            Book a Demo
                        </a>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="text-[#7C4EAF] text-2xl font-normal">Services</p>
                        <a className="text-[#7B7F9C]" href="#">Less Than Truckload (LTL)</a>
                        <a className="text-[#7B7F9C]" href="#">Courier Services</a>
                        <a className="text-[#7B7F9C]" href="#">Specialized Freight</a>
                        <a className="text-[#7B7F9C]" href="#">International Shipping</a>
                        <a className="text-[#7B7F9C]" href="#">White Glove Services</a>
                        <a className="text-[#7B7F9C]" href="#">Spot Quote</a>
                        <a className="text-[#7B7F9C]" href="#">Fulfillment Services</a>
                        <a className="text-[#7B7F9C]" href="#">Freight Forwarding</a>
                        <a className="text-[#7B7F9C]" href="#">Truckload</a>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="text-[#7C4EAF] text-2xl font-normal">About Us</p>
                        <a className="text-[#7B7F9C]" href="#">Who We Are</a>
                        <a className="text-[#7B7F9C]" href="#">Contact Us</a>
                        <a className="text-[#7B7F9C]" href="#">Careers</a>
                        <a className="text-[#7B7F9C]" href="#">Customer Spotlight</a>
                        <p className="text-[#7C4EAF] text-2xl font-normal">Quick Links</p>
                        <a className="text-[#7B7F9C]" href="#">Terms & Conditions</a>
                        <a className="text-[#7B7F9C]" href="#">Privacy Policy</a>
                        <a className="text-[#7B7F9C]" href="#">Claims</a>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="text-[#7C4EAF] text-2xl font-normal">Partnership</p>
                        <a className="text-[#7B7F9C]" href="#">Broker Partners</a>
                        <a className="text-[#7B7F9C]" href="#">Corporate Partners</a>
                        <a className="text-[#7B7F9C]" href="#">Carrier Partners</a>
                        <p className="text-[#7C4EAF] text-2xl font-normal pt-8">Resources</p>
                        <a className="text-[#7B7F9C]" href="#">Video Library</a>
                        <a className="text-[#7B7F9C]" href="#">Blogs</a>
                        <a className="text-[#7B7F9C]" href="#">Shipping Guides</a>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="text-[#7C4EAF] text-2xl font-normal">Social</p>
                        <div className="flex gap-4 flex-wrap items-start">
                            <FaShare />
                            <div className="flex flex-col gap-2">
                                <p className="font-semibold">Email</p>
                                <p>marketing@mgcfreight.com</p>
                            </div>
                        </div>
                        <div className="flex gap-4 flex-wrap items-start">
                            <IoCall />
                            <div className="flex flex-col gap-2">
                                <p className="font-semibold">Phone</p>
                                <p>+1 (289) 295-1640</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_bottom">
                <div className="container mx-auto p-4 text-left">
                    <p className="text-sm sm:text-base">©2025 Copyright MGCFREIGHT Inc. All rights reserved</p>
                </div>
            </div>
        </>
    )
}

export default Footer
