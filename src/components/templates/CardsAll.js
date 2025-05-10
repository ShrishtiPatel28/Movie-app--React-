import React from "react";
import { Link } from "react-router-dom";

const CardsAll = ({ movies }) => {
  return (
    <div className="w-full h-[310px] p-5 pt-2">
      <div className="">
        <div className="card-container flex flex-row gap-[30px] overflow-x-auto ml-3">
          {movies.map((element, index) => {
            return (
              <Link
                to={`/details/${element.id}`} 
                key={index}
                className="card min-w-[180px] max-w-[180px] h-[260px] border border-zinc-700 p-5 hover:border-zinc-400 relative overflow-hidden"
              >
                <img
                  src={element.Images}
                  className="w-full h-[150px] object-cover hover:scale-105 duration-125"
                />
                <h2 className="text-white text-center pt-2 font-bold text-[16px] tracking-wider">
                  {element.title.slice(0, 12)}
                </h2>
                <h6 className="text-red-700 text-center font-semibold text-[13px] -mt-[3px] capitalize italic tracking-tighter">
                  {element.category}
                </h6>
                <div className="flex flex-row gap-8 justify-center pt-1">
                  <h6 className="text-zinc-300 text-[12px] font-normal italic">
                    <i className="ri-calendar-fill text-xs text-yellow-500 mr-[3px]"></i>
                    {element.Year}
                  </h6>
                  <h6 className="text-zinc-300 text-[12px] font-normal">
                    <i className="ri-timer-line text-xs mr-[3px] text-yellow-500 italic"></i>
                    {element.Runtime}
                  </h6>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CardsAll;
