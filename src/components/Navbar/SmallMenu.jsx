import React from "react";
import { Link } from "react-router-dom";
import { logo2, game, tournament } from "../../assets";
import "animate.css";
const SmallMenu = ({ username, onClick, onLogout }) => {
  return (
    <>
      <div className="sm-navbar">
        <div className="menu animate__animated animate__bounceInLeft">
          <div className="float-start ps-4 pt-3">
            <img src={logo2} height="60px" />
          </div>
          <div className="float-end pt-4">
            <span
              onClick={onClick}
              className="nav-item text-danger fs-3 pe-5 me-5 bi-x-lg"
            ></span>
          </div>
          <ul className="pe-5 mt-5 pt-5 me-5">
            <p className="py-1 rounded  fw-semibold bg-info fs-1 ps-3 text-dark mt-3">
              <span> {username} </span>
            </p>

            <li className="bg2 rounded ps-1 py-1">
              <Link
                to="http://maverickhabesha.com/dashboard.html"
                className="fs-4 fw-semibold"
              >
                <span className="bi-person-fill text-warning"></span> Profile
              </Link>
            </li>
            <li className="bg2 rounded ps-1 py-1">
              <Link
                to="http://maverickhabesha.com/tournaments.html"
                className="fs-4 fw-semibold"
              >
                <img src={tournament} width="20px" /> Challenges
              </Link>
            </li>
            <li className="bg2 rounded ps-1 py-1">
              <Link
                to="http://maverickhabesha.com/games.html"
                className="fs-4 fw-semibold"
              >
                <img src={game} width="20px" /> Casino
              </Link>
            </li>
            <hr className="my-2" />
            <li className="bg2 rounded ps-1 py-1">
              <Link
                to="http://maverickhabesha.com/setting.html"
                className="fs-4 fw-semibold"
              >
                <span className="bi-gear-fill text-warning"></span> Setting
              </Link>
            </li>
            <hr className="my-2" />
            <li className="bg2 rounded ps-1 py-1">
              <Link onClick={onLogout} className="fs-4 fw-semibold">
                <span className="bi-power text-warning"></span> Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SmallMenu;
