import React from "react";

const Card = (props) => {
  return (
    <div
      className="
        group
        p-4 max-w-lg mx-auto my-4
        bg-white shadow-lg rounded-lg overflow-hidden
        transform transition duration-300
        hover:scale-105 hover:bg-blue-800
      "
    >
      <div className="px-6 py-4 flex flex-col justify-center items-center">
        {/* icon turns white on hover */}
        <div className="transition-colors duration-300 group-hover:text-white">
          {props.icon}
        </div>

        <div className="mt-4">
          {/* title turns white on hover */}
          <div
            className="
              font-bold text-2xl mb-2 text-center text-gray-800
              transition-colors duration-300 group-hover:text-white
            "
          >
            {props.title}
          </div>

          {/* content turns white on hover */}
          <p
            className="
              text-gray-700 text-base mt-2 text-center
              transition-colors duration-300 group-hover:text-white
            "
          >
            {props.content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
