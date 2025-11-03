import React from 'react'
import shippingmetrix from "../../assets/images/shippingmetrics.svg";
import trackshipment from "../../assets/images/trackshipment.svg";

const Trackshipment = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 container mx-auto gap-10 lg:gap-14 py-10 sm:py-14 md:py-20 px-4 sm:px-6">
      <div className="content-col flex flex-col gap-4 text-center lg:text-left items-center lg:items-start">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-normal">
          Track Your Shipments <span className="ha_gradient_text">Over Time</span>
        </h2>
        <p className="text-sm sm:text-base text-[#7B7F9C] mb-3 max-w-2xl">
          Visualize your shipping trends with interactive graphs, providing you with valuable insights to monitor performance and optimize delivery timelines.
        </p>
        <div className="flex flex-col sm:flex-row w-full sm:w-[80%] lg:w-[70%] gap-6 sm:gap-10 justify-center lg:justify-start">
          <div className="icon_box flex flex-col gap-1 justify-start items-center lg:items-start">
            <h2 className="font-semibold text-2xl sm:text-3xl">15.1K+</h2>
            <p className="text-sm sm:text-base text-[#7B7F9C] mb-3">
              Total Shipments Tracked Overtime
            </p>
          </div>
          <div className="icon_box flex flex-col gap-1 justify-start items-center lg:items-start">
            <h2 className="font-semibold text-2xl sm:text-3xl">105k</h2>
            <p className="text-sm sm:text-base text-[#7B7F9C] mb-3">
              Shipments Delivered Overtime
            </p>
          </div>
        </div>
      </div>
      <div className="img-col flex justify-center lg:justify-end items-center">
        <img src={trackshipment} className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-full h-auto object-contain" />
      </div>
    </div>
  )
}

export default Trackshipment
