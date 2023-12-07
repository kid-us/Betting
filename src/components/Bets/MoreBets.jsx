import React from "react";

const MoreBets = ({ bets, addOnOdds, onSelectBet }) => {
  const isBetSelected = (id, key, name, odd) => {
    for (let i = 0; i < bets.length; i++) {
      const f =
        bets[i].id === id &&
        bets[i].key === key &&
        bets[i].name === name &&
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
      timeZone: "UTC",
    };

    return new Intl.DateTimeFormat("en-UK", options).format(
      new Date(commenceTime)
    );
  };

  return (
    <>
      <div className="py-3 px-lg-4 p-0 rounded">
        <p className="text-warning">{addOnOdds.sport_title}</p>
        <p className="text-info">
          {addOnOdds.home_team} &nbsp; &nbsp;
          <span className="text-light">vs</span>
          &nbsp; &nbsp;
          {addOnOdds.away_team}
        </p>

        <hr className="p-0 text-secondary" />
        {/* Both Team Scores */}
        <div className="row justify-content-center py-3 px-lg-4 p-0 rounded mb-4 shadow-lg bg2">
          <p className="">Both Team Scores</p>
          <hr />
          {addOnOdds.btts.outcomes.map((both, index) => (
            <div key={index} className="col-6 bets">
              <div
                onClick={() =>
                  onSelectBet(
                    addOnOdds.id,
                    addOnOdds.btts.key,
                    both.name,
                    both.price,
                    addOnOdds.home_team,
                    addOnOdds.away_team,
                    formatCommenceTime(addOnOdds.commence_time),
                    addOnOdds.sport_title,
                    "Both Team Scores"
                  )
                }
                className={`${
                  isBetSelected(
                    addOnOdds.id,
                    addOnOdds.btts.key,
                    both.name,
                    both.price,
                    addOnOdds.home_team,
                    addOnOdds.away_team,
                    formatCommenceTime(addOnOdds.commence_time),
                    addOnOdds.sport_title,
                    "Both Team Scores"
                  )
                    ? "selected"
                    : "bg odds"
                }  cursor rounded ps-lg-4 ps-2 pb-1 pt-3`}
              >
                <p>{both.name}</p>
                <p className="text-info font-monospace">{both.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/*  Asian Totals  */}
        <div className="row justify-content-center py-4 px-lg-4 p-0 rounded mb-4 shadow-lg bg2">
          <p className="">Asian Totals</p>
          <hr />
          {/* Over */}
          <div className="col-lg-5 col-6 px-lg-0 px-3">
            <p className="text-center">Over</p>
            {addOnOdds.alternate_totals.outcomes.map(
              (total, index) =>
                total.name === "Over" && (
                  <div
                    key={index}
                    onClick={() =>
                      onSelectBet(
                        addOnOdds.id,
                        addOnOdds.alternate_totals.key,
                        total.name,
                        total.price,
                        addOnOdds.home_team,
                        addOnOdds.away_team,
                        formatCommenceTime(addOnOdds.commence_time),
                        addOnOdds.sport_title,
                        total.point
                      )
                    }
                    className={`${
                      isBetSelected(
                        addOnOdds.id,
                        addOnOdds.alternate_totals.key,
                        total.name,
                        total.price,
                        addOnOdds.home_team,
                        addOnOdds.away_team,
                        formatCommenceTime(addOnOdds.commence_time),
                        addOnOdds.sport_title,
                        total.point
                      )
                        ? "selected"
                        : "bg odds"
                    } row cursor justify-content-between bg mb-2 rounded`}
                  >
                    <div className="col-lg-2 col-4 pt-2">
                      {total.name === "Over" && <p>{total.point}</p>}
                    </div>
                    <div className="col-lg-2 col-4 pt-2 text-info">
                      {total.name === "Over" && (
                        <p className="font-monospace">{total.price}</p>
                      )}
                    </div>
                  </div>
                )
            )}
          </div>
          {/* Under */}
          <div className="col-lg-5 col-6 ms-lg-5 px-lg-0 px-3">
            <p className="text-center">Under</p>
            {addOnOdds.alternate_totals.outcomes.map(
              (total, index) =>
                total.name === "Under" && (
                  <div
                    key={index}
                    onClick={() =>
                      onSelectBet(
                        addOnOdds.id,
                        addOnOdds.alternate_totals.key,
                        total.name,
                        total.price,
                        addOnOdds.home_team,
                        addOnOdds.away_team,
                        formatCommenceTime(addOnOdds.commence_time),
                        addOnOdds.sport_title,
                        total.point
                      )
                    }
                    className={`${
                      isBetSelected(
                        addOnOdds.id,
                        addOnOdds.alternate_totals.key,
                        total.name,
                        total.price,
                        addOnOdds.home_team,
                        addOnOdds.away_team,
                        formatCommenceTime(addOnOdds.commence_time),
                        addOnOdds.sport_title,
                        total.point
                      )
                        ? "selected"
                        : "bg odds"
                    } row cursor justify-content-between bg mb-2 rounded`}
                  >
                    <div className="col-lg-2 col-4 pt-2">
                      {total.name === "Under" && <p>{total.point}</p>}
                    </div>
                    <div className="col-lg-2 col-4 pt-2 text-info">
                      {total.name === "Under" && (
                        <p className="font-monospace">{total.price}</p>
                      )}
                    </div>
                  </div>
                )
            )}
          </div>
        </div>

        {/*  Asian Handicap  */}
        <div className="row justify-content-center py-4 px-lg-4 p-0 rounded mb-3 shadow-lg bg2">
          <p className="">Asian Handicap</p>
          <hr />
          {/* Home Team */}
          <div className="col-lg-5 col-6 px-lg-0 px-3">
            <p className="text-center">{addOnOdds.home_team}</p>
            {addOnOdds.alternate_spreads.outcomes.map(
              (spread, index) =>
                spread.name === addOnOdds.home_team && (
                  <div
                    key={index}
                    onClick={() =>
                      onSelectBet(
                        addOnOdds.id,
                        addOnOdds.alternate_spreads.key,
                        spread.name,
                        spread.price,
                        addOnOdds.home_team,
                        addOnOdds.away_team,
                        formatCommenceTime(addOnOdds.commence_time),
                        addOnOdds.sport_title,
                        spread.point
                      )
                    }
                    className={`${
                      isBetSelected(
                        addOnOdds.id,
                        addOnOdds.alternate_spreads.key,
                        spread.name,
                        spread.price,
                        addOnOdds.home_team,
                        addOnOdds.away_team,
                        formatCommenceTime(addOnOdds.commence_time),
                        addOnOdds.sport_title,
                        spread.point
                      )
                        ? "selected"
                        : "bg odds"
                    } row cursor justify-content-between bg mb-2 rounded`}
                  >
                    <div className="col-lg-2 col-4 pt-2">
                      {spread.name === addOnOdds.home_team && (
                        <p>{spread.point}</p>
                      )}
                    </div>
                    <div className="col-lg-2 col-4 pt-2 text-info">
                      {spread.name === addOnOdds.home_team && (
                        <p className="font-monospace">{spread.price}</p>
                      )}
                    </div>
                  </div>
                )
            )}
          </div>
          {/* Away Team */}
          <div className="col-lg-5 col-6 px-lg-0 px-3 ms-lg-5">
            <p className="text-center">{addOnOdds.away_team}</p>
            {addOnOdds.alternate_spreads.outcomes.map(
              (spread, index) =>
                spread.name === addOnOdds.away_team && (
                  <div
                    key={index}
                    onClick={() =>
                      onSelectBet(
                        addOnOdds.id,
                        addOnOdds.alternate_spreads.key,
                        spread.name,
                        spread.price,
                        addOnOdds.home_team,
                        addOnOdds.away_team,
                        formatCommenceTime(addOnOdds.commence_time),
                        addOnOdds.sport_title,
                        spread.point
                      )
                    }
                    className={`${
                      isBetSelected(
                        addOnOdds.id,
                        addOnOdds.alternate_spreads.key,
                        spread.name,
                        spread.price,
                        addOnOdds.home_team,
                        addOnOdds.away_team,
                        formatCommenceTime(addOnOdds.commence_time),
                        addOnOdds.sport_title,
                        spread.point
                      )
                        ? "selected"
                        : "bg odds"
                    } row cursor justify-content-between bg mb-2 rounded`}
                  >
                    <div className="col-lg-2 col-4 pt-2">
                      {spread.name === addOnOdds.away_team && (
                        <p>{spread.point}</p>
                      )}
                    </div>
                    <div className="col-lg-2 col-4 pt-2 text-info">
                      {spread.name === addOnOdds.away_team && (
                        <p className="font-monospace">{spread.price}</p>
                      )}
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MoreBets;
