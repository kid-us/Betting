import React, { useEffect, useState } from "react";
import Support from "./Support";
import Navbar from "./Navbar";
import Base from "./Bets/Base";
import SmallBase from "./Bets/SmallBase";
import Footer from "./Footer";
import MenuBar from "./MenuBar";
import Loading from "./Loading/Loading";
import MySingleBets from "./MyBets/MySingleBets";
import MyMultipleBets from "./MyBets/MyMultipleBets";
import { slip } from "../assets";
import axios from "axios";

const MyBets = () => {
  const [allSlips, setAllSlips] = useState([]);
  const [allSingleSlips, setAllSingleSlips] = useState([]);
  const [allMultipleSlips, setAllMultipleSlips] = useState([]);
  // Single
  const [singleActiveSlips, setSingleActiveSlips] = useState([]);
  const [singleSettledSlips, setSingleSettledSlips] = useState([]);
  const [singleWinSlips, setSingleWinSlips] = useState([]);
  const [singleLoseSlips, setSingleLoseSlips] = useState([]);
  // Multiple
  const [multipleActiveSlips, setMultipleActiveSlips] = useState([]);
  const [multipleSettledSlips, setMultipleSettledSlips] = useState([]);
  const [multipleWinSlips, setMultipleWinSlips] = useState([]);
  const [multipleLoseSlips, setMultipleLoseSlips] = useState([]);
  // Other States
  const [showSports, setShowSports] = useState(false);
  const [betsWidth, setBetsWidth] = useState("bet-2");
  const [loading, setLoading] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [betStat, setBetStat] = useState("All");
  const [displayBet, setDisplayBet] = useState("Single");

  useEffect(() => {
    const authToken = localStorage.getItem("access_token");
    setLoading(true);
    axios
      .get(
        "https://api.maverickhabesha.com/api/v1/betting/get-slips?group=true",
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      )
      .then((response) => {
        let slips = response.data;
        console.log(response);

        const filteredData = slips.filter((item) => item.slips.length > 0);
        setAllSlips(filteredData);

        const singleData = [];
        const multipleData = [];

        slips.forEach((slip) => {
          if (slip.slips.length === 1) {
            singleData.push(slip);
          } else if (slip.slips.length > 1) {
            multipleData.push(slip);
          }
        });
        // Single Slips
        const activeSingleData = singleData.filter((active) =>
          active.slips.some((slip) => slip.slip_status === "Pending")
        );
        const settledSingleData = singleData.filter(
          (settled) =>
            !settled.slips.some((slip) => slip.slip_status === "Pending")
        );
        const winSingleData = singleData.filter(
          (win) => win.bet_outcome == "Win"
        );
        const loseSingleData = singleData.filter(
          (lose) => lose.bet_outcome == "Lose"
        );

        setSingleActiveSlips(activeSingleData);
        setSingleSettledSlips(settledSingleData);
        setSingleWinSlips(winSingleData);
        setSingleLoseSlips(loseSingleData);

        // Multiple Slips
        const activeMultipleData = multipleData.filter((active) =>
          active.slips.some((slip) => slip.slip_status === "Pending")
        );
        const settledMultipleData = multipleData.filter(
          (settled) =>
            !settled.slips.some((slip) => slip.slip_status === "Pending")
        );
        const winMultipleData = multipleData.filter(
          (win) => win.bet_outcome == "Win"
        );
        const loseMultipleData = multipleData.filter(
          (lose) => lose.bet_outcome == "Lose"
        );

        setMultipleActiveSlips(activeMultipleData);
        setMultipleSettledSlips(settledMultipleData);
        setMultipleWinSlips(winMultipleData);
        setMultipleLoseSlips(loseMultipleData);

        setAllSingleSlips(singleData);
        setAllMultipleSlips(multipleData);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Small device sport handler
  const handleShowSport = () => {
    if (showSports) {
      setShowSports(false);
    } else {
      setShowSports(true);
    }
  };
  // Handle Dropdown
  const handleDropdown = () => {
    setDropdown(!dropdown);
  };
  // Handle Bet Status
  const handleBetStat = (name) => {
    setBetStat(name);
    setDropdown(!dropdown);
  };
  // Handle display slip status
  const handleDisplayBet = (data) => {
    setDisplayBet(data);
  };
  // Handle balance adding
  const handleAddBalance = (id) => {
    const authToken = localStorage.getItem("access_token");
    axios
      .get(
        `https://api.maverickhabesha.com/api/v1/betting/send-win-money/${id}`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Navbar></Navbar>
      <MenuBar onShowSport={handleShowSport} from={"my-bets"}></MenuBar>
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

          {/* Slip Contents */}
          <div className={`${betsWidth} bg mt-5 pt-4`}>
            {loading ? (
              <Loading width={betsWidth === "bet-2" ? "81.1%" : "56%"} />
            ) : (
              <>
                <div className="row justify-content-between fw-semibold mt-2">
                  {/* Dropdown */}
                  <div className="col-lg-5 col-6 ms-2">
                    <img src={slip} alt="" width={"30px"} />
                    <span className="ms-2"> My Bets</span>
                  </div>

                  <div className="col-lg-2 col-5">
                    <div className="position-absolute bg2 rounded pt-2 px-lg-4 px-3">
                      <p
                        onClick={() => handleDropdown()}
                        className="text-light cursor small text-uppercase"
                      >
                        {betStat}
                        <span
                          className={`${
                            dropdown
                              ? " bi-caret-up-fill"
                              : " bi-caret-down-fill"
                          } ms-4 text-light px-1 `}
                        ></span>
                      </p>
                      <div
                        style={{ lineHeight: "20px" }}
                        className={`${
                          dropdown ? "" : "hidden"
                        } cursor text-warning w-100 pe-lg-5 ps-3`}
                      >
                        <p
                          onClick={() => handleBetStat("All")}
                          className="slip-type cursor text-warning mb-2 pb-1 text-uppercase"
                        >
                          All
                        </p>
                        <p
                          onClick={() => handleBetStat("Active")}
                          className="slip-type cursor text-warning mb-2 pb-1 text-uppercase"
                        >
                          Active
                        </p>
                        <p
                          onClick={() => handleBetStat("Settled")}
                          className="slip-type cursor text-warning mb-2 pb-1 text-uppercase"
                        >
                          Settled
                        </p>
                        <p
                          onClick={() => handleBetStat("Win")}
                          className="slip-type cursor text-warning mb-2 pb-1 text-uppercase"
                        >
                          Win
                        </p>
                        <p
                          onClick={() => handleBetStat("Lose")}
                          className="slip-type cursor text-warning mb-2 pb-1 text-uppercase"
                        >
                          Lose
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Single Multiple Buttons */}
                  <div className="d-block d-md-none">
                    <div className="row mt-4 shadow bg2 rounded py-1 ps-3 mx-1">
                      <div
                        onClick={() => handleDisplayBet("Single")}
                        className={`col-6 ps-5 ${
                          displayBet === "Single"
                            ? "bg shadow-lg rounded-pill border"
                            : "text-light"
                        }`}
                      >
                        <p className="ps-2 pt-2">Single</p>
                      </div>
                      <div
                        onClick={() => handleDisplayBet("Multiple")}
                        className={`col-6 text-end pe-5 fw-semibold ${
                          displayBet === "Multiple"
                            ? "bg shadow-lg rounded-pill border"
                            : "text-light"
                        }`}
                      >
                        <p className="ps-2 pt-2">Multiple</p>
                      </div>
                    </div>
                  </div>

                  {/* Bet Type */}
                  <div className="container pt-lg-2">
                    <div className="bg2 row rounded py-3 mt-3 mx-lg-1 px-2">
                      {/* Single Large Device */}
                      <div className="col-lg-6 col-12">
                        <div className="d-none d-md-block">
                          <MySingleBets
                            addBalance={handleAddBalance}
                            slipType={betStat}
                            itemsPerPage={2}
                            singleSlips={
                              betStat === "All"
                                ? allSingleSlips
                                : betStat === "Active"
                                ? singleActiveSlips
                                : betStat === "Settled"
                                ? singleSettledSlips
                                : betStat === "Win"
                                ? singleWinSlips
                                : singleLoseSlips
                            }
                          />
                        </div>
                      </div>

                      {/* Multiple Large Device */}
                      <div className="col-lg-6 col-12">
                        <div className="d-none d-md-block">
                          <MyMultipleBets
                            addBalance={handleAddBalance}
                            slipType={betStat}
                            itemsPerPage={1}
                            multipleSlips={
                              betStat === "All"
                                ? allMultipleSlips
                                : betStat === "Active"
                                ? multipleActiveSlips
                                : betStat === "Settled"
                                ? multipleSettledSlips
                                : betStat === "Win"
                                ? multipleWinSlips
                                : multipleLoseSlips
                            }
                          ></MyMultipleBets>
                        </div>
                      </div>

                      {/* Single Small Device */}
                      <div
                        className={`col-lg-6 col-12 ${
                          displayBet === "Single" ? "" : "hidden"
                        } `}
                      >
                        <div className="d-block d-md-none">
                          <MySingleBets
                            addBalance={handleAddBalance}
                            slipType={betStat}
                            itemsPerPage={2}
                            singleSlips={
                              betStat === "All"
                                ? allSingleSlips
                                : betStat === "Active"
                                ? singleActiveSlips
                                : betStat === "Settled"
                                ? singleSettledSlips
                                : betStat === "Win"
                                ? singleWinSlips
                                : singleLoseSlips
                            }
                          />
                        </div>
                      </div>

                      {/* Multiple Small Device */}
                      <div
                        className={`col-lg-6 col-12 ${
                          displayBet === "Multiple" ? "" : "hidden"
                        }`}
                      >
                        <div className="d-block d-md-none">
                          <MyMultipleBets
                            addBalance={handleAddBalance}
                            slipType={betStat}
                            itemsPerPage={1}
                            multipleSlips={
                              betStat === "All"
                                ? allMultipleSlips
                                : betStat === "Active"
                                ? multipleActiveSlips
                                : betStat === "Settled"
                                ? multipleSettledSlips
                                : betStat === "Win"
                                ? multipleWinSlips
                                : multipleLoseSlips
                            }
                          ></MyMultipleBets>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Support></Support>
                <Footer></Footer>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyBets;
