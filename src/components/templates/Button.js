// import React from 'react'
// import { useNavigate } from 'react-router-dom';

// const Button = () => {
//   const navigate = useNavigate();

//   return (
//     <div> <i
//     onClick={() => navigate("/")}
//     className="ri-arrow-left-line absolute top-4 left-2 z-[900] text-3xl text-white  cursor-pointer hover:rotate-[40deg] duration"
//   ></i></div>
//   )
// }

// export default Button;

import React from 'react';
import { useNavigate } from 'react-router-dom';

const Button = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed top-4 left-4 z-[900]">
      <i
        onClick={() => navigate("/")}
        className="ri-arrow-left-line text-2xl sm:text-3xl md:text-4xl text-white cursor-pointer hover:rotate-45 transition-transform duration-300"
      ></i>
    </div>
  );
};

export default Button;
