import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CardsAll from "./templates/CardsAll";
import PeopleCard from "./templates/PeopleCard";
import Button from "./templates/Button";

const Details = ({ movies, actors }) => {
  document.title = "App | DetailsPage";

  const navigate = useNavigate();
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [isTrailerPlaying, setIsTrailerPlaying] = useState(false);

  useEffect(() => {
    const movie = movies.find((movie) => movie.id === id);
    if (movie) {
      setMovieDetails(movie);
    }
  }, [id, movies]);

  const toggleTrailer = () => {
    setIsTrailerPlaying((prev) => !prev);
  };

  const closeTrailer = () => {
    setIsTrailerPlaying(false);
  };

  const goToNextMovie = () => {
    const currentIndex = movies.findIndex((movie) => movie.id === id);
    const nextMovie = movies[(currentIndex + 1) % movies.length];
    navigate(`/details/${nextMovie.id}`);
  };

  const goToPreviousMovie = () => {
    const currentIndex = movies.findIndex((movie) => movie.id === id);
    const prevMovie =
      movies[(currentIndex - 1 + movies.length) % movies.length];
    navigate(`/details/${prevMovie.id}`);
  };

  if (!movieDetails) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <div
      className="details-container relative w-full relative h-auto px-5 text-white"
      style={{
        background: `linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0.64)), url(${movieDetails.Images})`,
      }}
    >
     <Button/>
      <div className="">
        <button
          onClick={goToPreviousMovie}
          className="text-zinc-300 hover:text-zinc-100 absolute top-[45%] left-[1.2%] z-[900] rounded-full border border-zinc-700 hover:border-zinc-600 px-3 py-2 "
        >
          <i class="ri-arrow-left-double-line text-xl"></i>
        </button>
        <button
          onClick={goToNextMovie}
          className="text-zinc-300 hover:text-zinc-100 absolute top-[45%] right-[0.3%] z-[900] rounded-full border border-zinc-700  px-3 py-2"
        >
          <i class="ri-arrow-right-double-line text-xl"></i>
        </button>
      </div>
      <div className="w-[92%]  h-auto absolute left-[50px]">
        <div className="movie-details flex flex-row p-4 h-[100%] gap-16 font-bold text-sm">
          <img
            src={movieDetails.Images}
            className="w-[300px] h-[440px] ml-[30px] mt-14 opacity-85 object-cover border border-slate-300 p-4"
          />
          <div>
            <h1 className="text-6xl font-extrabold mt-[15px]">
              {movieDetails.title}
              <sub className="text-[15px] text-zinc-200">
                ( {movieDetails.Year} )
              </sub>
            </h1>

            <div className="nav1 flex flex-row justify-left items-center gap-7  w-[400px] mt-[20px]">
              <div className="italic w-12 h-12  text-white text-center py-3 px-2 bg-yellow-500  rounded-full opacity-90 text-[17px] font-bold">
                {movieDetails.imdbRating}
                <sup className="font-bold">%</sup>{" "}
              </div>
              <p className="text-xs capitalize font-normal">
                <i className="ri-calendar-fill text-sm text-yellow-500 mr-[3px]"></i>
                {movieDetails.Released}
              </p>
              <p className="text-xs capitalize font-normal italic">
                <i className="ri-timer-line text-sm text-yellow-500 italic mr-[3px]"></i>
                {movieDetails.Runtime}
              </p>
              <p className="text-xs capitalize font-normal">
                <i className="ri-play-circle-fill text-sm text-yellow-500 mr-[3px]"></i>
                {movieDetails.category}
              </p>
            </div>
            <p className="text-[12px] capitalize font-normal text-white ml-[80px] mt-[-8px]  italic ">
              {movieDetails.Genre}
            </p>
            <div className="overview w-[600px] mt-4 ">
              <h1 className="text-2xl font-normal">Overview</h1>
              <p className="text-sm font-normal mt-2  italic leading-2 tracking-wide text-zinc-300 ">
                {movieDetails.Plot}
              </p>
            </div>

            <p className="lang text-xl capitalize font-normal text-white mt-[20px]">
              Movie Translated -
              <p className="text-sm font-normal mt-2  italic leading-2 tracking-wide text-zinc-300 ">
                English, Spanish, French, German, Italian, Chinese, Japanese,
                Russian, Arabic, Portuguese, Hindi, Korean, Dutch, Turkish,
                Swedish, Greek, Polish, Hebrew, Thai, Bengali
              </p>
            </p>

            <div className="btn mt-[20px]">
              <button
                onClick={toggleTrailer}
                className="text-white font-extrabold bg-yellow-500 px-6 py-2"
              >
                {isTrailerPlaying ? "Playing" : "Watch Trailer"}
              </button>

              {isTrailerPlaying && (
                <div className="fixed inset-0 bg-black bg-opacity-70 w-full h-full flex justify-center items-center z-50">
                  <div className="relative">
                    <button
                      onClick={closeTrailer}
                      className="absolute top-0 right-0 text-white font-extrabold bg-red-600 px-6 py-2"
                    >
                      <i class="text-white ri-close-large-fill"></i>
                    </button>
                    <iframe
                      width="800"
                      height="450"
                      src={movieDetails.TrailerURL}
                      title="Movie Trailer"
                      allow="accelerometer; autoplay; muted; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-4">
              <p className="text-[18px] capitalize font-normal italic text-white mt-[15px]">
                Cast -{" "}
                <span className="text-[14px] ml-1 capitalize font-normal text-zinc-300">
                  {movieDetails.Actors}
                </span>
              </p>
              <p className="text-[18px] capitalize font-normal italic text-white mt-[8px]">
                Writer -{" "}
                <span className="text-[14px] capitalize font-normal text-zinc-300">
                  {movieDetails.Writer}
                </span>
              </p>
              <p className="text-[18px] capitalize font-normal italic text-white mt-[8px]">
                Director -{" "}
                <span className="text-[14px] capitalize font-normal text-zinc-300">
                  {movieDetails.Director}
                </span>
              </p>
            </div>
          </div>
        </div>
        <hr className="border-none h-[1px] bg-zinc-200 mt-4" />
        <h2 className="text-xl font-semibold mt-3 mb-3 ml-8">
          Recommendations & Similar Stuff
        </h2>
        <CardsAll movies={movies} />
        <hr className="border-none h-[1px] bg-zinc-200" />
        <h2 className="text-xl font-semibold mt-3 mb-3 ml-8">
          Recommendations of Actors & Actress
        </h2>
        <PeopleCard actors={actors} />
      </div>
    </div>
  );
};

export default Details;
