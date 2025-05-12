// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Header = ({ movies }) => {
//   const navigate = useNavigate();
//   const [randomMovie, setRandomMovie] = useState(null);

//   useEffect(() => {
//     if (movies.length > 0) {
//       const randomIndex = Math.floor(Math.random() * movies.length);
//       setRandomMovie(movies[randomIndex]);
//     }
//   }, [movies]);

//   const handleWatchNow = (id) => {
    
//     navigate(`/details/${id}`); 
//   };

//   return (
//     <div
//       className="w-[93%] h-[250px] ml-[30px] flex items-center bg-center bg-cover border-none justify-center relative"
//       style={{
//         background: randomMovie
//           ? `linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4)), url(${randomMovie.Images})`
//           : "",
//       }}
//     >
//       <div className="text-white absolute left-[60px] top-[70px]">
//         <h1 className="text-4xl font-extrabold">
//           {randomMovie ? randomMovie.title : "Loading..."}
//         </h1>
//         <p className="text-sm text-white italic w-[800px] mt-2">
//           {randomMovie && randomMovie.Plot
//             ? randomMovie.Plot.slice(0, 200) + "..."
//             : "Please wait..."}
//         </p>
//         <button
//           onClick={() => handleWatchNow(randomMovie.id)}
//           className="text-sm px-5 py-2 font-extrabold bg-yellow-500 mt-4"
//         >
//           Watch Now
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Header;


import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ movies }) => {
  const navigate = useNavigate();
  const [randomMovie, setRandomMovie] = useState(null);

  useEffect(() => {
    if (movies.length > 0) {
      const randomIndex = Math.floor(Math.random() * movies.length);
      setRandomMovie(movies[randomIndex]);
    }
  }, [movies]);

  const handleWatchNow = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <div
      className="w-[93%] h-[250px] sm:h-[300px] md:h-[350px] ml-[30px] sm:ml-4 flex items-center bg-center bg-cover border-none justify-center relative rounded-lg"
      style={{
        background: randomMovie
          ? `linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4)), url(${randomMovie.Images})`
          : "",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-white absolute left-[60px] sm:left-6 top-[70px] sm:top-[60px] max-w-[90%]">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">
          {randomMovie ? randomMovie.title : "Loading..."}
        </h1>
        <p className="text-xs sm:text-sm text-white italic mt-2 max-w-[90vw] sm:max-w-[600px] md:max-w-[800px]">
          {randomMovie?.Plot
            ? randomMovie.Plot.slice(0, 200) + "..."
            : "Please wait..."}
        </p>
        <button
          onClick={() => handleWatchNow(randomMovie?.id)}
          className="text-xs sm:text-sm px-4 py-2 font-extrabold bg-yellow-500 mt-4 hover:bg-yellow-400 transition"
        >
          Watch Now
        </button>
      </div>
    </div>
  );
};

export default Header;
