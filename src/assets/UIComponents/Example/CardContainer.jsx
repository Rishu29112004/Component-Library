import React from "react";

const CardContainer = ({ name, title, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-5 hover:scale-105 transition transform duration-300">
      <h2 className="text-xl font-bold text-gray-800">{name}</h2>
      <p className="text-sm text-green-700 font-semibold mt-1">{title}</p>
      <p className="text-gray-600 mt-2 text-sm">{description}</p>
    </div>
  );
};

export default CardContainer;
