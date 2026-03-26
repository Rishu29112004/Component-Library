import React, { useEffect, useState } from "react";

// api end point => https://dummyjson.com/products

const ApiCalling = () => {
  const [apiData, setApiData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        console.log(data);
        setApiData(data.products);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const itemsPerPage = 6;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const visibleData = apiData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(apiData.length / itemsPerPage);

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="min-h-screen bg-blue-300 p-10">
      <h1 className="underline flex items-center justify-center text-2xl font-bold text-gray-900">
        Data comes from api bro!
      </h1>
      <div className="border p-5 h-[600px] grid grid-cols-2">
        {visibleData.map((t) => (
          <div key={t.id} className="p-4 w-[400px]">
            <p className="text-gray-600 font-bold text-lg ">{t.title}</p>
            <p className="text-gray-400 font-bold text-sm ">{t.description}</p>
          </div>
        ))}
      </div>


      <div className="flex gap-5 pt-5 justify-center items-center">
        <button
          onClick={handlePrev}
          className="bg-blue-500 text-white font-semibold text-xl px-3 rounded-md"
        >
          Left
        </button>
        <div className="flex gap-3 items-center justify-center">
          {pageNumbers.map((num) => (
            <button
              key={num}
              onClick={() => handlePageClick(num)}
              className={`px-3 py-1 rounded-md ${
                currentPage === num ? "bg-black text-white" : "bg-gray-300"
              }`}
            >
              {num}
            </button>
          ))}
        </div>
        <button
          onClick={handleNext}
          className="bg-blue-500 text-white font-semibold text-xl px-3 rounded-md"
        >
          Right
        </button>
      </div>
    </div>
  );
};

export default ApiCalling;
