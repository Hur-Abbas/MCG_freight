import React from 'react'
import img from "../../assets/images/beforefooterimg.svg";
import { Form, Input, Button, Checkbox } from "@heroui/react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const BeforeFooter = () => {
  return (
    <div className="bg-linear-blue">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col gap-6 px-6 sm:px-10 lg:px-30 pt-10 sm:pt-20 lg:pt-30 pb-10 sm:pb-16 lg:pb-20">
          <img src="https://mgcfreight.com/logo-fullWhite.svg" className="w-40 sm:w-48 md:w-56 lg:w-fit" />
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">REFINING TRANSPORTATION</h1>

          <form className="flex flex-col gap-4 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-white text-sm mb-1">First Name</label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-3 py-2 rounded-lg border-none border-gray-300 bg-[#F4F4F5] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-white text-sm mb-1">Last Name</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-3 py-2 rounded-lg border-none border-gray-300 bg-[#F4F4F5] focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-white text-sm mb-1">Phone Number</label>
                <input
                  type="text"
                  placeholder="+114155550198"
                  className="w-full px-3 py-2 rounded-lg border-none border-gray-300 bg-[#F4F4F5] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-white text-sm mb-1">Work Email</label>
                <input
                  type="email"
                  placeholder="Work Email"
                  className="w-full px-3 py-2 rounded-lg border-none border-gray-300 bg-[#F4F4F5] focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-white text-sm mb-1">Company Name</label>
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full px-3 py-2 rounded-lg border-none border-gray-300 bg-[#F4F4F5] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-white text-sm mb-1">MC / DOT / Registration Number</label>
                <input
                  type="text"
                  placeholder="# 000000"
                  className="w-full px-3 py-2 rounded-lg border-none border-gray-300 bg-[#F4F4F5] focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-white text-sm mb-1">Carrier package</label>
              <div className="w-full border border-gray-300 rounded-xl py-6 flex justify-center items-center bg-[#F4F4F5] ">
                <button
                  type="button"
                  className="text-sm bg-white px-4 py-2 rounded-xl hover:bg-gray-200"
                >
                  Browse Files
                </button>
              </div>
            </div>
            <div className="text-left">
              <Button className="text-white rounded-2xl bg-[#7C4EAF] px-5 py-3 hover:bg-[#fff] hover:text-[#7C4EAF] transition-colors flex items-center gap-4">
                Contact Us <MdKeyboardDoubleArrowRight />
              </Button>
            </div>
          </form>
        </div>

        <div className="flex justify-center lg:justify-end items-end mt-10 lg:mt-0">
          <img src={img} className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[85%]" />
        </div>
      </div>
    </div>
  );
};

export default BeforeFooter;
