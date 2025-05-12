// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Button from "./templates/Button";

// const Movies = ({ movies }) => {
//   const navigate = useNavigate();
//   const [query, setQuery] = useState("");

//   const filteredMovies = movies.filter((movie) =>
//     movie.title.toLowerCase().includes(query.toLowerCase())
//   );

//   return (
//     <div className="movies-container w-full h-auto p-5 pb-8">
//       <div className="top flex flex-row gap-8 ml-4 fixed bg-black top-0 w-full h-[60px] pt-4 z-[900]">
//         <Button/>
//         <h2 className="text-3xl font-bold text-white ml-8 mb-2">Movies</h2>

//         <div className="search-bar ml-[170px] flex flex-row justify-center items-center gap-3  w-[45%]">
//           <i className="text-2xl text-zinc-600 ri-search-line"></i>
//           <input
//             type="text"
//             placeholder="Search for movies..."
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             className="w-[90%] px-2 py-2 mb-2 border-b border-zinc-600 rounded bg-transparent text-white focus:outline-none"
//           />
//         </div>
//       </div>

//       <div className="flex flex-wrap gap-8 mt-[70px] justify-center items-center">
//         {filteredMovies.length > 0 ? (
//           filteredMovies.map((movie) => (
//             <Link
//               key={movie.id}
//               to={`/details/${movie.id}`}
//               className="movie-card w-[200px] h-[380px] border border-zinc-700 p-5 hover:border-zinc-400 relative overflow-hidden"
//             >
//               <img
//                 src={movie.Images}
//                 alt={movie.title}
//                 className="w-[190px] h-[220px] object-cover hover:scale-105 duration-125"
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
//           ))
//         ) : (
//           <p className="text-red-700 font-semibold">No movies found</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Movies;


import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "./templates/Button";

const Movies = ({ movies }) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="movies-container w-full min-h-screen p-4 pb-8 bg-black">
      {/* Top Navigation Bar */}
      <div className="top flex flex-col md:flex-row gap-4 md:gap-8 items-center md:items-start fixed bg-black top-0 w-full px-4 py-3 z-[900]">
        <Button />
        <h2 className="text-2xl md:text-3xl font-bold text-white">Movies</h2>

        <div className="search-bar flex-1 flex flex-col sm:flex-row justify-center sm:justify-start items-center gap-3 w-full md:w-auto mt-2 md:mt-0">
          <i className="text-2xl text-zinc-600 ri-search-line"></i>
          <input
            type="text"
            placeholder="Search for movies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full sm:w-[300px] px-3 py-2 border-b border-zinc-600 rounded bg-transparent text-white focus:outline-none"
          />
        </div>
      </div>

      {/* Movie Grid */}
      <div className="flex flex-wrap gap-6 justify-center items-start mt-[90px]">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <Link
              key={movie.id}
              to={`/details/${movie.id}`}
              className="movie-card w-[160px] sm:w-[180px] md:w-[200px] h-auto border border-zinc-700 p-3 hover:border-zinc-400 relative overflow-hidden"
            >
              <img
                src={movie.Images}
                alt={movie.title}
                className="w-full h-[220px] object-cover hover:scale-105 duration-150"
              />
              <h2 className="text-white text-center pt-2 font-bold text-[15px] tracking-wide">
                {movie.title.slice(0, 17)}
              </h2>
              <h6 className="text-red-700 text-center font-semibold text-[12px] capitalize italic tracking-tighter">
                {movie.category}
              </h6>
              <div className="flex flex-col pt-1">
                <h6 className="text-zinc-300 text-[12px] italic">{movie.Year}</h6>
                <h6 className="text-zinc-300 text-[12px]">
                  Runtime: {movie.Runtime}
                </h6>
                <h6 className="text-zinc-300 text-[12px]">
                  Director: {movie.Director}
                </h6>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-red-700 font-semibold">No movies found</p>
        )}
      </div>
    </div>
  );
};

export default Movies;
