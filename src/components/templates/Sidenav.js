// import React from "react";
// import { Link } from "react-router-dom";

// const Sidenav = () => {
//   return (
//     <div className="w-[20%] h-full border-r-2 border-zinc-500 p-10 pt-8">
//       <h1 className="text-2xl text-gray-200 font-extrabold">
//         <i className="ri-tv-fill text-2xl mr-3 text-yellow-500"></i>
//         <span className="text-[23px]">MovieApp</span>
//       </h1>
//       <nav className="navtop flex flex-col gap-2 z-[900] text-zinc-500 capitalize font-semibold">
//         <h1 className="text-gray-200 font-semibold text-[20px] mt-4 mb-2">
//           New Feeds
//         </h1>

//         <Link to="/" className="hover:bg-yellow-500 text-zinc-500 font-semibold hover:text-white duration-500 rounded-lg px-5 py-3 active:bg-yellow-500 focus:text-white focus:bg-yellow-500">
//           <i className="ri-global-fill mr-2"></i>All
//         </Link>

//         <Link
//           to="/trending"
//           className="hover:bg-yellow-500 text-zinc-500 font-semibold hover:text-white duration-500 rounded-lg px-5 py-3 active:bg-yellow-500 focus:text-white focus:bg-yellow-500"
//         >
//           <i className="ri-fire-fill mr-2"></i>Trending
//         </Link>

//         <Link
//           to="/popular"
//           className="hover:bg-yellow-500 text-zinc-500 font-semibold hover:text-white duration-500 rounded-lg px-5 py-3 active:bg-yellow-500 focus:text-white focus:bg-yellow-500"
//         >
//           <i className="ri-bard-fill mr-2"></i>Popular
//         </Link>

//         <Link
//           to="/movies"
//           className="hover:bg-yellow-500 text-zinc-500 font-semibold hover:text-white duration-500 rounded-lg px-5 py-3 active:bg-yellow-500 focus:text-white focus:bg-yellow-500"
//         >
//           <i class="ri-tv-line mr-2"></i>Movies
//         </Link>

//         <Link to="/series" className="hover:bg-yellow-500 text-zinc-500 font-semibold hover:text-white duration-500 rounded-lg px-5 py-3 active:bg-yellow-500 focus:text-white focus:bg-yellow-500">
//           <i className="ri-bard-fill mr-2"></i>Series
//         </Link>

//         <Link
//           to="/people"
//           className="hover:bg-yellow-500 text-zinc-500 font-semibold hover:text-white duration-500 rounded-lg px-5 py-3 active:bg-yellow-500 focus:text-white focus:bg-yellow-500"
//         >
//           <i className="ri-team-fill mr-2"></i>People
//         </Link>

//       </nav>

//       <hr className="border-none h-[1px] bg-zinc-700 mt-3" />

//       <nav className="navbottom flex flex-col gap-2 text-zinc-500 font-semibold">
//         <h1 className="text-gray-200 font-semibold text-[18px] mt-5 mb-2">
//           Website Information
//         </h1>
//         <Link
//           to="/about"
//           className="hover:bg-yellow-500 hover:text-white duration-500 rounded-lg px-5 py-3"
//         >
//           <i className="ri-information-2-fill mr-2"></i>About Us
//         </Link>
//         <Link
//           to="/contact"
//           className="hover:bg-yellow-500 hover:text-white duration-500 rounded-lg px-5 py-3"
//         >
//           <i className="ri-phone-fill mr-2"></i>Contact Us
//         </Link>
//       </nav>
//     </div>
//   );
// };

// export default Sidenav;


import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidenav = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="lg:hidden fixed top-4 left-4 z-[1000]">
        <button
          onClick={() => setOpen(!open)}
          className="text-white bg-yellow-500 px-3 py-2 rounded-lg text-lg"
        >
          <i className="ri-menu-fill"></i>
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed z-[999] bg-black lg:static top-0 left-0 h-full w-[70%] sm:w-[60%] md:w-[45%] lg:w-[20%] border-r-2 border-zinc-500 p-6 pt-10 transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        <h1 className="text-2xl text-gray-200 font-extrabold mb-6">
          <i className="ri-tv-fill text-2xl mr-3 text-yellow-500"></i>
          <span className="text-[23px]">MovieApp</span>
        </h1>

        {/* Top Navigation */}
        <nav className="navtop flex flex-col gap-2 text-zinc-500 capitalize font-semibold">
          <h1 className="text-gray-200 font-semibold text-[20px] mb-2">
            New Feeds
          </h1>

          {[
            { to: "/", icon: "ri-global-fill", label: "All" },
            { to: "/trending", icon: "ri-fire-fill", label: "Trending" },
            { to: "/popular", icon: "ri-bard-fill", label: "Popular" },
            { to: "/movies", icon: "ri-tv-line", label: "Movies" },
            { to: "/series", icon: "ri-bard-fill", label: "Series" },
            { to: "/people", icon: "ri-team-fill", label: "People" },
          ].map(({ to, icon, label }) => (
            <Link
              key={to}
              to={to}
              className="hover:bg-yellow-500 hover:text-white duration-300 rounded-lg px-5 py-3"
              onClick={() => setOpen(false)}
            >
              <i className={`${icon} mr-2`}></i>
              {label}
            </Link>
          ))}
        </nav>

        <hr className="border-none h-[1px] bg-zinc-700 mt-6" />

        {/* Bottom Navigation */}
        <nav className="navbottom flex flex-col gap-2 text-zinc-500 font-semibold mt-5">
          <h1 className="text-gray-200 font-semibold text-[18px] mb-2">
            Website Information
          </h1>

          <Link
            to="/about"
            className="hover:bg-yellow-500 hover:text-white duration-300 rounded-lg px-5 py-3"
            onClick={() => setOpen(false)}
          >
            <i className="ri-information-2-fill mr-2"></i>About Us
          </Link>
          <Link
            to="/contact"
            className="hover:bg-yellow-500 hover:text-white duration-300 rounded-lg px-5 py-3"
            onClick={() => setOpen(false)}
          >
            <i className="ri-phone-fill mr-2"></i>Contact Us
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Sidenav;
