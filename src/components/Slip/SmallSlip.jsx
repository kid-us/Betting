import React, { useState, useEffect } from "react";
import slip_img from "../../assets/bets/slip.svg";
import slip_img2 from "../../assets/bets/slip1.svg";
import "./slip.css";
import { useAuth } from "../../context/AuthenticateUser";
import Multiple from "./Multiple";

const SmallSlip = ({ removeBets, clearBets, bets, onBetSlipClose }) => {
  const auth = useAuth();
  const [singleBets, setSingleBets] = useState([]);
  const [singleBetError, setSingleBetError] = useState(false);

  const [balance, setBalance] = useState("");

  useEffect(() => {
    setBalance(auth.balance);
  }, [auth]);

  // Single and Multiple Buttons
  const [single, setSingle] = useState(
    "rounded-pill border border-warning cursor bg2"
  );
  const [multiple, setMultiple] = useState("rounded-pill cursor shadow");

  const [activeBet, setActiveBet] = useState("single");

  const handleBetType = (betType) => {
    if (betType === "single") {
      setSingle("rounded-pill border border-warning cursor bg2");
      setMultiple("rounded-pill cursor shadow");
      setActiveBet("single");
    } else {
      setMultiple("rounded-pill border border-warning cursor bg2");
      setSingle("rounded-pill cursor shadow");
      setActiveBet("multiple");
    }
  };

  // Single Slip Goes here
  const handleInputs = (bet, index) => (e) => {
    let bet_amount = Number(e.target.value);
    const totalPayout = parseFloat(bet.odd * bet_amount.toFixed(2));
    const updatedBet = {
      ...bet,
      bet_amount: bet_amount,
      potential_payout: totalPayout,
    };

    setSingleBets((prevSingleBet) => {
      const copySingleBet = [...prevSingleBet];
      copySingleBet[index] = updatedBet;
      return copySingleBet;
    });
  };

  // Display the Total payout for a single Bets
  const handleEstPayout = (event_id, bet_market, index) => {
    if (
      singleBets &&
      singleBets[index] &&
      singleBets[index].event_id === event_id &&
      singleBets[index].bet_market === bet_market &&
      singleBets[index].bet_amount
    ) {
      return singleBets[index].potential_payout.toFixed(2);
    }
    return "0.00";
  };

  // Single Bets Button click
  const handleSingleBetSlips = () => {
    if (singleBets.length === 0) {
      setSingleBetError(true);
      return;
    }

    const betAmounts = singleBets.map((bet) => bet.bet_amount);

    if (bets.length !== singleBets.length) {
      setSingleBetError(true);
      return;
    }
    if (betAmounts.includes(0)) {
      setSingleBetError(true);
      return;
    } else {
      setSingleBetError(false);
      let authToken = localStorage.getItem("access_token");
      axios
        .post(
          "https://api.maverickhabesha.com/api/v1/betting/create-single-slips",
          singleBets,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${authToken}`,
            },
          }
        )
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            clearBets();
            setSingleBets([]);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  // Total Bet Amount
  const totalBetAmount = () => {
    let sum = 0;
    for (let i = 0; i < singleBets.length; i++) {
      sum = sum + singleBets[i].bet_amount;
    }
    return sum;
  };

  // Total Est Payout
  const totalEstPayout = () => {
    let sum = 0;
    for (let i = 0; i < singleBets.length; i++) {
      sum = sum + singleBets[i].potential_payout;
    }
    return sum.toFixed(2);
  };

  // Hide the Error
  const hideErrorMessage = () => {
    setSingleBetError(false);
  };

  // Error Message
  const errorMessage = () => {
    return (
      <p className="bg-danger rounded slip-error py-2 text-center">
        Please fill bet Amount for all selected bets.
        <span className="bg-dark ms-3 px-1 cursor" onClick={hideErrorMessage}>
          x
        </span>
      </p>
    );
  };

  // Human Time
  const formatCommenceTime = (commenceTime) => {
    const options = {
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };

    return new Intl.DateTimeFormat("en-UK", options).format(
      new Date(commenceTime)
    );
  };

  return (
    <div className="sm-slip-container small fw-semibold bg2 animate__animated animate__fadeInUp">
      <p className="pt-2 bg pb-4 ps-3 border-bottom border-secondary">
        <img src={slip_img2} width={"20px"} /> Bet Slip
        <span className="bg-warning px-2 py-1 ms-2 me-4 rounded text-black font-monospace">
          {bets.length}
        </span>
        <span
          onClick={onBetSlipClose}
          className="cursor bi-x-lg slip-close"
        ></span>
      </p>

      <div
        className="row mx-3 border-bottom border-danger"
        style={{ lineHeight: "20px" }}
      >
        <div
          className="12 shadow bg rounded-pill ps-3 mb-3"
          style={{ lineHeight: "10px" }}
        >
          <div className="row justify-content-center">
            <div
              onClick={() => handleBetType("single")}
              className={`col-6 ${single} `}
            >
              <p
                className={`ps-2 pt-3 bi-tag-fill ${
                  activeBet === "single" && "text-warning"
                }`}
              >
                &nbsp; Single
              </p>
            </div>
            <div
              onClick={() => handleBetType("multiple")}
              className={`col-6 ${multiple}`}
            >
              <p
                className={`ps-2 pt-3 bi-tags-fill ${
                  activeBet === "multiple" && "text-warning"
                }`}
              >
                &nbsp; Multiple
              </p>
            </div>
          </div>
        </div>

        <hr />
        <div className="col-8" style={{ lineHeight: "8px" }}>
          <p className="text-info">Your Bets</p>
        </div>
        <div className="col-4" style={{ lineHeight: "8px" }}>
          <p className="bg2 text-end small cursor me-3" onClick={clearBets}>
            Clear All
          </p>
        </div>
      </div>

      {/* Bets */}
      <div
        className={`px-4 bg pt-2 ${
          activeBet === "single"
            ? "sm-single-slip-container"
            : "sm-multiple-slip-container"
        }`}
      >
        {activeBet === "single" ? (
          // Single Bet
          bets.length > 0 ? (
            bets.map((bet, index) => (
              <div key={index} className="row bet-slip bg2 rounded pt-2 mb-3">
                <div className="col-11 small">
                  <p>
                    {bet.home} <span className="text-info mx-3">vs</span>
                    {bet.away}
                  </p>
                </div>
                <div className="col-1 small">
                  <p
                    onClick={() =>
                      removeBets(
                        bet.event_id,
                        bet.bet_market,
                        bet.chosen_team,
                        bet.odd
                      )
                    }
                    className="cursor text-info"
                  >
                    x
                  </p>
                </div>
                <p className="small ms12 text-info">
                  {formatCommenceTime(bet.event_date)}
                </p>
                <div className="col-9 ps-4">
                  <p className="text-warning fs-6">
                    {bet.chosen_team}
                    <span className="small text-white font-monospace">
                      {bet.point}
                    </span>
                  </p>
                </div>
                <div className="col-1 small">
                  <p className="text-warning fs-6 font-monospace">{bet.odd}</p>
                </div>
                <div className="col-6">
                  <input
                    onChange={handleInputs(bet, index)}
                    type="number"
                    className="form-control py-1 fs-6 fw-semibold text-center font-monospace slip-input bg"
                    placeholder="0.00"
                    min={5}
                  />
                </div>
                <div className="col-4 offset-2 line-hight-small">
                  <p className="small text-info lh-1">Est. Payout </p>
                  <p className="font-monospace text-warning fs-6">
                    {handleEstPayout(bet.event_id, bet.bet_market, index) ||
                      "0.00"}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center small text-info">
              <img src={slip_img} width={"150px"} className="mt-5 pt-4" />
              <li className="mt-5">!Bet Slip is Empty</li>
              <li>Start Betting Now</li>
            </div>
          )
        ) : // Multiple
        bets.length > 0 ? (
          bets.map((bet, index) => (
            <div key={index} className="row bet-slip bg2 rounded pt-2 mb-3">
              <div className="col-11 small">
                <p>
                  {bet.home} <span className="text-info mx-3">vs</span>
                  {bet.away}
                </p>
              </div>
              <div className="col-1 small">
                <p
                  onClick={() =>
                    removeBets(
                      bet.event_id,
                      bet.bet_market,
                      bet.chosen_team,
                      bet.odd
                    )
                  }
                  className="cursor text-info"
                >
                  x
                </p>
              </div>
              <p className="small ms12 text-info">
                {formatCommenceTime(bet.event_date)}
              </p>
              <div className="col-9 ps-4">
                <p className="text-warning fs-6">
                  {bet.chosen_team}
                  <span className="small text-white font-monospace">
                    {bet.point}
                  </span>
                </p>
              </div>
              <div className="col-1 small">
                <p className="text-warning fs-6 font-monospace">{bet.odd}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center small text-info">
            <img src={slip_img} width={"150px"} className="mt-5 pt-4" />
            <li className="mt-5">!Bet Slip is Empty</li>
            <li>Start Betting Now</li>
          </div>
        )}
      </div>

      {/* Buttton */}
      {activeBet === "multiple" ? (
        <div className="sm-slip-info position-relative">
          <div className="position-absolute w-100" style={{ bottom: "20px" }}>
            <Multiple balance={balance} bets={bets}></Multiple>
          </div>
        </div>
      ) : (
        <div className="sm-slip-info position-relative">
          <div
            className="sm-slip-info position-absolute bg2 px-3 pt-3 w-100"
            style={{ bottom: "10px" }}
          >
            <div className="row" style={{ lineHeight: "10px" }}>
              <div className="col-8 text-info small text-uppercase">
                <p>Total Bet Amount </p>
              </div>
              <div className="col-4">
                <p className="text-warning fs-6 font-monospace">
                  {totalBetAmount()} ETB
                </p>
              </div>

              <div className="col-8 text-info small text-uppercase">
                <p>Est. Payout </p>
              </div>
              <div className="col-4">
                <p className="text-warning fs-6 font-monospace">
                  {totalEstPayout()}
                </p>
              </div>
            </div>
            {/* Error Message */}
            {singleBetError && errorMessage()}
            {totalBetAmount() > balance ? (
              <button className="btn btn-light disabled bet-btn w-100 px-1 py-2 fw-semibold mt-2">
                Low Balance
              </button>
            ) : (
              <button
                onClick={handleSingleBetSlips}
                className="btn btn-warning bet-btn w-100 px-1 py-2 fw-semibold mt-2"
              >
                Place Single Bet
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SmallSlip;
