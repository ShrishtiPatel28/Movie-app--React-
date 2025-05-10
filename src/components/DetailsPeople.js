import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Button from "./templates/Button";

const DetailsPeople = ({ actors }) => {
  document.title = "App | DetailsPage";

  const navigate = useNavigate();
  const { id } = useParams();
  const [peopledetails, setpeopledetails] = useState(null);

  useEffect(() => {
    const actor = actors.find((actor) => actor.id === id);
    if (actor) {
      setpeopledetails(actor);
    }
  }, [id, actors]);

  if (!peopledetails) {
    return <div className="text-white">Loading...</div>;
  }

  console.log(actors);

  return (
    <div className="details-container relative w-full relative h-auto px-5 text-white">
      <Button/>
      <div className="w-[92%]  h-auto flex flex-row justify-left gap-8 absolute left-[50px]">

       {/* left */}

        <div className="left h-[100%] font-bold text-sm">
          <img
            src={peopledetails.photo}
            className="w-[300px] h-[400px] ml-[30px] mt-5 opacity-85 object-cover p-4"
          />
          <div className="w-[80%] h-[370px] ml-[48px] mt-4 border-t-2 border-zinc-600">
            <h1 className="text-[23px] ml-2 font-extrabold text-neutral-500 mt-4">
              Personal Info
            </h1>
            <h2 className="text-neutral-500 ml-2 text-[16px] font-bold mt-4 mb-4">
              Known For <br />{" "}
              <span className="font-normal capitalize ">
                {peopledetails.roles}
              </span>{" "}
            </h2>
            <h2 className="text-neutral-500 ml-2 text-[16px] font-bold mt-2 mb-4">
              Gender <br />{" "}
              <span className="font-normal capitalize ">
                {peopledetails.sex}
              </span>{" "}
            </h2>
            <h2 className="text-neutral-500 ml-2 text-[16px] font-bold mt-2 mb-4">
              Birthday <br />{" "}
              <span className="font-normal capitalize ">
                {peopledetails.birthday}
              </span>{" "}
            </h2>
            <h2 className="text-neutral-500 ml-2 text-[16px] font-bold mt-2 mb-4">
              Age <br />{" "}
              <span className="font-normal capitalize ">
                {peopledetails.age}
              </span>{" "}
            </h2>
            <h2 className="text-neutral-500 ml-2 text-[16px] font-bold mt-2 ">
              Also Known As <br />{" "}
              <span className="font-normal capitalize ">
                {peopledetails.Known}
              </span>{" "}
            </h2>
          </div>
          <div className="w-[80%] ml-[48px] border-t-2 border-zinc-600" >
          <h1 className="text-[22px] ml-2 font-extrabold text-neutral-500 mt-4">
              Follow {peopledetails.verb}
            </h1>
            <div className="flex flex-row ml-2 gap-4 mt-5"><i class="ri-instagram-line text-[25px] text-neutral-500"></i><i class="ri-facebook-box-fill text-[25px] text-neutral-500"></i><i class="ri-threads-fill text-[25px] text-neutral-500"></i></div>
          </div>
        </div>

       {/* right */}

        <div className="right">
          <h1 className="text-6xl font-black text-neutral-500 mt-6">
            {peopledetails.name}
          </h1>

          <p className="bio">
            <h1 className="text-neutral-500 mt-6 text-[25px] px-1 font-extrabold">
              Biography
            </h1>
            <p className="text-neutral-500 mt-2 text-[15px] px-1 font-normal w-[890px]">
              {peopledetails.biography}
            </p>
          </p>
          <p className="awads">
            <h1 className="text-neutral-500 mt-4 text-[23px] capitalize px-1 font-extrabold">
              Major Achievements
            </h1>
            <ul className="text-neutral-500 mt-1 text-[16px] px-1 font-normal w-[900px]">
              {peopledetails.career_overview.major_achievements.map(
                (achievement, index) => (
                  <li
                    key={index}
                    className="text-[16px] text-neutral-500 font-semibold"
                  >
                    {achievement}
                  </li>
                )
              )}
            </ul>
          </p>

          <div className="w-full flex flex-row gap-20 mt-2 ">
            <p className="roles">
              <h1 className="text-neutral-500 mt-4 text-[23px] capitalize px-1 font-extrabold">
                Plays Major Roles In
              </h1>
              <ul className="text-neutral-500 mt-1 text-[16px] px-1 font-normal">
                {peopledetails.career_overview.major_roles.map(
                  (achievement, index) => (
                    <li
                      key={index}
                      className="text-[16px] text-neutral-500 font-normal"
                    >
                      {achievement}
                    </li>
                  )
                )}
              </ul>
            </p>
            <p className="bio">
            <h1 className="text-neutral-500 mt-4 text-[23px] px-1 font-extrabold">
              Best Role In
            </h1>
            <p className="text-neutral-500 mt-2 text-[15px] px-1 font-normal">
              {peopledetails.career_overview.breakthrough_role}
            </p>
          </p>
          </div>

          <div className="movies">
            <h1 className="text-neutral-500 mt-5 text-[22px] px-1 font-extrabold">
              Movies by <span className="capitalize">{peopledetails.verb}</span>
            </h1>
            <div className="flex flex-wrap gap-5 mb-8 mt-4">
              {peopledetails.movies.map((movie, id) => (
                <Link
                  key={id}
                  to={`/detailsm/${peopledetails.id}`}
                  className="movie-card w-[200px] h-[280px] border border-zinc-700 p-5 hover:border-zinc-500 relative overflow-hidden"
                >
                  <img
                    src={movie.image}
                    className="w-[155px] h-[170px] object-cover"
                  />
                  <h2 className="text-neutral-500 text-center pt-2 font-bold text-[16px] tracking-wide">
                    {movie.title.slice(0, 18)}
                  </h2>
                  <p className="text-neutral-500 text-center text-[14px]">
                    {movie.releaseYear}
                  </p>
                  <p className="text-neutral-500  text-center text-[14px]">
                    {movie.genre}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPeople;
