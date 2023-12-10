import React from "react";
import { sports, game, slip } from "../assets";
const MenuBar = ({ bets, onClick, onShowSport }) => {
  return (
    <>
      <div className="menu-bar w-100 d-block d-lg-none">
        <div className="row text-center fw-semibold pb-0 shadow-lg bg text-black border-top border-secondary">
          <div className="col-4 text-warning" onClick={onShowSport}>
            <img src={sports} width={"18px"} alt="" />
            <p className="fs-6">Sports</p>
          </div>

          <div
            className="col-4 text-warning position-relative"
            onClick={onClick}
          >
            <img src={slip} width={"18px"} />
            <span className="position-absolute top-0 start-75 translate-middle badge rounded-pill bg-info text-black fw-semibold">
              {bets.length}
            </span>
            <p>Bet Slip</p>
          </div>

          <div className="col-4 text-warning">
            <img src={game} width={"18px"} alt="" />
            <p>Casino</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuBar;
