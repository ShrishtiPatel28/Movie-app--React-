// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Button from "./templates/Button";

// const About = ({movies}) => {
//   document.title = "App | AboutPage";

//   const navigate = useNavigate();
//     const [randomMovie, setRandomMovie] = useState(null);
  
//     useEffect(() => {
//       if (movies.length > 0) {
//         const randomIndex = Math.floor(Math.random() * movies.length);
//         setRandomMovie(movies[randomIndex]);
//       }
//     }, [movies]);

//   return (
//     <div className="w-full h-auto text-white">
//       <div
//         className="relative w-full h-[60vh] bg-cover bg-center"
//         style={{
//           background: randomMovie
//             ? `linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.47)), url(${randomMovie.Images})`
//             : "",
//         }}
//       >
//         <div className="absolute top-0 left-0 w-full h-full "></div>
//         <div className="absolute top-1/3 left-8 text-white ml-4">
//           <h1 className="text-5xl font-extrabold tracking-wide">
//             About MovieApp
//           </h1>
//           <p className="text-lg mt-4">Your ultimate destination for discovering the best movies and TV shows.</p>
//         </div>
//       </div>

//       <div className="max-w-screen-xl mx-auto py-6 px-8">
//         <Button/>

//         {/* Our Story Section */}
//         <section className="py-6 px-2 border border-yellow-600 mb-6">
//           <h2 className="text-3xl font-extrabold text-white text-center mb-5">
//             Our Story
//           </h2>
//           <p className="text-[15px] font-semibold text-gray-300 text-center leading-relaxed">
//             MovieApp is your ultimate destination for discovering the best movies and TV shows from all over the world.
//             Whether you're looking for the latest blockbusters, indie gems, or trending series, MovieApp offers detailed
//             information, trailers, reviews, and more to help you decide what to watch.
//           </p>
//         </section>

//         {/* Our Mission Section */}
//         <section className="py-6 px-2 border border-yellow-600  mb-4">
//           <h2 className="text-3xl font-extrabold text-white text-center mb-5">
//             Our Mission
//           </h2>
//           <p className="text-[15px] font-semibold text-gray-300 text-center leading-relaxed">
//             Our mission is to provide a seamless and user-friendly platform where movie lovers can easily discover,
//             explore, and enjoy content. We aim to offer up-to-date information on movie ratings, upcoming releases,
//             cast and crew details, all in one place.
//           </p>
//         </section>

//         {/* Features Section */}
//         <section className="py-2 px-2 mb-4">
//           <h2 className="text-3xl font-extrabold text-yellow-500 text-center mb-4">
//             Our Features
//           </h2>
//           <div className="flex flex-wrap justify-center gap-12">
//             <div className="text-center">
//               <div className="text-6xl text-yellow-500 mb-4">
//                 <i className="ri-movie-line"></i>
//               </div>
//               <h3 className="text-2xl font-semibold text-white">Discover Movies</h3>
//               <p className="text-gray-400 mt-2">Explore movies by genre, release date, and popularity.</p>
//             </div>
//             <div className="text-center">
//               <div className="text-6xl text-yellow-500 mb-4">
//                 <i className="ri-tv-line"></i>
//               </div>
//               <h3 className="text-2xl font-semibold text-white">Watch Trailers</h3>
//               <p className="text-gray-400 mt-2">Get a sneak peek at upcoming movies and TV shows.</p>
//             </div>
//             <div className="text-center">
//               <div className="text-6xl text-yellow-500 mb-4">
//                 <i className="ri-star-line"></i>
//               </div>
//               <h3 className="text-2xl font-semibold text-white">Ratings & Popularity</h3>
//               <p className="text-gray-400 mt-2">View movie ratings and popularity to make informed decisions.</p>
//             </div>
//           </div>
//         </section>

