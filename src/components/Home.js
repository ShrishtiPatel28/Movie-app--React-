
// import React, { useEffect, useState } from "react";
// import Sidenav from "./templates/Sidenav";
// import Topnav from "./templates/Topnav";
// import Header from "./templates/Header";
// import CardsAll from "./templates/CardsAll";

// const Home = () => {
//   document.title = "App | Homepage";

//   const [movies, setMovies] = useState([]);
//   const [list, setList] = useState([]);

//   useEffect(() => {
//     // Corrected the fetch URL to use process.env.PUBLIC_URL
//     fetch(`${process.env.PUBLIC_URL}/data.json`)
//       .then((response) => response.json())
//       .then((data) => {
//         setMovies(data.movies);
//         setList(data.movies);
//       })
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);

//   return (
//     <>
//       <Sidenav movies={movies} />
//       <div className="w-[80%] h-full flex flex-col overflow-auto overflow-x-hidden no-scrollbar">
//         <Topnav
//           setList={setList}
//           setMovies={setMovies}
//           movies={movies}
//           list={list}
//         />
//         <Header movies={movies} />
//         <h4 className="text-zinc-400 font-bold text-xl ml-8 mt-4">
//           All categories
//         </h4>
//         <CardsAll movies={movies} />
//       </div>
//     </>
//   );
// };

// export default Home;



// responsive code 👇🏻
import React, { useEffect, useState } from "react";
import Sidenav from "./templates/Sidenav";
import Topnav from "./templates/Topnav";
import Header from "./templates/Header";
import CardsAll from "./templates/CardsAll";

const Home = () => {
  document.title = "App | Homepage";

  const [movies, setMovies] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/data.json`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.movies);
        setList(data.movies);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="flex flex-col md:flex-row w-full h-full">
      <Sidenav movies={movies} />
      <div className="w-full md:w-[80%] h-full flex flex-col overflow-auto overflow-x-hidden no-scrollbar">
        <Topnav
          setList={setList}
          setMovies={setMovies}
          movies={movies}
          list={list}
        />
        <Header movies={movies} />
        <h4 className="text-zinc-400 font-bold text-xl ml-8 mt-4">
          All categories
        </h4>
        <CardsAll movies={movies} />
      </div>
    </div>
  );
};

export default Home;
