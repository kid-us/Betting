import React from "react";
import DefaultBet from "./DefaultBet";
import MoreBets from "./MoreBets";
import Swiper from "../Banners/Swiper";
import "./bet.css";

const Bet = ({ onOddsClick, addOnOdds, odds, bets }) => {
  const isAddOnOddsEmpty = Object.keys(addOnOdds).length === 0;

  return (
    <>
      <div className="fw-semibold small p-lg-3 p-2">
        {isAddOnOddsEmpty ? (
          <>
            <Swiper></Swiper>
            <DefaultBet
              bets={bets}
              odds={odds}
              onSelectBet={onOddsClick}
            ></DefaultBet>
          </>
        ) : (
          <MoreBets
            bets={bets}
            addOnOdds={addOnOdds}
            onSelectBet={onOddsClick}
          ></MoreBets>
        )}
      </div>
    </>
  );
};

export default Bet;
