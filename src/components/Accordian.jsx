import React, { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react"; // Replace with your icon library

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="mx-auto max-w-3xl space-y-4 md:mt-0">
      

      
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={i + 1}
          className="cursor-pointer rounded-md border border-gray-400 shadow-lg transition-all duration-200 bg-[#D2F6D5]"
          onClick={() => toggleAccordion(i + 1)}
        >
          <button
            type="button"
            className="flex w-full  items-center  justify-between px-4 py-5 sm:p-6 "
          > 
            <span className="text-lg font-semibold text-black" >
              {i + 1 === 1 && " What services does Sociable Spot offer ?"}
              {i + 1 === 2 && "How can I access consultations with doctors?"}
              {i + 1 === 3 && "What makes Sociable Spot different from other platforms?"}
            </span>
            {activeIndex === i + 1 ? (
              <ChevronUp className="h-5 w-5 text-gray-500" />
            ) : (
              <ChevronDown className="h-5 w-5 text-gray-500" />
            )}
          </button>
          {activeIndex === i + 1 && (
            <div className="px-4 pb-5 sm:px-6 sm:pb-6">
              <p className="text-gray-500">
                {i + 1 === 1 &&
                  "Sociable Spot provides a range of services including expert consultations with doctors, a therapeutic AI bot for mental well-being, and engaging Inner Circle activities designed to foster community and personal growth."}
                {i + 1 === 2 &&
                  "You can access doctor consultations through our platform by scheduling an appointment via our user-friendly interface. Simply log in, select your preferred specialist, and choose a convenient time for your consultation."}
                {i + 1 === 3 &&
                  "Sociable Spot stands out with its holistic approach to well-being, combining a supportive community, innovative AI technology, and expert care in one accessible platform. Our focus on creating a safe and engaging environment sets us apart, ensuring a comprehensive support system for your mental and emotional health."}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
