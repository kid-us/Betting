import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
const Form = ({ bets, balance, clearBets }) => {
  const [betAmount, setBetAmount] = useState(0);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      bet_amount: "",
    },
  });

  const totalOdd = bets.reduce((accumulator, bet) => accumulator * bet.odd, 1);

  const totalPayout = parseFloat(totalOdd * watch("bet_amount")).toFixed(2);
  // Get the input amount
  const handleInputChange = (e) => {
    setBetAmount(Number(e.target.value));
  };

  // Calculate the TotalPAyout
  const handleTotalPayout = () => {
    return (betAmount * totalOdd).toFixed(2);
  };

  const onSubmit = (data) => {
    let potential_payout = Number(totalPayout);
    let bet_amount = Number(data.bet_amount);
    const slip = {
      slips: bets,
      bet_amount,
      potential_payout,
    };

    let authToken = localStorage.getItem("access_token");
    axios
      .post(
        "https://api.maverickhabesha.com/api/v1/betting/create-slip",
        slip,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          setBetAmount(0);
          window.location.reload();
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div
        className="form-container pt-2 fw-semibold px-3 pt-3"
        style={{ lineHeight: "10px" }}
      >
        <div className="row">
          <div className="col-8 text-info small text-uppercase">
            <p>Total Odds </p>
          </div>
          <div className="col-4">
            <p className="text-warning fs-6 font-monospace">
              {bets.length > 0 ? totalOdd.toFixed(2) : "0.00"}
            </p>
          </div>

          <div className="col-8 text-info small text-uppercase">
            <p>Est. Payout </p>
          </div>
          <div className="col-4">
            <p className="text-warning fs-6 font-monospace">
              {handleTotalPayout()}
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          {bets.length > 0 ? (
            <>
              <input
                type="number"
                placeholder="Bet Amount"
                min={5}
                className={`form-control fs-6 fw-semibold text-center font-monospace ${
                  errors.bet_amount && "border border-danger border-3"
                }`}
                {...register("bet_amount", {
                  required: true,
                  minLength: 0,
                })}
                onChange={handleInputChange}
              />

              {Number(betAmount) > balance ? (
                <p className="btn btn-light disabled bet-btn w-100 px-1 py-2 fw-semibold mt-2">
                  Low Balance
                </p>
              ) : (
                <button className="btn btn-warning bet-btn w-100 px-1 py-2 fw-semibold mb-lg-4 mt-1">
                  Place Multiple Bet
                </button>
              )}
            </>
          ) : (
            <>
              <input
                type="number"
                className="form-control text-center"
                placeholder="Bet Amount"
                disabled
              />
              <p className="btn btn-warning w-100 p-1 fw-semibold mt-3 cursor-not-allowed">
                Place Multiple Bet
              </p>
            </>
          )}
        </form>
      </div>
    </>
  );
};

export default Form;
