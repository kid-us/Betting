import React from "react";
import slip_img from "../../assets/bets/slip.svg";
import slip_img2 from "../../assets/bets/slip1.svg";
import "./slip.css";
import Form from "./Form";

const Slip = ({ removeBets, clearBets, onHandleBetSlip, bets }) => {
  return (
    <>
      <div className={`slip-container bg2 small rounded w-100 fw-semibold`}>
        <p className="pt-3 bg pb-4 ps-3 border-bottom border-secondary">
          <img src={slip_img2} width={"20px"} /> Bet Slip
          <span className="bg-warning px-2 py-1 ms-2 me-2 rounded text-black font-monospace">
            {bets.length}
          </span>
          <span
            onClick={onHandleBetSlip}
            className="cursor bi-x-lg slip-close"
          ></span>
        </p>

        <div className="row mx-3 border-bottom border-danger">
          <div className="col-8">
            <p className="text-info">Your Bets</p>
          </div>
          <div className="col-4">
            <p className="bg2 text-end small cursor me-3" onClick={clearBets}>
              Clear All
            </p>
          </div>
        </div>
        <div className="px-4 bets-container bg pt-4">
          {bets.length > 0 ? (
            bets.map((bet) => (
              <div key={bet.id} className="row bet-slip bg2 rounded pt-2 mb-3">
                <div className="col-11 small">
                  <p>
                    {bet.home} <span className="text-info mx-3">vs</span>
                    {bet.away}
                  </p>
                </div>
                <div className="col-1 small">
                  <p
                    onClick={() =>
                      removeBets(bet.id, bet.key, bet.name, bet.odd)
                    }
                    className="cursor text-info"
                  >
                    x
                  </p>
                </div>
                <p className="small ms12 text-secondary">{bet.commence_time}</p>
                <div className="col-9 ps-4">
                  <p className="text-warning fs-6">
                    {bet.name}
                    <span className="small text-white font-monospace">
                      {" "}
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

        <Form bets={bets}></Form>
      </div>
    </>
  );
};

export default Slip;
