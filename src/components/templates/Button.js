import React from 'react'
import { useNavigate } from 'react-router-dom';

const Button = () => {
  const navigate = useNavigate();

  return (
    <div> <i
    onClick={() => navigate("/")}
    className="ri-arrow-left-line absolute top-4 left-2 z-[900] text-3xl text-white  cursor-pointer hover:rotate-[40deg] duration"
  ></i></div>
  )
}

export default Button