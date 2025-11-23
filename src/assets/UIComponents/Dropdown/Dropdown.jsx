import React, { useState } from 'react'
import Button from '../Button/Button'

const Dropdown = () => {

  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    alert("Submitted");
    setInputValue("")
  };

  return (
    <div className="bg-gray-100 w-full min-h-screen flex items-center justify-center">
      
      {/* Card */}
      <div className="bg-white shadow-xl p-8 rounded-2xl flex items-center gap-12">

        {/* Dropdown Box */}
        <div className="flex flex-col">
          <label className="font-mono text-lg font-bold mb-1">Select a Fruit</label>

          <select
            onChange={(e) => setInputValue(e.target.value)}
            className="font-mono text-xl px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Choose...</option>
            <option value="Apple">Apple 🍎</option>
            <option value="Banana">Banana 🍌</option>
            <option value="Orange">Orange 🍊</option>
            <option value="Pineapple">Pineapple 🍍</option>
            <option value="Grapes">Grapes 🍇</option>
          </select>
        </div>

        {/* Result Box */}
        <div className="flex flex-col">
          <p className="font-mono text-lg font-bold">Result</p>

          <p className="font-mono text-2xl px-3 py-1 border border-gray-600 rounded-lg text-blue-600 bg-blue-50 mt-1">
            {inputValue || "None"}
          </p>
        </div>

        {/* Button */}
        <div>
          <Button
            onClick={handleSubmit}
            buttonName="Submit"
            className="rounded-lg font-bold font-mono text-white bg-blue-600 px-6 py-2 hover:bg-blue-700 transition"
          />
        </div>

      </div>
    </div>
  );
};

export default Dropdown;
