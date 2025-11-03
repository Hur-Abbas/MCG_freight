import React from 'react'
import { Accordion, AccordionItem } from "@heroui/react";

const FAQs = () => {
   
    const faqData = [
        {
            id: 1,
            question: "How do I create a new shipment order through MGC Freight?",
            answer: "To create a new shipment, log into your account and click on the 'Create New Shipment' button. Fill in the necessary details, such as destination and shipment type, and submit the order.",
        },
        {
            id: 2,
            question: "What types of freight services are available through MGC Freight for my business needs?",
            answer: "We offer air, sea, and ground shipping services, each designed to optimize cost, time, and reliability for your specific logistics requirements.",
        },
        {
            id: 3,
            question: "How can I track the status of my shipment in real-time using your platform?",
            answer: "To create a new shipment, log into your account and click on the 'Create New Shipment' button. Fill in the necessary details, such as destination and shipment type, and submit the order.",
        },
        {
            id: 4,
            question: "Does MGC Freight handle international shipments?",
            answer: "Absolutely! We manage both domestic and international freight services across multiple regions.",
        },
    ];

    return (
        <div className="py-10 sm:py-14 md:py-16 px-4 sm:px-6 md:px-10">
            <div className="container mx-auto max-w-[1280px]">
                <div className="flex flex-col items-center text-center gap-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-normal">
                        Frequently Asked <span className="ha_gradient_text">Questions</span>
                    </h2>
                    <p className="text-sm sm:text-base text-[#7B7F9C] mb-3 leading-normal max-w-xl">
                        Get quick answers to your questions and streamline your freight experience with MGC Freight.
                    </p>
                </div>
                <div className="ha_accordian mt-4 sm:mt-6 md:mt-8">
                    <Accordion variant="splitted">
                        {faqData.map((e) => (
                            <AccordionItem
                                key={e.id}
                                aria-label={`Accordion ${e.id}`}
                                title={e.question}
                                className="bg-white shadow-lg rounded-xl text-left border border-gray-200 font-semibold text-sm sm:text-base"
                            >
                                <p className="text-[#596C8D] font-normal text-sm sm:text-base">{e.answer}</p>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </div>
    )
}

export default FAQs
