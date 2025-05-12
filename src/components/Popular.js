// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Button from "./templates/Button";

// const TrendingMovies = ({ movies }) => {
//   document.title = "App | PopularPage";

//   const [isPopular] = useState(true);
//   const navigate = useNavigate();

//   return (
//     <div className="w-full h-auto p-5 pb-8 bg-black">
//       <div className=" top flex flex-row gap-8 ml-4 fixed top-0 bg-black w-full h-[60px] pt-4 z-[900]">
//         <Button/>
//         <h1 className="text-2xl font-bold text-white ml-5">
//           Popular Movies
//         </h1>
//       </div>
//       <div className=" flex flex-wrap gap-12 mt-16 justify-center items-center">
//         {movies.map((movie) => {
//           const isMoviePopular = isPopular;

//           return (
//             <Link
//               to={`/details/${movie.id}`}
//               key={movie.id}
//               className="movie-card w-[240px] h-[380px] border border-zinc-700 p-5 hover:border-zinc-400 relative overflow-hidden"
//             >
//               {isMoviePopular && (
//                 <>
//                   <div className=" absolute z-[900] -top-2 -left-2 italic text-white bg-red-700 px-4 py-4 rounded-full opacity-90 text-[17px] font-bold">
//                     {movie.imdbRating}
//                   </div>
//                 </>
//               )}
//               <img
//                 src={movie.Images}
//                 alt={movie.title}
//                 className="w-[190px] h-[220px] object-cover  hover:scale-105 duration-125"
//               />
//               <h2 className="text-white text-center pt-2 font-bold text-[16px] tracking-wider">
//                 {movie.title.slice(0, 17)}
//               </h2>
//               <h6 className="text-red-700 text-center font-semibold text-[13px] -mt-[4px] capitalize italic tracking-tighter">
//                 {movie.category}
//               </h6>
//               <div className="flex flex-col pt-1">
//                 <h6 className="text-zinc-300 text-[12px] font-normal italic pt-1">
//                   {movie.Year}
//                 </h6>
//                 <h6 className="text-zinc-300 text-[12px] font-normal pt-1">
//                   Runtime: {movie.Runtime}
//                 </h6>
//                 <h6 className="text-zinc-300 text-[12px] font-normal pt-1">
//                   Director: {movie.Director}
//                 </h6>
//               </div>
//             </Link>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default TrendingMovies;



import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "./templates/Button";

const TrendingMovies = ({ movies }) => {
  document.title = "App | PopularPage";

  const [isPopular] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="w-full h-auto p-5 pb-8 bg-black">
      {/* Navigation Bar */}
      <div className="top flex flex-row gap-8 ml-4 fixed top-0 bg-black w-full h-[60px] pt-4 z-[900]">
        <Button />
        <h1 className="text-2xl sm:text-3xl font-bold text-white ml-5">
          Popular Movies
        </h1>
      </div>

      {/* Movie Cards */}
      <div className="flex flex-wrap gap-8 mt-[80px] justify-center sm:justify-start items-center">
        {movies.map((movie) => {
          const isMoviePopular = isPopular;

          return (
            <Link
              to={`/details/${movie.id}`}
              key={movie.id}
              className="movie-card w-[160px] sm:w-[200px] md:w-[240px] h-auto border border-zinc-700 p-5 hover:border-zinc-400 relative overflow-hidden"
            >
              {/* Popular Badge */}
              {isMoviePopular && (
                <div className="absolute z-[900] -top-2 -left-2 italic text-white bg-red-700 px-4 py-2 rounded-full opacity-90 text-[14px] sm:text-[17px] font-bold">
                  {movie.imdbRating}
                </div>
              )}
              <img
                src={movie.Images}
                alt={movie.title}
                className="w-full h-[220px] object-cover hover:scale-105 duration-125"
              />
              <h2 className="text-white text-center pt-2 font-bold text-[14px] sm:text-[16px] tracking-wider">
                {movie.title.slice(0, 17)}
              </h2>
              <h6 className="text-red-700 text-center font-semibold text-[12px] sm:text-[13px] -mt-[4px] capitalize italic tracking-tighter">
                {movie.category}
              </h6>
              <div className="flex flex-col pt-1">
                <h6 className="text-zinc-300 text-[10px] sm:text-[12px] font-normal italic pt-1">
                  {movie.Year}
                </h6>
                <h6 className="text-zinc-300 text-[10px] sm:text-[12px] font-normal pt-1">
                  Runtime: {movie.Runtime}
                </h6>
                <h6 className="text-zinc-300 text-[10px] sm:text-[12px] font-normal pt-1">
                  Director: {movie.Director}
                </h6>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TrendingMovies;
