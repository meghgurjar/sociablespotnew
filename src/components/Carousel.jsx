import React from "react";

const Card = () => {
  return (
    <div className="flex space-x-4">
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-[#D2F6D5]"
        >
          <img
            className="w-full"
            src="https://via.placeholder.com/300" // Replace with your image source
            alt="Desk setup"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              How Mental Health Consultants Can Help...
            </div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet consectetur. Convallis est urna
              adipiscing fringilla nulla.
            </p>
          </div>
        </div>  
      ))}
    </div>
  );
};

export default Card;
