import React, { useState } from "react";
import DefaultBet from "./DefaultBet";
import MoreBets from "./MoreBets";
import Swiper from "../Banners/Swiper";
import "./bet.css";
import { sportBook } from "../../assets";

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
      <div className="fw-semibold small pt-1">
        {showDefaultBet ? (
          <>
            <Swiper></Swiper>
            <p className="text-light my-2" style={{ fontSize: "large" }}>
              <img src={sportBook} alt="icon" width={"40px"} /> {sportName}
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
