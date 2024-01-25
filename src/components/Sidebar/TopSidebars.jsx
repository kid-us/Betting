import React from "react";
import { Link } from "react-router-dom";
import { game, tournament, wallet, slip } from "../../assets";

const TopSidebars = () => {
  return (
    <>
      <Link to={"https://maverickhabesha.com/games.html"}>
        <p className="fs-5 bg ps-3 p-2 mb-2 rounded">
          <img src={game} alt="icon" width={"20px"} />
          <span className="text-white fs-6 ms-2">Casino</span>
        </p>
      </Link>

      <Link to={"https://maverickhabesha.com/tournaments.html"}>
        <p className="fs-5 ps-3 bg p-2 mb-2 rounded">
          <img src={tournament} alt="icon" width={"20px"} />
          <span className="text-white fs-6 ms-2">Tournament</span>
        </p>
      </Link>

      <Link to={"https://maverickhabesha.com/wallet.html"}>
        <p className="fs-5 ps-3 bg p-2 rounded">
          <img src={wallet} alt="icon" width={"20px"} />
          <span className="text-white fs-6 ms-2">Wallet</span>
        </p>
      </Link>

      <Link to={"/sports/my-bets"}>
        <p className="fs-5 text-warning ps-3 bg p-2 rounded">
          <img src={slip} alt="" width={"20px"} />
          <span className="text-white fs-6 ms-2">My Bets</span>
        </p>
      </Link>
    </>
  );
};

export default TopSidebars;
