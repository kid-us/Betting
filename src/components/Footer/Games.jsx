import React from "react";
import { Link } from "react-router-dom";
import { games } from "../../constant/footer";

const Games = () => {
  return (
    <>
      <div className="mt-5 col-lg-2 col-md-3 col-4 fw-semibold">
        <p>Games</p>
        {games.map((game) => (
          <p key={game.id} className="small">
            <Link className="footer-link" to={game.link}>
              {game.title}
            </Link>
          </p>
        ))}
      </div>
    </>
  );
};

export default Games;
