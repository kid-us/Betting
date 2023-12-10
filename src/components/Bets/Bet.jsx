import React, { useState } from "react";
import DefaultBet from "./DefaultBet";
import MoreBets from "./MoreBets";
import Swiper from "../Banners/Swiper";
import "./bet.css";

const Bet = ({
  showDefaultBet,
  onOddsClick,
  addOnOdds,
  odds,
  bets,
  sportName,
}) => {
  return (
    <>
      <div className="fw-semibold small p-lg-3">
        {showDefaultBet ? (
          <>
            <Swiper></Swiper>
            <p className="mb-4 text-light my-3" style={{ fontSize: "large" }}>
              <span className="bi-fire text-danger"></span> {sportName}
            </p>
            <DefaultBet
              bets={bets}
              odds={odds}
              onSelectBet={onOddsClick}
            ></DefaultBet>
          </>
        ) : (
          <>
            <MoreBets
              bets={bets}
              addOnOdds={addOnOdds}
              onSelectBet={onOddsClick}
              btt={odds}
              odds={odds}
            ></MoreBets>
          </>
        )}
      </div>
    </>
  );
};

export default Bet;
