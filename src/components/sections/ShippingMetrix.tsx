import React from 'react'
import shippingmetrix from "../../assets/images/shippingmetrics.svg";
import metrixicon1 from "../../assets/images/metrixicon1.svg";
import metrixicon2 from "../../assets/images/metrixicon2.svg";

const ShippingMetrix = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 container mx-auto gap-10 lg:gap-14 py-10 sm:py-14 md:py-20 px-4 sm:px-6 ">
      <div className="img-col flex justify-center lg:justify-start">
        <img src={shippingmetrix} className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-full h-auto object-contain" />
      </div>

      <div className="content-col flex flex-col gap-4 text-center lg:text-left items-center lg:items-start">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-normal">
          Your <span className="ha_gradient_text">Shipping Metrics</span>, Simplified
        </h2>
        <p className="text-sm sm:text-base text-[#7B7F9C] mb-3 max-w-2xl">
          Gain real-time insights into your shipping performance with detailed metrics, helping you track, analyze, and optimize every aspect of your freight operations.
        </p>

        <div className="flex flex-col sm:flex-row w-full sm:w-[85%] justify-center lg:justify-start gap-6 sm:gap-8">
          <div className="icon_box flex flex-col gap-1 justify-start items-center lg:items-start text-center lg:text-left">
            <img src={metrixicon1} className="mb-2 w-10 sm:w-12" />
            <h2 className="font-semibold text-lg sm:text-xl">Best Rates</h2>
            <p className="text-sm sm:text-base text-[#7B7F9C] mb-3">
              Best Shipping rates across all the freights
            </p>
          </div>

          <div className="icon_box flex flex-col gap-1 justify-start items-center lg:items-start text-center lg:text-left">
            <img src={metrixicon2} className="mb-2 w-10 sm:w-12" />
            <h2 className="font-semibold text-lg sm:text-xl">15% at Least</h2>
            <p className="text-sm sm:text-base text-[#7B7F9C] mb-3">
              Average Shipping Cost Savings
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShippingMetrix
