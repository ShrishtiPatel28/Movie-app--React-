// import React from "react";
// import { Link, useNavigate } from "react-router-dom";

// const PeopleCard = ({ actors }) => {
//   return (
//     <div className="w-full h-[310] p-5 pt-2">
//       <div className=" ">
//         <div className="card-container  flex flex-row gap-[30px] overflow-x-auto ml-3">
//           {actors.map((details, id) => {
//             return (
//               <Link
//                 key={id}
//                 to={`/detailspeople/${details.id}`}
//                 className="card min-w-[180px] max-w-[180px] h-[260px] border border-zinc-700 p-5 hover:border-zinc-400 relative overflow-hidden"
              
//               >
//                 <img
//                   src={details.photo}
//                   alt={details.title}
//                   className="w-[190px] h-[200px] object-cover "
//                 />
//                 <h2 className="text-white text-center pt-2 font-semibold text-[16px] tracking-wide">
//                   {details.name.slice(0, 14)}
//                 </h2>
//               </Link>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PeopleCard;




import React from "react";
import { Link } from "react-router-dom";

const PeopleCard = ({ actors }) => {
  return (
    <div className="w-full h-auto p-4 sm:p-5">
      <div className="overflow-x-auto">
        <div className="flex gap-4 sm:gap-6 md:gap-8 px-2">
          {actors.map((details, id) => (
            <Link
              key={id}
              to={`/detailspeople/${details.id}`}
              className="min-w-[160px] sm:min-w-[180px] max-w-[180px] h-[260px] border border-zinc-700 p-4 hover:border-zinc-400 transition duration-200 ease-in-out"
            >
              <img
                src={details.photo}
                alt={details.name}
                className="w-full h-[180px] object-cover hover:scale-105 transition duration-150"
              />
              <h2 className="text-white text-center pt-2 font-semibold text-[14px] sm:text-[16px] tracking-wide">
                {details.name.slice(0, 16)}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PeopleCard;
