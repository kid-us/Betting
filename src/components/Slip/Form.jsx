import React from "react";
import { useForm } from "react-hook-form";

const Form = ({ bets }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      betAmount: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const totalOdd = bets.reduce((accumulator, bet) => accumulator * bet.odd, 1);
  const totalPayout = parseFloat(totalOdd * watch("betAmount")).toFixed(2);

  return (
    <>
      <div
        className="form-container fw-semibold pt-3 px-3 border-top border-danger pt-4 bg2"
        style={{ lineHeight: "10px" }}
      >
        <div className="row">
          <div className="col-8 text-secondary small text-uppercase">
            <p>Total Odds </p>
          </div>
          <div className="col-4">
            <p className="text-warning fs-6 font-monospace">
              {bets.length > 0 ? totalOdd.toFixed(2) : "0.00"}
            </p>
          </div>

          <div className="col-8 text-secondary small text-uppercase">
            <p>Est. Payout </p>
          </div>
          <div className="col-4">
            <p className="text-warning fs-6 font-monospace">{totalPayout}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-3">
          {bets.length > 0 ? (
            <>
              <input
                type="number"
                placeholder="Bet Amount"
                min={5}
                className={`form-control fs-6 fw-semibold text-center font-monospace ${
                  errors.betAmount && "border border-danger border-3"
                }`}
                {...register("betAmount", {
                  required: true,
                  minLength: 0,
                })}
              />
              <button className="btn btn-warning bet-btn w-100 p-1 fw-semibold mt-3">
                Place Bet
              </button>
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
                Place Bet
              </p>
            </>
          )}
        </form>
      </div>
    </>
  );
};

export default Form;
