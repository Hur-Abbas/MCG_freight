import React from 'react'
import success from '../../assets/images/hands.svg';
import leading from '../../assets/images/leading.svg';
import pioneer from '../../assets/images/pioneer.svg';
import mindset from '../../assets/images/mindset.svg';
import approach from '../../assets/images/approach.svg';

const Reasontochoose = () => {

  const reasons = [
    {
      img: <img src={success} alt="Success Together" className="w-14 sm:w-16 mx-auto lg:mx-0" />,
      title: "Success Together",
      description:
        "We do big things when we are inclusive and work together. To perform with excellence, we learn from one another, value diverse perspectives, operate safely, and build strong relationships. We welcome everyone regardless of background, identity or ability.",
    },
    {
      img: <img src={leading} alt="Leading Results" className="w-14 sm:w-16 mx-auto lg:mx-0" />,
      title: "Leading Results",
      description:
        "Customers, carriers, stakeholders and colleagues demand best-in-class performance, so we never stop listening, understanding needs, and executing with integrity. We make transportation simpler and more effective for everyone.",
    },
    {
      img: <img src={pioneer} alt="Pioneering Spirit" className="w-14 sm:w-16 mx-auto lg:mx-0" />,
      title: "Pioneering Spirit",
      description:
        "We’re passionate about creating cutting-edge technologies and solutions that connect customers and carriers with the right capacity. We always look boldly ahead to what’s next.",
    },
    {
      img: <img src={mindset} alt="Entrepreneurial Mindset" className="w-14 sm:w-16 mx-auto lg:mx-0" />,
      title: "Entrepreneurial Mindset",
      description:
        "We know the success of our customers, carriers and company is in our hands. We take it upon ourselves to solve problems and outperform.",
    },
    {
      img: <img src={approach} alt="Agile Approach" className="w-14 sm:w-16 mx-auto lg:mx-0" />,
      title: "Agile Approach",
      description:
        "We move quickly and adapt easily. We leverage technology, data and expertise to anticipate and create the right capacity where it’s needed.",
    },
     {
      img: <img src={mindset} alt="Entrepreneurial Mindset" className="w-14 sm:w-16 mx-auto lg:mx-0" />,
      title: "Entrepreneurial Mindset",
      description:
        "We know the success of our customers, carriers and company is in our hands. We take it upon ourselves to solve problems and outperform.",
    },
  ];

  return (
    <>
      <section className="reasonstochoose bg-[#F5F8FF]">
        <div className="container mx-auto text-center py-12 sm:py-16 md:py-20 px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 leading-snug">
            Some Reasons To <span className="ha_gradient_text">Choose Us</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-10">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="reason_card bg-white p-6 sm:p-8 rounded-xl shadow-lg text-center sm:text-left hover:shadow-xl transition-all duration-300"
              >
                <div className="pb-4 flex justify-center sm:justify-start">{reason.img}</div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 ha_gradient_text">{reason.title}</h3>
                <p className="text-sm sm:text-base text-[#7B7F9C] leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Reasontochoose;
