import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import Support from "./Support";
import Navbar from "./Navbar";
import Base from "./Bets/Base";
import SmallBase from "./Bets/SmallBase";
import Bet from "./Bets/Bet";
import Footer from "./Footer";
import Slip from "./Slip/Slip";
import MenuBar from "./MenuBar";
import SmallSlip from "./Slip/SmallSlip";
import Loading from "./Loading/Loading";
import request from "../constant/request";
import { supported_sports } from "../constant/sport";

import axios from "axios";
import { cricket } from "../assets";

const Betting = () => {
  // Url Parameters
  const location = useLocation();
  const navigate = useNavigate();
  const { key, id } = useParams();
  // States
  const [sportTitle, setSportTitle] = useState("Popular Events");
  const [betsWidth, setBetsWidth] = useState("bet-2");
  const [slipWidth, setSlipWidth] = useState("slip-1");
  const [showSlip, setShowSlip] = useState(false);
  const [showSports, setShowSports] = useState(false);
  const [loading, setLoading] = useState(true);
  const [viewDefaultBet, setViewDefaultBet] = useState(true);
  const [additionalOdds, setAdditionalOdds] = useState({});
  const [bets, setBets] = useState([]);
  const [odds, setOdds] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (key === "home" && !id) {
          setLoading(true);
          // Fetch
          const upcoming_bets = await axios.get(request.upcoming_odds);
          const supportedSportsSet = new Set(
            supported_sports.map((sport) => sport.key)
          );
          const filteredData = upcoming_bets.data.filter((bet) =>
            supportedSportsSet.has(bet.sport_key)
          );
          document.title = "Maverick Habesha Sports Betting";
          // Set Data to the Sates
          setOdds(filteredData);
          setViewDefaultBet(true);
          setLoading(false);
        } else if (key !== "home" && !id) {
          setLoading(true);
          // Get the value of the 'title' query parameter
          const queryParams = new URLSearchParams(location.search);
          const titleParam = queryParams.get("title");
          setSportTitle(titleParam);

          // Fetch
          const sports = await axios.get(
            `${request.api_url}/${key}${request.sport_with_key}`
          );
          document.title = `${sports.data[0].sport_title} Maverick Betting`;
          // Set Data to the Sates
          setOdds(sports.data);
          setLoading(false);
          setViewDefaultBet(true);
          setShowSports(false);
        } else if (key !== "home" && id) {
          if (
            key === "cricket_international_t20" ||
            key === "boxing_boxing" ||
            key === "mma_mixed_martial_arts"
          ) {
            setLoading(false);
            navigate(-1);
          } else {
            setLoading(true);
            // Fetch
            const [
              btts,
              spreads,
              totals,
              draw,
              double,
              first_half,
              second_half,
              h2h,
            ] = await Promise.all([
              axios
                .get(`${request.api_url}/${key}/events/${id}${request.btts}`)
                .then((res) => res.data),
              axios
                .get(`${request.api_url}/${key}/events/${id}${request.spreads}`)
                .then((res) => res.data),
              axios
                .get(`${request.api_url}/${key}/events/${id}${request.totals}`)
                .then((res) => res.data),
              axios
                .get(`${request.api_url}/${key}/events/${id}${request.draw}`)
                .then((res) => res.data),
              axios
                .get(`${request.api_url}/${key}/events/${id}${request.double}`)
                .then((res) => res.data),
              axios
                .get(
                  `${request.api_url}/${key}/events/${id}${request.first_half}`
                )
                .then((res) => res.data),
              axios
                .get(
                  `${request.api_url}/${key}/events/${id}${request.second_half}`
                )
                .then((res) => res.data),
              axios
                .get(`${request.api_url}/${key}/events/${id}${request.h2h}`)
                .then((res) => res.data),
            ]);
            const moreOdds = {
              btts,
              spreads,
              totals,
              draw,
              double,
              first_half,
              second_half,
              h2h,
            };
            document.title = `${moreOdds.btts.home_team} vs ${moreOdds.btts.away_team}`;
            // Set Data to the Sates
            console.log("lorem");
            if (
              btts.bookmakers.length === 0 &&
              spreads.bookmakers.length === 0 &&
              draw.bookmakers.length === 0 &&
              double.bookmakers.length === 0 &&
              first_half.bookmakers.length === 0 &&
              second_half.bookmakers.length === 0 &&
              h2h.bookmakers.length === 0
            ) {
              navigate(-1);
            } else {
              setAdditionalOdds(moreOdds);
              setViewDefaultBet(false);
              setLoading(false);
            }
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id, key]);

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

    // For getting the browser width and change the width of the bets and other staffs
    const windowWidth = window.innerWidth;
    console.log(windowWidth);
    if (windowWidth > 991) {
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
  // Small device slip handler
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
  // Small device sport handler
  const handleShowSport = () => {
    if (showSports) {
      setShowSports(false);
    } else {
      setShowSports(true);
    }
  };
  return (
    <>
      <Navbar></Navbar>
      <MenuBar
        bets={bets}
        onShowSport={handleShowSport}
        onClick={handleSlipStyle}
      ></MenuBar>
      <div className="container-fluid mt-2 mt-lg-0">
        <div className="row">
          {/* Large Sidebar */}
          <div className={`side-2 sidebar d-none d-lg-block`}>
            <Base></Base>
          </div>
          {/* Small Sidebar */}
          <div className={`d-block d-lg-none`}>
            <div className={` ${showSports ? "" : "hidden"} slip slide-4`}>
              <SmallBase></SmallBase>
            </div>
          </div>

          {/* Bets */}
          <div className={`${betsWidth} bg mt-5 pt-4`}>
            {loading ? (
              <Loading width={betsWidth === "bet-2" ? "81.1%" : "56%"} />
            ) : (
              <>
                <Bet
                  showDefaultBet={viewDefaultBet}
                  onOddsClick={handleBets}
                  addOnOdds={additionalOdds}
                  odds={odds}
                  bets={bets}
                  sportName={sportTitle}
                ></Bet>
                <Support></Support>
                <Footer></Footer>
              </>
            )}
          </div>

          {/* Large Device Slip */}
          <div
            className={`${
              slipWidth === "slip-1" ? "hidden" : slipWidth
            } slip bg2 d-none d-lg-block`}
          >
            <Slip
              removeBets={handleRemoveBets}
              clearBets={handleClearBets}
              bets={bets}
              onHandleBetSlip={handleBetSlip}
            ></Slip>
          </div>

          {/* Small Device Slip */}
          <div className={`d-block d-lg-none`}>
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
