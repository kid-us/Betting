import React from "react";
import { Link } from "react-router-dom";
import { browse, game, slip, sports, vip, tournament } from "../assets";
const MenuBar = ({ bets, onClick, onShowSport, from }) => {
  return (
    <>
      <div className="menu-bar bg w-100 d-block d-lg-none px-3">
        <div className="row text-center fw-semibold pb-0 shadow-lg pt-2 text-black">
          <div className="col-20" onClick={onShowSport}>
            <img src={browse} width={"27px"} alt="" />
            <p className="pt-2 fw-semibold menu-bar-text small">Browse</p>
          </div>

          {from === "my-bets" ? (
            <div className="col-20 ">
              <Link to={"/sports/home"}>
                <img src={sports} width={"25px"} alt="icon" />
                <p className="pt-2 fw-semibold menu-bar-text small">Sports</p>
              </Link>
            </div>
          ) : (
            <div className="col-20  position-relative" onClick={onClick}>
              <img src={slip} width={"23px"} alt="icon" />
              <span className="position-absolute top-0 start-75 translate-middle badge rounded-pill bg-info text-black fw-semibold">
                {bets.length}
              </span>
              <p className="pt-2 fw-semibold menu-bar-text small">Slip</p>
            </div>
          )}

          <div className="col-20 ">
            <Link to={"https://maverickhabesha.com/games.html"}>
              <img src={game} width={"25px"} alt="icon" />
              <p className="pt-2 fw-semibold menu-bar-text small">Casino</p>
            </Link>
          </div>

          <div className="col-20 ">
            <Link to={"https://maverickhabesha.com/games.html"}>
              <img src={tournament} width={"25px"} alt="icon" />
              <p className="pt-2 fw-semibold menu-bar-text small">Challenges</p>
            </Link>
          </div>

          <div className="col-20">
            <Link to={"https://maverickhabesha.com/vip-club.html"}>
              <img src={vip} width={"25px"} alt="icon" />
              <p className="pt-2 fw-semibold menu-bar-text small">Vip</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuBar;
