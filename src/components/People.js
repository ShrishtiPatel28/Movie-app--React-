// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Button from "./templates/Button";

// const People = ({ actors }) => {
//   document.title = "App | PeoplePage";

//   const navigate = useNavigate();

//   return (
//     <div className="w-full h-auto px-9 py-4">
//       <div className="container flex flex-wrap gap-4 w-[100%] h-auto ">
//         <div className="nav w-full h-[45px] flex flex-row gap-4">
//         <Button/>
//         <h2 className="text-2xl font-bold text-white mb-5">Peoples</h2>
    
//         </div>
//         {actors.map((details, id) => {
//           return (
//             <Link
//               key={id}
//               to={`/detailspeople/${details.id}`}
//               className="movie-card w-[200px] h-[270px] border border-zinc-700 p-5 hover:border-zinc-400 relative overflow-hidden"
//             >
//               <img
//                 src={details.photo}
//                 alt={details.title}
//                 className="w-[190px] h-[200px] object-cover "
//               />
//               <h2 className="text-white text-center pt-2 font-semibold text-[16px] tracking-wide">
//                 {details.name.slice(0, 14)}
//               </h2>
//             </Link>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default People;


//responsive code 👇🏻
 
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "./templates/Button";

const People = ({ actors }) => {
  document.title = "App | PeoplePage";

  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen px-4 py-4 bg-black">
      {/* Navigation Bar */}
      <div className="container flex flex-col md:flex-row gap-4 w-full mb-6">
        <Button />
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-0">
          Peoples
        </h2>
      </div>

      {/* Actors Cards */}
      <div className="flex flex-wrap gap-6 justify-center sm:justify-start">
        {actors.map((details, id) => {
          return (
            <Link
              key={id}
              to={`/detailspeople/${details.id}`}
              className="actor-card w-[160px] sm:w-[180px] md:w-[200px] h-auto border border-zinc-700 p-4 hover:border-zinc-400 relative overflow-hidden"
            >
              <img
                src={details.photo}
                alt={details.name}
                className="w-full h-[180px] object-cover"
              />
              <h2 className="text-white text-center pt-2 font-semibold text-[14px] sm:text-[16px] tracking-wide">
                {details.name.slice(0, 14)}
              </h2>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default People;
