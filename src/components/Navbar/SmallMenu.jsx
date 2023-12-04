import React from "react";
import { Link } from "react-router-dom";
import logo2 from "../../assets/logo2.png";
import game from "../../assets/dice.png";
import tournament from "../../assets/trophy.png";
import "animate.css";
const SmallMenu = ({ username, onClick, onLogout }) => {
  // const menus = [
  //   {
  //     title: "Profile",
  //     to: "http://maverickhabesha.com/dashboard.html",
  //     icon: "bi-person-fill",
  //   },
  //   {
  //     title: "Tournaments",
  //     to: "http://maverickhabesha.com/tournaments.html",
  //     img: tournament,
  //   },
  //   {
  //     title: "Games",
  //     to: "http://maverickhabesha.com/games.html",
  //     img: game,
  //   },
  //   {
  //     title: "Setting",
  //     to: "http://maverickhabesha.com/setting.html",
  //     icon: "bi-gear-fill",
  //   },
  //   {
  //     title: "Logout",
  //     to: "",
  //     icon: "bi-power",
  //   },
  // ];
  return (
    <>
      <div className="sm-navbar">
        <div className="menu animate__animated animate__bounceInLeft">
          <div className="float-start">
            <img src={logo2} height="70px" />
          </div>
          <div className="float-end pt-3">
            <span
              onClick={onClick}
              className="nav-item text-danger fs-3 pe-5 me-5 bi-x-lg"
            ></span>
          </div>
          <ul className="pe-5 mt-5 pt-5">
            <ul>
              <p className="pt-4 pb-3 fw-semibold bi bi-person-fill fs-1 text-warning">
                <span> {username} </span>
              </p>

              <li>
                <Link
                  to="http://maverickhabesha.com/dashboard.html"
                  className="fs-4 fw-semibold"
                >
                  <span className="bi-person-fill text-warning"></span>
                  Profile
                </Link>
              </li>

              <li>
                <Link
                  to="http://maverickhabesha.com/tournaments.html"
                  className="fs-4 fw-semibold"
                >
                  <img src={tournament} width="20px" />
                  Tournaments
                </Link>
              </li>
              <li>
                <Link
                  to="http://maverickhabesha.com/games.html"
                  className="fs-4 fw-semibold"
                >
                  <img src={game} width="20px" /> Games
                </Link>
              </li>
              <hr className="my-2" />
              <li>
                <Link
                  to="http://maverickhabesha.com/setting.html"
                  className="fs-4 fw-semibold"
                >
                  <span className="bi-gear-fill text-warning"></span> Setting
                </Link>
              </li>

              <hr className="my-2" />

              <li>
                <Link onClick={onLogout} className="fs-4 fw-semibold">
                  <span className="bi-power text-warning"></span> Logout
                </Link>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SmallMenu;
