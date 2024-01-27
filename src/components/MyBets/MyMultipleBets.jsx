import React, { useState, useEffect } from "react";
import { logo2, slip2 } from "../../assets";

const MyMultipleBets = ({
  multipleSlips,
  slipType,
  addBalance,
  itemsPerPage,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(multipleSlips.length / itemsPerPage);

  useEffect(() => {
    // Ensure current page is within valid range
    if (currentPage < 1 || currentPage > totalPages) {
      setCurrentPage((prevPage) => Math.min(Math.max(prevPage, 1), totalPages));
    }
  }, [currentPage, totalPages]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // Calculate start and end indices for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = multipleSlips.slice(startIndex, endIndex);
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

  const formatBetPlacedTime = (commenceTime) => {
    const options = {
      month: "long",
      day: "numeric",
    };

    return new Intl.DateTimeFormat("en-UK", options).format(
      new Date(commenceTime)
    );
  };

  const totalOdds = (data) => {
    let totOdds = 0;
    for (let i = 0; i < data.slips.length; i++) {
      totOdds = totOdds + Number(data.slips[i].odds);
    }
    return totOdds;
  };

  const totalPayout = (data) => {
    return (totalOdds(data) * data.bet_amount).toFixed(2);
  };

  return (
    <>
      <p className="mx-lg-1 fs-5 mb-4">
        <span className="text-warning bi-tags-fill m"> &nbsp;</span> Multiple
        Bet Slips
      </p>
      <div className="pt-3">
        {multipleSlips.length > 0 ? (
          currentItems.map(
            (multiple, index) =>
              multiple.slips.length > 0 && (
                <div key={index}>
                  <div
                    className="bg rounded row px-lg-3 mx-lg-1 pt-3 mb-3"
                    style={{ lineHeight: "10px" }}
                  >
                    <div className="col-8 ps-4 pt-2">
                      <p className="small font-monospace text-success">
                        <span className="text-light">Bet Placed : &nbsp;</span>
                        {formatBetPlacedTime(multiple.slips[0].created_at)}
                      </p>
                    </div>
                    <div className="col-4 text-end">
                      <p className=" font-monospace small">
                        {multiple.bet_outcome == "Win" ? (
                          <span className="win bg-warning p-1 text-dark rounded-pill small bi-trophy-fill px-3">
                            &nbsp; Win
                          </span>
                        ) : multiple.bet_outcome == "Lose" ? (
                          <span className="win bg-danger p-1 text-light rounded-pill small bi-heartbreak-fill px-3">
                            &nbsp; Lose
                          </span>
                        ) : (
                          <span className="win bg-primary p-1 text-light rounded-pill small bi-hourglass-split px-1 px-lg-3">
                            &nbsp; Pending
                          </span>
                        )}
                      </p>
                    </div>
                    <hr />
                    {multiple.slips.map((mulSlip, index) => (
                      <div className="col-12" key={index}>
                        <div
                          className="row pt-2"
                          style={{ borderBottom: "1px solid gray" }}
                        >
                          <div className="col-12">
                            <p className="small">
                              <span>{mulSlip.home} </span> &nbsp; vs &nbsp;
                              <span> {mulSlip.away}</span>
                            </p>
                          </div>

                          <div className="col-8">
                            <p className="text-warning">
                              {mulSlip.chosen_team}
                            </p>
                          </div>

                          <div className="col-4">
                            <p className="text-warning font-monospace text-end pe-4">
                              {mulSlip.odds}
                            </p>
                          </div>

                          <p className="small text-info font-monospace">
                            {formatCommenceTime(mulSlip.event_date)}
                          </p>
                        </div>
                      </div>
                    ))}
                    <div className="col-lg-3 col-3 mt-4">
                      <hr className="border border-2" />
                    </div>
                    <div className="col-lg-6 col-6 text-center pt-2">
                      <img src={logo2} alt="logo" width={"150px"} />
                    </div>
                    <div className="col-lg-3 col-3 mt-4">
                      <hr className="border border-2" />
                    </div>

                    {/* Slip Info */}
                    <div className="col-6 small">
                      <p>Total Odds</p>
                    </div>
                    <div className="col-6 text-end">
                      <p className="font-monospace text-info">
                        {totalOdds(multiple)}
                      </p>
                    </div>

                    <div className="col-6 small">
                      <p>Bet Amount</p>
                    </div>
                    <div className="col-6 text-end">
                      <p className="font-monospace text-info">
                        {multiple.bet_amount}
                      </p>
                    </div>

                    <div className="col-6 amall">
                      <p>Est. Payout</p>
                    </div>
                    <div className="col-6 text-end">
                      <p className="font-monospace text-info">
                        {totalPayout(multiple)}
                        {multiple.bet_outcome == "Win" &&
                          multiple.bet_status === "Pending" && (
                            <span
                              onClick={() => addBalance(multiple.group_id)}
                              className="bg-warning text-light cursor shadow-lg small py-2 px-3 ms-2 rounded border border-danger"
                            >
                              Get Paid
                            </span>
                          )}
                      </p>
                    </div>
                  </div>
                </div>
              )
          )
        ) : (
          <div className="text-center py-5 bg rounded">
            <img
              src={slip2}
              alt="slip"
              className="img-fluid pt-lg-5"
              width={"200px"}
            />
            <div className="mt-5 small" style={{ lineHeight: "10px" }}>
              <p>No {slipType !== "All" ? slipType : ""} Bets</p>
              <p>Start Betting Now!</p>
            </div>
          </div>
        )}
        {multipleSlips.length > 0 && (
          <div className="mx-1 text-end">
            <button
              className={` ${
                currentPage === 1
                  ? "btn-secondary text-light fw-semibold btn-sm px-4 py-1"
                  : "btn-warning text-black fw-semibold btn-sm px-4 py-1"
              } btn`}
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span className="small mx-3">
              {`Slip ${currentPage}`} of
              <span className="text-warning"> {` ${totalPages}`}</span>
            </span>
            <button
              className={` ${
                currentPage === totalPages
                  ? "btn-secondary text-light fw-semibold btn-sm px-4 py-1"
                  : "btn-warning text-black fw-semibold btn-sm px-4 py-1"
              } btn`}
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default MyMultipleBets;
