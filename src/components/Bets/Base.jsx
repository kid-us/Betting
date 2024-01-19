import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { bet_sports } from "../../constant/sport";
import Sidebar from "../Sidebar/SIdebar";
import TopSidebar from "../Sidebar/TopSidebars";
import { home, game, sports } from "../../assets";
import "./sport.css";

const Base = () => {
  const [visibleSports, setVisibleSports] = useState([]);

  const toggleVisibility = (sportId) => {
    if (visibleSports.includes(sportId)) {
      setVisibleSports(visibleSports.filter((id) => id !== sportId));
    } else {
      setVisibleSports([sportId]);
    }
  };

  return (
    <>
      <div
        className={`side-2 container sidebar-wrapper pt-5 fw-semibold shadow-lg`}
      >
        <hr />
        <TopSidebar></TopSidebar>
        <div className="row justify-content-center ps-1 bg py-3 rounded ">
          <p className="small ">Top Sports</p>
          <hr />

          {bet_sports.map((sport) => (
            <div key={sport.key} className="row  mb-2 bg2 rounded">
              <div className="col-2 pt-1 cursor">
                <img src={sport.img} className="" alt="sport" width={"20px"} />
              </div>

              <div
                className="col-8 pt-2 small cursor"
                onClick={() => toggleVisibility(sport.key)}
              >
                <p>{sport.group}</p>
              </div>
              <div
                className="col-2 pt-2 small cursor"
                onClick={() => toggleVisibility(sport.key)}
              >
                <p className={`bi-caret-down-fill text-info`}></p>
              </div>

              {/* Sports */}
              <div className="small">
                {visibleSports.includes(sport.key) && (
                  <div className="animate__animated animate__fadeIn">
                    <hr />
                    {sport.top.map((top) => (
                      <li className={`pb-1`} key={top.key}>
                        <Link
                          to={`/sports/${top.key}?title=${top.title}`}
                          className="sports "
                        >
                          <p className="bg-warning w-100 rounded p-2 text-black mb-1">
                            {top.title}
                          </p>
                        </Link>
                      </li>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <Sidebar></Sidebar>
      </div>
    </>
  );
};

export default Base;
