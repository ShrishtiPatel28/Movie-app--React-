import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "./templates/Button";

const TrendingMovies = ({ movies }) => {
  document.title = "App | TrendingPage";

  const [isTrending] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="w-full h-auto p-5 pb-8">
      <div className=" top flex flex-row gap-8 ml-4 fixed  bg-black top-0 bg-black w-full h-[60px] pt-4 z-[900]">
       <Button/>
        <h1 className="text-2xl font-bold text-white ml-5">
          Trending Movies
        </h1>
      </div>
      <div className=" flex flex-wrap gap-12 mt-16 justify-center items-center">
        {movies.map((movie) => {
          const isMovieTrending = isTrending;

          return (
            <Link
            to={`/details/${movie.id}`}
              key={movie.id}
              className="movie-card w-[240px] h-[380px] border border-zinc-700 p-5 hover:border-zinc-400 relative overflow-hidden"
            >
              {isMovieTrending && (
                <>
                  <div className="absolute bottom-3 -right-8 z-[900] -rotate-[41deg] bg-yellow-500 italic text-white font-bold px-8 py-1">
                    Trending
                  </div>
                </>
              )}
              <img
                src={movie.Images}
                alt={movie.title}
                className="w-[190px] h-[220px] object-cover  hover:scale-105 duration-125"
              />
              <h2 className="text-white text-center pt-2 font-bold text-[16px] tracking-wider">
                {movie.title.slice(0, 17)}
              </h2>
              <h6 className="text-red-700 text-center font-semibold text-[13px] -mt-[4px] capitalize italic tracking-tighter">
                {movie.category}
              </h6>
              <div className="flex flex-col pt-1">
                <h6 className="text-zinc-300 text-[12px] font-normal italic pt-1">
                  {movie.Year}
                </h6>
                <h6 className="text-zinc-300 text-[12px] font-normal pt-1">
                  Runtime: {movie.Runtime}
                </h6>
                <h6 className="text-zinc-300 text-[12px] font-normal pt-1">
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
