import React, { useState } from "react";
import dashboard1 from "../../assets/images/mockups/dashboard1.svg";
import dashboard2 from "../../assets/images/mockups/dashboard2.svg";
import dashboard3 from "../../assets/images/mockups/dashboard3.svg";
import quick1 from "../../assets/images/mockups/quick1.svg";
import quick2 from "../../assets/images/mockups/quick2.svg";
import quick3 from "../../assets/images/mockups/quick3.svg";
import quotes1 from "../../assets/images/mockups/quotes1.svg";
import quotes2 from "../../assets/images/mockups/quotes2.svg";
import quotes3 from "../../assets/images/mockups/quotes3.svg";
import tracking1 from "../../assets/images/mockups/tracking1.svg";
import tracking2 from "../../assets/images/mockups/tracking2.svg";
import tracking3 from "../../assets/images/mockups/tracking3.svg";

const Poweredby = () => {
  const tabs = ["Dashboard", "Real-time Quotes", "Tracking", "Create Quick Quote"];
  const [activeTab, setActiveTab] = useState("Dashboard");

  return (
    <>
      <div className="ha_solutions bg-[#F5F8FF]">
        <div className="w-full max-w-full mx-auto py-10 sm:py-14 md:py-20 px-4 sm:px-6 text-center flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 leading-snug max-w-3xl">
            Powered by Our Robust, Innovative Shipping{" "}
            <span className="ha_gradient_text">Management Platform</span>
          </h2>

          <div className="ha_solutions_tab flex flex-wrap justify-center p-1 mb-10 max-w-full gap-2 sm:gap-3">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 sm:px-6 py-2 text-xs sm:text-sm font-medium transition-all duration-200 rounded-md 
                  ${activeTab === tab
                    ? "bg-active text-[#324878]"
                    : "bg-non-active text-gray-600"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="text-center max-w-7xl w-full ">
            {activeTab === "Dashboard" && (
              <div className="w-full flex flex-col sm:flex-row justify-center items-center relative gap-4 sm:gap-0">
                <img
                  className="w-[80%] sm:w-[50%] rotate-0 sm:rotate-[-4deg] flex-1 object-cover relative z-20"
                  src={dashboard1}
                />
                <img
                  className="w-[80%] sm:w-[50%] rotate-0 sm:rotate-[4deg] flex-1 object-cover relative z-20"
                  src={dashboard2}
                />
                <img
                  className="absolute sm:left-[25%] top-1/2 sm:top-auto -translate-y-1/2 sm:translate-y-0 w-[85%] sm:w-[50%] scale-105 sm:scale-110 z-50"
                  src={dashboard3}
                />
              </div>
            )}

            {activeTab === "Real-time Quotes" && (
              <div className="w-full flex flex-col sm:flex-row justify-center items-center relative gap-4 sm:gap-0">
                <img
                  className="w-[80%] sm:w-[50%] rotate-0 sm:rotate-[-4deg] flex-1 object-cover relative z-20"
                  src={quick1}
                />
                <img
                  className="w-[80%] sm:w-[50%] rotate-0 sm:rotate-[4deg] flex-1 object-cover relative z-20"
                  src={quick2}
                />
                <img
                  className="absolute sm:left-[25%] top-1/2 sm:top-auto -translate-y-1/2 sm:translate-y-0 w-[85%] sm:w-[50%] scale-105 sm:scale-110 z-50"
                  src={quick3}
                />
              </div>
            )}

            {activeTab === "Tracking" && (
              <div className="w-full flex flex-col sm:flex-row justify-center items-center relative gap-4 sm:gap-0">
                <img
                  className="w-[80%] sm:w-[50%] rotate-0 sm:rotate-[-4deg] flex-1 object-cover relative z-20"
                  src={quotes1}
                />
                <img
                  className="w-[80%] sm:w-[50%] rotate-0 sm:rotate-[4deg] flex-1 object-cover relative z-20"
                  src={quotes2}
                />
                <img
                  className="absolute sm:left-[25%] top-1/2 sm:top-auto -translate-y-1/2 sm:translate-y-0 w-[85%] sm:w-[50%] scale-105 sm:scale-110 z-50"
                  src={quotes3}
                />
              </div>
            )}

            {activeTab === "Create Quick Quote" && (
              <div className="w-full flex flex-col sm:flex-row justify-center items-center relative gap-4 sm:gap-0">
                <img
                  className="w-[80%] sm:w-[50%] rotate-0 sm:rotate-[-4deg] flex-1 object-cover relative z-20"
                  src={tracking1}
                />
                <img
                  className="w-[80%] sm:w-[50%] rotate-0 sm:rotate-[4deg] flex-1 object-cover relative z-20"
                  src={tracking2}
                />
                <img
                  className="absolute sm:left-[25%] top-1/2 sm:top-auto -translate-y-1/2 sm:translate-y-0 w-[85%] sm:w-[50%] scale-105 sm:scale-110 z-50"
                  src={tracking3}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Poweredby;
