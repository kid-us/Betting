import React from "react";
import { Link } from "react-router-dom";
import { browse, game, slip, sports, vip } from "../assets";
const MenuBar = ({ bets, onClick, onShowSport, from }) => {
  return (
    <>
      <div className="menu-bar w-100 d-block d-lg-none">
        <div className="row text-center fw-semibold pb-0 shadow-lg bg2 text-black">
          <div className="col-3" onClick={onShowSport}>
            <img src={browse} width={"25px"} alt="" />
            <p className="pt-2 fw-semibold menu-bar-text">Browse</p>
          </div>

          {from === "my-bets" ? (
            <div className="col-3 ">
              <Link to={"/sports/home"}>
                <img src={sports} width={"25px"} alt="icon" />
                <p className="pt-2 fw-semibold menu-bar-text">Sports</p>
              </Link>
            </div>
          ) : (
            <div className="col-3  position-relative" onClick={onClick}>
              <img src={slip} width={"23px"} alt="icon" />
              <span className="position-absolute top-0 start-75 translate-middle badge rounded-pill bg-info text-black fw-semibold">
                {bets.length}
              </span>
              <p className="pt-2 fw-semibold menu-bar-text">Bet Slip</p>
            </div>
          )}

          <div className="col-3 ">
            <Link to={"https://maverickhabesha.com/games.html"}>
              <img src={game} width={"25px"} alt="icon" />
              <p className="pt-2 fw-semibold menu-bar-text">Casino</p>
            </Link>
          </div>

          <div className="col-3">
            <Link to={"https://maverickhabesha.com/vip-club.html"}>
              <img src={vip} width={"25px"} alt="icon" />
              <p className="pt-2 fw-semibold menu-bar-text">Vip</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuBar;
