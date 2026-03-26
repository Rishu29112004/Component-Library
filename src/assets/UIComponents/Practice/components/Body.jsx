import React, { useEffect, useState } from "react";

const Images = [
  {
    id: 1,
    img: "https://picsum.photos/id/1011/600/400",
  },
  {
    id: 2,
    img: "https://picsum.photos/id/1015/600/400",
  },
  {
    id: 3,
    img: "https://picsum.photos/id/1016/600/400",
  },
  {
    id: 4,
    img: "https://picsum.photos/id/1020/600/400",
  },
  {
    id: 5,
    img: "https://picsum.photos/id/1024/600/400",
  },
];

const Body = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const result = setInterval(() => {
      setCurrentIndex((prev) => (prev == Images.length - 1 ? 0 : prev + 1));
    }, 2000);

    return () => {
      clearInterval(result);
    };
  }, []);

  return (
    <div className="bg-gray-200 min-h-screen gap-5 flex flex-col items-center justify-center">
      <div className="flex gap-5">
        <img src={Images[currentIndex].img} alt="" />
      </div>

      <div className="flex gap-3">
        {Array.from({ length: 5 }).map((_, index) => (
          <div onClick={()=>setCurrentIndex(index)} className={`${currentIndex===index?"bg-blue-500":"bg-gray-500"} w-5 h-5 rounded-full`} key={index}></div>
        ))}
      </div>
    </div>
  );
};

export default Body;