//         {/* Contact Us Section */}
//         <section className="bg-zinc-900 py-6 text-center">
//           <h2 className="text-3xl font-extrabold text-yellow-500 mb-4">
//             Contact Us
//           </h2>
//           <p className="text-sm text-gray-300 mb-4">
//             We would love to hear from you! If you have any questions or feedback, reach out to us at{" "}
//             <span className="text-yellow-500 hover:underline">contact@movieapp.com</span>.
//           </p>
//           <button 
//           onClick={() => navigate("/contact")}
//            className="px-5 py-3 bg-yellow-500 text-black font-extrabold text-sm  hover:bg-yellow-400 transition duration-300">
//             Get in Touch
//           </button>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default About;




import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./templates/Button";

const About = ({ movies }) => {
  document.title = "App | AboutPage";

  const navigate = useNavigate();
  const [randomMovie, setRandomMovie] = useState(null);

  useEffect(() => {
    if (movies.length > 0) {
      const randomIndex = Math.floor(Math.random() * movies.length);
      setRandomMovie(movies[randomIndex]);
    }
  }, [movies]);

  return (
    <div className="w-full h-auto text-white">
      <div
        className="relative w-full h-[60vh] bg-cover bg-center"
        style={{
          background: randomMovie
            ? `linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.47)), url(${randomMovie.Images})`
            : "",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full "></div>
        <div className="absolute top-1/3 left-8 text-white ml-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-wide">
            About MovieApp
          </h1>
          <p className="text-lg sm:text-xl mt-4">Your ultimate destination for discovering the best movies and TV shows.</p>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto py-6 px-8">
        <Button />

        {/* Our Story Section */}
        <section className="py-6 px-2 border border-yellow-600 mb-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white text-center mb-5">
            Our Story
          </h2>
          <p className="text-sm sm:text-base lg:text-lg font-semibold text-gray-300 text-center leading-relaxed">
            MovieApp is your ultimate destination for discovering the best movies and TV shows from all over the world.
            Whether you're looking for the latest blockbusters, indie gems, or trending series, MovieApp offers detailed
            information, trailers, reviews, and more to help you decide what to watch.
          </p>
        </section>

        {/* Our Mission Section */}
        <section className="py-6 px-2 border border-yellow-600 mb-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white text-center mb-5">
            Our Mission
          </h2>
          <p className="text-sm sm:text-base lg:text-lg font-semibold text-gray-300 text-center leading-relaxed">
            Our mission is to provide a seamless and user-friendly platform where movie lovers can easily discover,
            explore, and enjoy content. We aim to offer up-to-date information on movie ratings, upcoming releases,
            cast and crew details, all in one place.
          </p>
        </section>

        {/* Features Section */}
        <section className="py-2 px-2 mb-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-yellow-500 text-center mb-4">
            Our Features
          </h2>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-12">
            <div className="text-center">
              <div className="text-5xl sm:text-6xl lg:text-7xl text-yellow-500 mb-4">
                <i className="ri-movie-line"></i>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white">Discover Movies</h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-400 mt-2">Explore movies by genre, release date, and popularity.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl sm:text-6xl lg:text-7xl text-yellow-500 mb-4">
                <i className="ri-tv-line"></i>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white">Watch Trailers</h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-400 mt-2">Get a sneak peek at upcoming movies and TV shows.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl sm:text-6xl lg:text-7xl text-yellow-500 mb-4">
                <i className="ri-star-line"></i>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white">Ratings & Popularity</h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-400 mt-2">View movie ratings and popularity to make informed decisions.</p>
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section className="bg-zinc-900 py-6 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-yellow-500 mb-4">
            Contact Us
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-4">
            We would love to hear from you! If you have any questions or feedback, reach out to us at{" "}
            <span className="text-yellow-500 hover:underline">contact@movieapp.com</span>.
          </p>
          <button 
            onClick={() => navigate("/contact")}
            className="px-5 py-3 bg-yellow-500 text-black font-extrabold text-sm sm:text-base lg:text-lg hover:bg-yellow-400 transition duration-300">
            Get in Touch
          </button>
        </section>
      </div>
    </div>
  );
};

export default About;
