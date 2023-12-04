import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { bet_sports } from "../../constant/Sport";
import slip from "../../assets/bets/slip1.svg";

import "./sport.css";

const SmallBase = () => {
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
        className={`px-4 sm-sidebar-wrapper fw-semibold shadow-lg animate__animated animate__fadeInUp`}
      >
        <Link>
          <p className="fs-5 text-warning ps-3 bg2 p-2 rounded mt-3">
            <img src={slip} alt="" width={"20px"} />
            <span className="text-white fs-6 ms-2">My Bets</span>
          </p>
        </Link>
        <Link to={"https://maverickhabesha.com/wallet.html"}>
          <p className="fs-5 text-warning bi-cash ps-3 bg2 p-2 rounded">
            <span className="text-white fs-6 ms-2">Wallet</span>
          </p>
        </Link>

        <div className="row justify-content-center ps-1 bg py-3 rounded px-1">
          <p className="small ">Top Sports</p>
          <hr />
          {bet_sports.map((sport) => (
            <div key={sport.key} className="row mb-2 bg2 rounded">
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
                  <ul className="animate__animated animate__fadeIn">
                    <hr />
                    {sport.top.map((top) => (
                      <li className={`pb-1`} key={top.key}>
                        <Link to={`/sports/${top.key}`} className="sports">
                          {top.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SmallBase;
