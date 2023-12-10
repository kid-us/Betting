import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

const Loading = ({ width }) => {
  return (
    <>
      {/* Large Device */}
      <div className="d-none d-md-block">
        <div
          className="rounded"
          style={{
            position: "fixed",
            height: "100vh",
            width: width,
            backgroundColor: "#252525",
            zIndex: "9999",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Player
            autoplay={true}
            loop={true}
            controls={false}
            src="https://lottie.host/c7bbeb12-b6fe-456a-9922-eea74f7f9347/2aVcd9g69V.json"
            style={{
              height: "700px",
              width: "400px",
            }}
          ></Player>
        </div>
      </div>
      {/* Small Device */}
      <div className="d-block d-md-none">
        <div
          className="rounded"
          style={{
            position: "fixed",
            height: "85.5vh",
            bottom: "5px",
            left: "4px",
            right: "40px",
            width: "98%",
            backgroundColor: "#252525",
            zIndex: "9999",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Player
            autoplay={true}
            loop={true}
            controls={false}
            src="https://lottie.host/c7bbeb12-b6fe-456a-9922-eea74f7f9347/2aVcd9g69V.json"
            style={{
              height: "700px",
              width: "400px",
            }}
          ></Player>
        </div>
      </div>
    </>
  );
};
export default Loading;
