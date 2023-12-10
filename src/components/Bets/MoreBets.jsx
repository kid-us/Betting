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
    };

    return new Intl.DateTimeFormat("en-UK", options).format(
      new Date(commenceTime)
    );
  };

  return (
    <div className="py-3 px-lg-4 p-0 rounded">
      {/* Head to Head */}
      {addOnOdds.h2h && addOnOdds.h2h.bookmakers.length > 0 && (
        <>
          <p className="text-warning">{addOnOdds.h2h.sport_title}</p>
          <p className="text-info">
            {addOnOdds.h2h.home_team} &nbsp; &nbsp;
            <span className="text-light">vs</span>
            &nbsp; &nbsp;
            {addOnOdds.h2h.away_team}
          </p>

          <hr className="p-0 text-secondary" />
          <div className="row justify-content-center py-3 px-lg-4 p-0 rounded mb-4 shadow-lg bg2">
            <p className="">Head to Head 1x2</p>
            <hr />
            {addOnOdds.h2h.bookmakers[0].markets[0].outcomes.map((h2h) => (
              <div key={h2h.price} className="col-4 bets">
                <div
                  onClick={() =>
                    onSelectBet(
                      addOnOdds.h2h.id,
                      "h2h",
                      h2h.name,
                      h2h.price,
                      addOnOdds.h2h.home_team,
                      addOnOdds.h2h.away_team,
                      formatCommenceTime(addOnOdds.h2h.commence_time),
                      addOnOdds.h2h.sport_title,
                      "Head to Head"
                    )
                  }
                  className={`${
                    isBetSelected(
                      addOnOdds.h2h.id,
                      "h2h",
                      h2h.name,
                      h2h.price,
                      addOnOdds.h2h.home_team,
                      addOnOdds.h2h.away_team,
                      formatCommenceTime(addOnOdds.h2h.commence_time),
                      addOnOdds.h2h.sport_title,
                      "Head to Head"
                    )
                      ? "selected"
                      : "bg odds"
                  }  cursor rounded ps-lg-4 ps-2 pb-1 pt-3`}
                >
                  <p>{h2h.name}</p>
                  <p className="text-info font-monospace">{h2h.price}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
      {/* Both Team Scores */}
      {addOnOdds.btts && addOnOdds.btts.bookmakers.length > 0 && (
        <>
          <hr className="p-0 text-secondary" />
          <div className="row justify-content-center py-3 px-lg-4 p-0 rounded mb-4 shadow-lg bg2">
            <p className="">Both Team Scores</p>
            <hr />
            {addOnOdds.btts.bookmakers[0].markets[0].outcomes.map((both) => (
              <div key={both.name} className="col-6 bets">
                <div
                  onClick={() =>
                    onSelectBet(
                      addOnOdds.btts.id,
                      addOnOdds.btts.bookmakers[0].markets[0].key,
                      both.name,
                      both.price,
                      addOnOdds.btts.home_team,
                      addOnOdds.btts.away_team,
                      formatCommenceTime(addOnOdds.btts.commence_time),
                      addOnOdds.btts.sport_title,
                      "Both Team Scores"
                    )
                  }
                  className={`${
                    isBetSelected(
                      addOnOdds.btts.id,
                      addOnOdds.btts.bookmakers[0].markets[0].key,
                      both.name,
                      both.price,
                      addOnOdds.btts.home_team,
                      addOnOdds.btts.away_team,
                      formatCommenceTime(addOnOdds.btts.commence_time),
                      addOnOdds.btts.sport_title,
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
        </>
      )}
      {/* Draw No Bet */}
      {addOnOdds.draw && addOnOdds.draw.bookmakers.length > 0 && (
        <>
          <div className="row justify-content-center py-3 px-lg-4 p-0 rounded mb-4 shadow-lg bg2">
            <p className="">Draw no Bet</p>
            <hr />
            {addOnOdds.draw.bookmakers[0].markets[0].outcomes.map((draw) => (
              <div key={`draw-no-bet${draw.name}`} className="col-6 bets">
                <div
                  onClick={() =>
                    onSelectBet(
                      addOnOdds.draw.id,
                      addOnOdds.draw.bookmakers[0].markets[0].key,
                      draw.name,
                      draw.price,
                      addOnOdds.draw.home_team,
                      addOnOdds.draw.away_team,
                      formatCommenceTime(addOnOdds.draw.commence_time),
                      addOnOdds.draw.sport_title,
                      "Draw no Bet"
                    )
                  }
                  className={`${
                    isBetSelected(
                      addOnOdds.draw.id,
                      addOnOdds.draw.bookmakers[0].markets[0].key,
                      draw.name,
                      draw.price,
                      addOnOdds.draw.home_team,
                      addOnOdds.draw.away_team,
                      formatCommenceTime(addOnOdds.draw.commence_time),
                      addOnOdds.draw.sport_title,
                      "Draw no Bet"
                    )
                      ? "selected"
                      : "bg odds"
                  }  cursor rounded ps-lg-4 ps-2 pb-1 pt-3`}
                >
                  <p>{draw.name}</p>
                  <p className="text-info font-monospace">{draw.price}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
      {/* Double Chance */}
      {addOnOdds.double && addOnOdds.double.bookmakers.length > 0 && (
        <>
          <div className="row justify-content-center py-3 px-lg-4 p-0 rounded mb-4 shadow-lg bg2">
            <p className="">Double Chance</p>
            <hr />
            {addOnOdds.double.bookmakers[0].markets[0].outcomes.map(
              (double) => (
                <div key={double.name} className="col-4 bets">
                  <div
                    onClick={() =>
                      onSelectBet(
                        addOnOdds.double.id,
                        addOnOdds.double.bookmakers[0].markets[0].key,
                        double.name,
                        double.price,
                        addOnOdds.double.home_team,
                        addOnOdds.double.away_team,
                        formatCommenceTime(addOnOdds.double.commence_time),
                        addOnOdds.double.sport_title,
                        "Double Chance"
                      )
                    }
                    className={`${
                      isBetSelected(
                        addOnOdds.double.id,
                        addOnOdds.double.bookmakers[0].markets[0].key,
                        double.name,
                        double.price,
                        addOnOdds.double.home_team,
                        addOnOdds.double.away_team,
                        formatCommenceTime(addOnOdds.double.commence_time),
                        addOnOdds.double.sport_title,
                        "Double Chance"
                      )
                        ? "selected"
                        : "bg odds"
                    }  cursor rounded ps-lg-4 ps-2 pb-1 pt-3`}
                  >
                    <p>{double.name}</p>
                    <p className="text-info font-monospace">{double.price}</p>
                  </div>
                </div>
              )
            )}
          </div>
        </>
      )}
      {/* First half */}
      {addOnOdds.first_half && addOnOdds.first_half.bookmakers.length > 0 && (
        <>
          <div className="row justify-content-center py-3 px-lg-4 p-0 rounded mb-4 shadow-lg bg2">
            <p className="">First Half</p>
            <hr />
            {addOnOdds.first_half.bookmakers[0].markets[0].outcomes.map(
              (first, index) => (
                <div key={index} className="col-4 bets">
                  <div
                    onClick={() =>
                      onSelectBet(
                        addOnOdds.first_half.id,
                        addOnOdds.first_half.bookmakers[0].markets[0].key,
                        first.name,
                        first.price,
                        addOnOdds.first_half.home_team,
                        addOnOdds.first_half.away_team,
                        formatCommenceTime(addOnOdds.first_half.commence_time),
                        addOnOdds.first_half.sport_title,
                        "First Half"
                      )
                    }
                    className={`${
                      isBetSelected(
                        addOnOdds.first_half.id,
                        addOnOdds.first_half.bookmakers[0].markets[0].key,
                        first.name,
                        first.price,
                        addOnOdds.first_half.home_team,
                        addOnOdds.first_half.away_team,
                        formatCommenceTime(addOnOdds.first_half.commence_time),
                        addOnOdds.first_half.sport_title,
                        "First Half"
                      )
                        ? "selected"
                        : "bg odds"
                    }  cursor rounded ps-lg-4 ps-2 pb-1 pt-3`}
                  >
                    <p>{first.name}</p>
                    <p className="text-info font-monospace">{first.price}</p>
                  </div>
                </div>
              )
            )}
          </div>
        </>
      )}
      {/* Second half */}
      {addOnOdds.second_half && addOnOdds.second_half.bookmakers.length > 0 && (
        <>
          <div className="row justify-content-center py-3 px-lg-4 p-0 rounded mb-4 shadow-lg bg2">
            <p className="">Second Half</p>
            <hr />
            {addOnOdds.second_half.bookmakers[0].markets[0].outcomes.map(
              (second, index) => (
                <div key={index} className="col-4 bets">
                  <div
                    onClick={() =>
                      onSelectBet(
                        addOnOdds.second_half.id,
                        addOnOdds.second_half.bookmakers[0].markets[0].key,
                        second.name,
                        second.price,
                        addOnOdds.second_half.home_team,
                        addOnOdds.second_half.away_team,
                        formatCommenceTime(addOnOdds.second_half.commence_time),
                        addOnOdds.second_half.sport_title,
                        "Second Half"
                      )
                    }
                    className={`${
                      isBetSelected(
                        addOnOdds.second_half.id,
                        addOnOdds.second_half.bookmakers[0].markets[0].key,
                        second.name,
                        second.price,
                        addOnOdds.second_half.home_team,
                        addOnOdds.second_half.away_team,
                        formatCommenceTime(addOnOdds.second_half.commence_time),
                        addOnOdds.second_half.sport_title,
                        "Second Half"
                      )
                        ? "selected"
                        : "bg odds"
                    }  cursor rounded ps-lg-4 ps-2 pb-1 pt-3`}
                  >
                    <p>{second.name}</p>
                    <p className="text-info font-monospace">{second.price}</p>
                  </div>
                </div>
              )
            )}
          </div>
        </>
      )}
      {/* Over/Under */}
      {addOnOdds.totals && addOnOdds.totals.bookmakers.length > 0 && (
        <>
          <div className="row justify-content-center py-3 px-lg-4 p-0 rounded mb-4 shadow-lg bg2">
            <p className="">Asian Totals</p>
            {/* Over */}
            <div className="col-lg-6 col-6 px-lg-4 px-3">
              <p className="">Over</p>
              <hr />
              {addOnOdds.totals.bookmakers[0].markets[0].outcomes.map(
                (total, index) =>
                  total.name === "Over" && (
                    <div
                      key={index}
                      onClick={() =>
                        onSelectBet(
                          addOnOdds.totals.id,
                          addOnOdds.totals.bookmakers[0].markets[0].key,
                          total.name,
                          total.price,
                          addOnOdds.totals.home_team,
                          addOnOdds.totals.away_team,
                          formatCommenceTime(addOnOdds.totals.commence_time),
                          addOnOdds.totals.sport_title,
                          total.point
                        )
                      }
                      className={`${
                        isBetSelected(
                          addOnOdds.totals.id,
                          addOnOdds.totals.bookmakers[0].markets[0].key,
                          total.name,
                          total.price,
                          addOnOdds.totals.home_team,
                          addOnOdds.totals.away_team,
                          formatCommenceTime(addOnOdds.totals.commence_time),
                          addOnOdds.totals.sport_title,
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
            <div className="col-lg-6 col-6 px-lg-4 px-3">
              <p className="">Under</p>
              <hr />
              {addOnOdds.totals.bookmakers[0].markets[0].outcomes.map(
                (total, index) =>
                  total.name === "Under" && (
                    <div
                      key={index}
                      onClick={() =>
                        onSelectBet(
                          addOnOdds.totals.id,
                          addOnOdds.totals.bookmakers[0].markets[0].key,
                          total.name,
                          total.price,
                          addOnOdds.totals.home_team,
                          addOnOdds.totals.away_team,
                          formatCommenceTime(addOnOdds.totals.commence_time),
                          addOnOdds.totals.sport_title,
                          total.point
                        )
                      }
                      className={`${
                        isBetSelected(
                          addOnOdds.totals.id,
                          addOnOdds.totals.bookmakers[0].markets[0].key,
                          total.name,
                          total.price,
                          addOnOdds.totals.home_team,
                          addOnOdds.totals.away_team,
                          formatCommenceTime(addOnOdds.totals.commence_time),
                          addOnOdds.totals.sport_title,
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
        </>
      )}
      {/* Handicups */}
      {addOnOdds.spreads && addOnOdds.spreads.bookmakers.length > 0 && (
        <>
          <div className="row justify-content-center py-3 px-lg-4 p-0 rounded mb-4 shadow-lg bg2">
            <p className="">Asian Totals</p>
            {/* Home */}
            <div className="col-lg-6 col-6 px-lg-4 px-3">
              <p className="">{addOnOdds.spreads.home_team}</p>
              <hr />
              {addOnOdds.spreads.bookmakers[0].markets[0].outcomes.map(
                (spread, index) =>
                  spread.name === addOnOdds.spreads.home_team && (
                    <div
                      key={index}
                      onClick={() =>
                        onSelectBet(
                          addOnOdds.spreads.id,
                          addOnOdds.spreads.bookmakers[0].markets[0].key,
                          spread.name,
                          spread.price,
                          addOnOdds.spreads.home_team,
                          addOnOdds.spreads.away_team,
                          formatCommenceTime(addOnOdds.spreads.commence_time),
                          addOnOdds.spreads.sport_title,
                          spread.point
                        )
                      }
                      className={`${
                        isBetSelected(
                          addOnOdds.spreads.id,
                          addOnOdds.spreads.bookmakers[0].markets[0].key,
                          spread.name,
                          spread.price,
                          addOnOdds.spreads.home_team,
                          addOnOdds.spreads.away_team,
                          formatCommenceTime(addOnOdds.spreads.commence_time),
                          addOnOdds.spreads.sport_title,
                          spread.point
                        )
                          ? "selected"
                          : "bg odds"
                      } row cursor justify-content-between bg mb-2 rounded`}
                    >
                      <div className="col-lg-2 col-4 pt-2">
                        {spread.name === addOnOdds.spreads.home_team && (
                          <p>{spread.point}</p>
                        )}
                      </div>
                      <div className="col-lg-2 col-4 pt-2 text-info">
                        {spread.name === addOnOdds.spreads.home_team && (
                          <p className="font-monospace">{spread.price}</p>
                        )}
                      </div>
                    </div>
                  )
              )}
            </div>
            {/* Away */}
            <div className="col-lg-6 col-6 px-lg-4 px-3">
              <p className="">{addOnOdds.spreads.away_team}</p>
              <hr />
              {addOnOdds.spreads.bookmakers[0].markets[0].outcomes.map(
                (spread, index) =>
                  spread.name === addOnOdds.spreads.away_team && (
                    <div
                      key={index}
                      onClick={() =>
                        onSelectBet(
                          addOnOdds.spreads.id,
                          addOnOdds.spreads.bookmakers[0].markets[0].key,
                          spread.name,
                          spread.price,
                          addOnOdds.spreads.home_team,
                          addOnOdds.spreads.away_team,
                          formatCommenceTime(addOnOdds.spreads.commence_time),
                          addOnOdds.spreads.sport_title,
                          spread.point
                        )
                      }
                      className={`${
                        isBetSelected(
                          addOnOdds.spreads.id,
                          addOnOdds.spreads.bookmakers[0].markets[0].key,
                          spread.name,
                          spread.price,
                          addOnOdds.spreads.home_team,
                          addOnOdds.spreads.away_team,
                          formatCommenceTime(addOnOdds.spreads.commence_time),
                          addOnOdds.spreads.sport_title,
                          spread.point
                        )
                          ? "selected"
                          : "bg odds"
                      } row cursor justify-content-between bg mb-2 rounded`}
                    >
                      <div className="col-lg-2 col-4 pt-2">
                        {spread.name === addOnOdds.spreads.away_team && (
                          <p>{spread.point}</p>
                        )}
                      </div>
                      <div className="col-lg-2 col-4 pt-2 text-info">
                        {spread.name === addOnOdds.spreads.away_team && (
                          <p className="font-monospace">{spread.price}</p>
                        )}
                      </div>
                    </div>
                  )
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MoreBets;
