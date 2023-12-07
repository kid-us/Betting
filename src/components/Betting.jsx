import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Base from "./Bets/Base";
import SmallBase from "./Bets/SmallBase";
import Bet from "./Bets/Bet";
import Footer from "./Footer";
import Slip from "./Slip/Slip";
import MenuBar from "./MenuBar";
import Loading from "./Loading/Loading";
import SmallSlip from "./Slip/SmallSlip";
import { upcoming } from "../constant/bet";
import { champ } from "../constant/bet";
import { filteredData } from "../constant/bet";
import useFetch from "../hook/useFetch";
// import axios from "axios";
import {
  api_key_btts,
  api_key_h2h,
  api_key_draw_no_bet,
  api_key_double_chance,
  api_key_alternate_spreads,
  api_key_alternate_totals,
  api_key_halftime_fulltime,
  api_key_goal_score,
  api_key_sports,
  api_key_upcoming,
} from "../constant/request";

const Betting = () => {
  const [betsWidth, setBetsWidth] = useState("bet-2");
  const [slipWidth, setSlipWidth] = useState("slip-1");
  const [showSlip, setShowSlip] = useState(false);
  const [showSports, setShowSports] = useState(false);
  const [additionalOdds, setAdditionalOdds] = useState({});
  const [bets, setBets] = useState([]);
  // Upcoming and Sports
  const [odds, setOdds] = useState([]);

  const [loading, setLoading] = useState(true);
  // Url Parameters
  const { key, id } = useParams();

  // Random Bookmaker market on Both Team Scores, Handicups and Under/Over
  const getRandomMarket = (key) => {
    // Get random Data
    // const filteredMarkets = filteredData.bookmakers.flatMap((bookmaker) =>
    //   bookmaker.markets.filter((market) => market.key === key)
    // );
    // const randomIndex = Math.floor(Math.random() * filteredMarkets.length);
    // return filteredMarkets[randomIndex];

    // ########################################

    //  least number of outcomes
    // const filteredMarkets = filteredData.bookmakers.flatMap((bookmaker) =>
    //   bookmaker.markets.filter((market) => market.key === key)
    // );
    // const sortedMarkets = filteredMarkets.sort(
    //   (a, b) => a.outcomes.length - b.outcomes.length
    // );
    // const selectedMarket = sortedMarkets[0];
    // return selectedMarket;

    // ########################################

    // More number of outcomes
    const filteredMarkets = filteredData.bookmakers.flatMap((bookmaker) =>
      bookmaker.markets.filter((market) => market.key === key)
    );
    const sortedMarkets = filteredMarkets.sort(
      (a, b) => b.outcomes.length - a.outcomes.length
    );
    const selectedMarket = sortedMarkets[0];
    return selectedMarket;
  };

  // User Link
  useEffect(() => {
    if (!key && !id) {
      setLoading(true);
      setTimeout(() => {
        setOdds(upcoming);
        setAdditionalOdds({});
        document.title = "Maverick Habesha Sports Betting";
        setLoading(false);
      }, 4090);
    } else if (key && !id) {
      setLoading(true);
      setTimeout(() => {
        setOdds(champ);
        setAdditionalOdds({});
        document.title = `${champ.map((cha) => cha.sport_title)}`;
        setLoading(false);
        setShowSports(false);
      }, 100);
    } else if (key && id) {
      setLoading(true);
      setTimeout(() => {
        const randomBttsMarket = getRandomMarket("btts");
        const randomAlternateTotalsMarket = getRandomMarket("alternate_totals");
        const randomAlternateSpreadsMarket =
          getRandomMarket("alternate_spreads");
        const moreOdds = {
          id: filteredData.id,
          sport_key: filteredData.sport_key,
          sport_title: filteredData.sport_title,
          commence_time: filteredData.commence_time,
          home_team: filteredData.home_team,
          away_team: filteredData.away_team,
          btts: randomBttsMarket,
          alternate_totals: randomAlternateTotalsMarket,
          alternate_spreads: randomAlternateSpreadsMarket,
        };
        setAdditionalOdds(moreOdds);

        document.title = `${moreOdds.home_team} vs ${moreOdds.away_team}`;
        setLoading(false);
        setShowSports(false);
      }, 100);
    }
  }, [filteredData, key, id, champ, upcoming]);

  // User Bets
  const handleBets = (
    id,
    key,
    name,
    price,
    home,
    away,
    commence_time,
    sport_title,
    point
  ) => {
    const newBet = {
      id,
      key,
      name,
      odd: price,
      home,
      away,
      commence_time,
      sport_title,
      point,
    };

    const existingBetIndex = bets.findIndex(
      (bet) => bet.id === id && bet.key === key
    );

    const existingBetIndexForRemovingBet = bets.findIndex(
      (bet) =>
        bet.id === id &&
        bet.key === key &&
        bet.name == name &&
        bet.odd === price
    );

    if (existingBetIndex !== -1) {
      setBets((prevBets) => {
        const updatedBets = [...prevBets];

        updatedBets[existingBetIndex] = {
          ...updatedBets[existingBetIndex],
          name,
          odd: price,
          point,
        };
        return updatedBets;
      });

      if (existingBetIndexForRemovingBet !== -1) {
        setBets((prevBets) => {
          const updatedBets = [...prevBets];
          updatedBets.splice(existingBetIndex, 1);
          return updatedBets;
        });
      }
    } else {
      setBets((prevBets) => [...prevBets, newBet]);
    }

    const windowWidth = window.innerWidth;
    // console.log(windowWidth);

    if (windowWidth > 767) {
      if (
        (betsWidth === "bet-2" && slipWidth === "slip-1") ||
        (betsWidth === "bet-2" && slipWidth === "slip-4")
      ) {
        setSlipWidth("slip-2");
        setBetsWidth("bet-3");
      }
    } else {
      setSlipWidth("slip-4");
      setBetsWidth("bet-2");
    }
  };

  const handleSlipStyle = () => {
    if (showSlip) {
      setShowSlip(false);
    } else {
      setShowSlip(true);
    }
  };

  // Clear Bet slip
  const handleClearBets = () => {
    setBets([]);
  };

  // Show bet slip
  const handleBetSlip = () => {
    // console.log("clicked");
    // if (betsWidth === "bet-4") {
    //   setSlipWidth("slip-1");
    //   setBetsWidth("bet-1");
    // }
    if (betsWidth == "bet-3") {
      setSlipWidth("slip-1");
      setBetsWidth("bet-2");
    }
  };

  // Remove single bets
  const handleRemoveBets = (id, key, name, odd) => {
    const filteredBets = bets.filter(
      (bet) =>
        bet.id !== id || bet.key !== key || bet.name !== name || bet.odd !== odd
    );

    setBets(filteredBets);
  };

  const handleShowSport = () => {
    if (showSports) {
      setShowSports(false);
    } else {
      setShowSports(true);
    }
  };

  return (
    <>
      {/* <Support></Support> */}
      <Navbar></Navbar>
      <MenuBar
        bets={bets}
        onShowSport={handleShowSport}
        onClick={handleSlipStyle}
      ></MenuBar>
      <div className="container-fluid mt-2 mt-lg-0">
        <div className="row">
          {/* Sidebar */}
          <div className={`side-2 sidebar d-none d-md-block`}>
            <Base></Base>
          </div>
          <div className={`d-block d-md-none`}>
            <div className={` ${showSports ? "" : "hidden"} slip slide-4`}>
              <SmallBase></SmallBase>
            </div>
          </div>
          {/* Bets */}
          <div className={`${betsWidth} bg mt-5 pt-4`}>
            {/* {loading ? (
              <Loading />
            ) : (
              <> */}
            <Bet
              onOddsClick={handleBets}
              addOnOdds={additionalOdds}
              odds={odds}
              bets={bets}
            ></Bet>
            <Footer></Footer>
            {/* </>
            )} */}
          </div>

          {/* Slip */}
          {/* Large Device Slip */}
          <div
            className={`${
              slipWidth === "slip-1" ? "hidden" : slipWidth
            } slip bg2 d-none d-md-block`}
          >
            <Slip
              removeBets={handleRemoveBets}
              clearBets={handleClearBets}
              bets={bets}
              onHandleBetSlip={handleBetSlip}
            ></Slip>
          </div>
          {/* Small Device Slip */}
          <div className={`d-block d-md-none`}>
            <div className={` ${showSlip ? "" : "hidden"} slip `}>
              <SmallSlip
                removeBets={handleRemoveBets}
                clearBets={handleClearBets}
                bets={bets}
                onHandleBetSlip={handleBetSlip}
                onBetSlipClose={handleSlipStyle}
              ></SmallSlip>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Betting;
