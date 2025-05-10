import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Topnav = ({ movies, setList, list, setMovies }) => {
  const [query, setQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const filterEvent = (e) => {
    const queryValue = e.target.value;
    setQuery(queryValue);
    setIsDropdownOpen(queryValue.length > 0);

    if (queryValue) {
      const result = list.filter((element) =>
        element.title.toLowerCase().includes(queryValue.toLowerCase())
      );
      setMovies(result);
    } else {
      setMovies(list);
    }
  };

  return (
    <>
      <div className="topnav w-full h-[10vh] z-[900] relative flex justify-start ml-[18%] items-center text-zinc-500">
        <i className="text-2xl ri-search-line"></i>
        <input
          onChange={(e) => filterEvent(e)}
          value={query}
          type="text"
          className="w-[50%] mx-10 px-2 py-2 text-sm outline-none bg-transparent text-zinc-200 placeholder:font-bold font-bold"
          placeholder="Search here...."
        />
        {query.length > 0 && (
          <i
            onClick={() => setQuery("")}
            className="text-2xl ri-close-fill cursor-pointer"
          ></i>
        )}

        {query.length > 0 && isDropdownOpen && (
          <div className="drop-down absolute top-[90%] max-w-[50%] max-h-[45vh] bg-zinc-900 rounded-sm overflow-auto ml-16">
            {movies.length === 0 ? (
              <div className="text-center text-red-600 p-6 font-bold">
                No movies or series found
              </div>
            ) : (
              movies.map((movie) => (
                <Link
                  key={movie.id}
                  className="hover:text-black hover:font-bold hover:bg-yellow-300 flex flex-col hover:font-bold duration-300 text-white font-bold w-[100%] p-5 px-12 flex justify-start items-center border-b-2 border-zinc-700"
                  onClick={() => {
                    setQuery(movie.title);
                    setIsDropdownOpen(false);
                  }}
                >
                  <div className="flex flex-row gap-8 items-center justify-items-start ">
                    <img
                      src={movie.Images}
                      className="w-[60px] h-[60px] object-cover"
                    />
                    <h6> {movie.title}</h6>
                  </div>
                </Link>
              ))
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Topnav;
