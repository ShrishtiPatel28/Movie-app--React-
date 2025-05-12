// import React from "react";
// import { Link } from "react-router-dom";

// const CardsAll = ({ movies }) => {
//   return (
//     <div className="w-full h-[310px] p-5 pt-2">
//       <div className="">
//         <div className="card-container flex flex-row gap-[30px] overflow-x-auto ml-3">
//           {movies.map((element, index) => {
//             return (
//               <Link
//                 to={`/details/${element.id}`}
//                 key={index}
//                 className="card min-w-[180px] max-w-[180px] h-[260px] border border-zinc-700 p-5 hover:border-zinc-400 relative overflow-hidden"
//               >
//                 <img
//                   src={element.Images}
//                   className="w-full h-[150px] object-cover hover:scale-105 duration-125"
//                 />
//                 <h2 className="text-white text-center pt-2 font-bold text-[16px] tracking-wider">
//                   {element.title.slice(0, 12)}
//                 </h2>
//                 <h6 className="text-red-700 text-center font-semibold text-[13px] -mt-[3px] capitalize italic tracking-tighter">
//                   {element.category}
//                 </h6>
//                 <div className="flex flex-row gap-8 justify-center pt-1">
//                   <h6 className="text-zinc-300 text-[12px] font-normal italic">
//                     <i className="ri-calendar-fill text-xs text-yellow-500 mr-[3px]"></i>
//                     {element.Year}
//                   </h6>
//                   <h6 className="text-zinc-300 text-[12px] font-normal">
//                     <i className="ri-timer-line text-xs mr-[3px] text-yellow-500 italic"></i>
//                     {element.Runtime}
//                   </h6>
//                 </div>
//               </Link>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CardsAll;

import React from "react";
import { Link } from "react-router-dom";

const CardsAll = ({ movies }) => {
  return (
    <div className="w-full h-auto p-4 sm:p-5">
      <div className="overflow-x-auto">
        <div className="flex gap-4 sm:gap-6 md:gap-8 overflow-x-auto px-2">
          {movies.map((element, index) => (
            <Link
              to={`/details/${element.id}`}
              key={index}
              className="min-w-[160px] sm:min-w-[180px] max-w-[180px] h-[260px] border border-zinc-700 p-4 hover:border-zinc-400 transition duration-200 ease-in-out"
            >
              <img
                src={element.Images}
                alt={element.title}
                className="w-full h-[140px] object-cover hover:scale-105 transition duration-150"
              />
              <h2 className="text-white text-center pt-2 font-bold text-[14px] sm:text-[16px] tracking-wide">
                {element.title.slice(0, 14)}
              </h2>
              <h6 className="text-red-700 text-center font-semibold text-[12px] sm:text-[13px] capitalize italic">
                {element.category}
              </h6>
              <div className="flex justify-center gap-4 pt-1">
                <h6 className="text-zinc-300 text-[11px] sm:text-[12px] italic">
                  <i className="ri-calendar-fill text-xs text-yellow-500 mr-1"></i>
                  {element.Year}
                </h6>
                <h6 className="text-zinc-300 text-[11px] sm:text-[12px] italic">
                  <i className="ri-timer-line text-xs text-yellow-500 mr-1"></i>
                  {element.Runtime}
                </h6>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardsAll;
