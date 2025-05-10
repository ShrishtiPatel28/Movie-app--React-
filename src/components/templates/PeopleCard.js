import React from "react";
import { Link, useNavigate } from "react-router-dom";

const PeopleCard = ({ actors }) => {
  return (
    <div className="w-full h-[310] p-5 pt-2">
      <div className=" ">
        <div className="card-container  flex flex-row gap-[30px] overflow-x-auto ml-3">
          {actors.map((details, id) => {
            return (
              <Link
                key={id}
                to={`/detailspeople/${details.id}`}
                className="card min-w-[180px] max-w-[180px] h-[260px] border border-zinc-700 p-5 hover:border-zinc-400 relative overflow-hidden"
              
              >
                <img
                  src={details.photo}
                  alt={details.title}
                  className="w-[190px] h-[200px] object-cover "
                />
                <h2 className="text-white text-center pt-2 font-semibold text-[16px] tracking-wide">
                  {details.name.slice(0, 14)}
                </h2>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PeopleCard;
