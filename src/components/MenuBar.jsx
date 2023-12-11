import React from "react";
import { browse, game, slip } from "../assets";
const MenuBar = ({ bets, onClick, onShowSport }) => {
  return (
    <>
      <div className="menu-bar w-100 d-block d-lg-none">
        <div className="row text-center fw-semibold pb-0 shadow-lg bg text-black border-top border-secondary">
          <div className="col-4 text-warning" onClick={onShowSport}>
            <img src={browse} width={"25px"} alt="" />
            <p className="fs-6">Browse</p>
          </div>

          <div
            className="col-4 text-warning position-relative"
            onClick={onClick}
          >
            <img src={slip} width={"20px"} />
            <span className="position-absolute top-0 start-75 translate-middle badge rounded-pill bg-info text-black fw-semibold">
              {bets.length}
            </span>
            <p>Bet Slip</p>
          </div>

          <div className="col-4 text-warning">
            <img src={game} width={"20px"} alt="" />
            <p>Casino</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuBar;
