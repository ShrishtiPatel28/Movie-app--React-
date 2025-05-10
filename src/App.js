import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Details from "./components/Detalis";
import Trending from "./components/Trending";
import Popular from "./components/Popular";
import Movies from "./components/Movies";
import Series from "./components/Series";
import People from "./components/People";
import DetailsPeople from "./components/DetailsPeople";
import PeopleCard from "./components/templates/PeopleCard";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [list, setList] = useState([]);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.movies);
        setList(data.movies);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    fetch("/Actors.json")
      .then((response) => response.json())
      .then((data) => {
        setPeople(data.actors);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const trendingMovies = movies
    .filter((movie) => movie.imdbRating >= 8.6)
    .sort((a, b) => b.imdbRating - a.imdbRating);

  const popularMovies = movies
    .filter((movie) => movie.imdbVotes >= 15500)
    .sort((a, b) => b.imdbVotes - a.imdbVotes);

  const movieList = movies.filter((movie) => movie.category === "movie");
  const seriesList = movies.filter((movie) => movie.category === "series");

  return (
    <div className="w-full h-screen bg-black flex">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About movies={movies} />} />
        <Route path="/contact" element={<Contact movies={movies} />} />
        <Route
          path="/details/:id"
          element={<Details movies={movies} actors={people} />}
        />
        <Route path="/movies" element={<Movies movies={movieList} />} />
        <Route path="/series" element={<Series series={seriesList} />} />
        <Route path="/people" element={<People actors={people} />} />
        <Route path="/people" element={<PeopleCard actors={people} />} />

        <Route
          path="/detailspeople/:id"
          element={<DetailsPeople actors={people} />}
        />
        <Route
          path="/trending"
          element={<Trending movies={trendingMovies} />}
        />
        <Route path="/popular" element={<Popular movies={popularMovies} />} />
      </Routes>
    </div>
  );
};

export default App;
