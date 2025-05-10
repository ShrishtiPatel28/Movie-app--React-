import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./templates/Button";

const Contact = ({ movies }) => {
  document.title = "App | ContactPage";

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="w-full h-auto text-white">
      <div className="relative w-full h-[60vh] bg-cover bg-center">
        <div
          className="absolute top-0 left-0 w-full h-full mb-[-100px] "
          style={{
            background: `linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.47)), url(https://m.media-amazon.com/images/M/MV5BMGUwZjliMTAtNzAxZi00MWNiLWE2NzgtZGUxMGQxZjhhNDRiXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_SX300.jpg)`,
          }}
        ></div>
        <div className="absolute top-1/3 left-8 text-white ml-5">
          <h1 className="text-6xl font-extrabold tracking-wide leading-tight drop-shadow-lg">
            Contact Us
          </h1>
          <p className="text-xl mt-4 drop-shadow-md">
            We're here to assist you!
          </p>
        </div>
      </div>

      <div className=" w-[90%] py-5 px-8 ml-[60px]">
        <Button/>

        {/* Contact Form Section */}

        <section className="py-6 px-6 border border-yellow-600 mb-6 transition ">
          <h2 className="text-2xl font-black text-yellow-500 text-center mb-6">
            We'd Love to Hear from You!
          </h2>

          <form onSubmit={handleSubmit}>
            {/* Name Field */}

            <div className="mb-5 flex flex-row justify-center items-center">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-1/2 px-4 py-2 border border-zinc-600 bg-transparent outline-none"
                placeholder="Your Name"
                required
              />
            </div>

            {/* Email Field */}
            <div className="mb-5 flex flex-row justify-center items-center">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-1/2 px-4 py-2 border border-zinc-600 outline-none bg-transparent "
                placeholder="Your Email"
                required
              />
            </div>

            {/* Message Field */}
            <div className="mb-5 flex flex-row justify-center items-center">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-1/2 px-4 py-2 border  border-zinc-600 outline-none bg-transparent"
                placeholder="Your Message"
                rows="5"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className=" px-5 py-3 ml-[485px] bg-yellow-500 font-extrabold text-black transition duration-300 ease-in-out"
            >
              Send Message
            </button>
          </form>
        </section>

        {/* Contact Info Section */}
        <section className="bg-zinc-900 py-5 mt-8 text-center rounded-lg shadow-xl">
          <h2 className="text-3xl font-extrabold text-yellow-500 mb-4">
            Other Ways to Reach Us
          </h2>
          <p className="text-sm text-gray-300 mb-6">
            If you prefer other methods of communication, you can reach us via
            email or social media:
          </p>
          <p className="text-sm text-yellow-500 hover:underline mb-4">
            contact@movieapp.com
          </p>
          <div className="mt-4 flex justify-center gap-8 text-2xl">
            <a
              href="https://www.facebook.com"
              className="text-yellow-500 hover:text-yellow-400 transition duration-200 ease-in-out"
              aria-label="Facebook"
            >
              <i className="ri-facebook-fill"></i>
            </a>
            <a
              href="https://www.twitter.com"
              className="text-yellow-500 hover:text-yellow-400 transition duration-200 ease-in-out"
              aria-label="Twitter"
            >
              <i className="ri-twitter-fill"></i>
            </a>
            <a
              href="https://www.instagram.com"
              className="text-yellow-500 hover:text-yellow-400 transition duration-200 ease-in-out"
              aria-label="Instagram"
            >
              <i className="ri-instagram-fill"></i>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
