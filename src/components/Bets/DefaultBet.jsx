import React from "react";
import { Link } from "react-router-dom";

const DefaultBet = ({ bets, odds, onSelectBet }) => {
  const isBetSelected = (id, key, name, odd) => {
    for (let i = 0; i < bets.length; i++) {
      const f =
        bets[i].event_id === id &&
        bets[i].bet_market === key &&
        bets[i].chosen_team === name &&
        bets[i].odd === odd;
      if (f) {
        return f;
      }
    }
  };

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
    <div className="mt-3 p-2">
      {odds.map(
        (game) =>
          game.bookmakers.length > 0 && (
            <div
              className="row py-3 px-lg-4 p-0 bg2 rounded mb-3 shadow-lg"
              key={game.id}
              style={{ lineHeight: "10px" }}
            >
              <p className="text-warning ">{game.sport_title}</p>
              <hr className="p-0 text-secondary" />
              <div className="row justify-content-between">
                <div className="col-lg-10 col-7">
                  <p className="small text-info">
                    {formatCommenceTime(game.commence_time)}
                  </p>
                </div>
                <div className="col-lg-2 col-5 text-end g-0">
                  <Link
                    to={`/sports/${game.sport_key}/${game.id}`}
                    className="text-warning bi-plus-lg font-monospace"
                  >
                    &nbsp;Side Bets
                  </Link>
                </div>
              </div>

              <div className="bets col-lg-4 col-12 pt-3">
                <div
                  className="d-block d-md-none"
                  style={{ lineHeight: "15px" }}
                >
                  <p>
                    {game.home_team} <span className="text-info mx-4">vs</span>
                    {game.away_team}
                  </p>
                </div>
                <div className="d-none d-md-block">
                  <p>{game.home_team}</p>
                  <p>{game.away_team}</p>
                </div>
              </div>

              <div className="col-lg-8 col-12 mt-lg-0 mt-3 p-1 g-0">
                <div className="row gx-2">
                  {game.bookmakers[0].markets[0].outcomes.length === 3
                    ? game.bookmakers[0].markets[0].outcomes.map((outcome) => (
                        <div className="bets col-lg-4 col-4" key={outcome.name}>
                          <div
                            onClick={() =>
                              onSelectBet(
                                game.sport_key,
                                outcome.name,
                                outcome.price,
                                game.bookmakers[0].markets[0].key,
                                game.home_team,
                                game.away_team,
                                game.sport_title,
                                game.id,
                                game.commence_time
                              )
                            }
                            className={`${
                              isBetSelected(
                                game.id,
                                game.bookmakers[0].markets[0].key,
                                outcome.name,
                                outcome.price,
                                game.sport_key,
                                game.home_team,
                                game.away_team,
                                game.sport_title,
                                game.commence_time
                              )
                                ? "selected"
                                : "bg odds"
                            } cursor rounded ps-lg-4 ps-2 pb-1 pt-3`}
                          >
                            <p className="team-name">{outcome.name}</p>
                            <p className="text-info pt-1 font-monospace">
                              {outcome.price}
                            </p>
                          </div>
                        </div>
                      ))
                    : game.bookmakers[0].markets[0].outcomes.map((outcome) => (
                        <div className="bets col-6" key={outcome.name}>
                          <div
                            onClick={() =>
                              onSelectBet(
                                game.sport_key,
                                outcome.name,
                                outcome.price,
                                game.bookmakers[0].markets[0].key,
                                game.home_team,
                                game.away_team,
                                game.sport_title,
                                game.id,
                                game.commence_time
                              )
                            }
                            className={`${
                              isBetSelected(
                                game.id,
                                game.bookmakers[0].markets[0].key,
                                outcome.name,
                                outcome.price,
                                game.sport_key,
                                game.home_team,
                                game.away_team,
                                game.sport_title,
                                game.commence_time
                              )
                                ? "selected"
                                : "bg odds"
                            } cursor rounded ps-lg-4 ps-2 pb-1 pt-3`}
                          >
                            <p className="team-name">{outcome.name}</p>
                            <p className="text-info font-monospace">
                              {outcome.price}
                            </p>
                          </div>
                        </div>
                      ))}
                </div>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default DefaultBet;
