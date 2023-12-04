import React from "react";
import img from "../assets/support.png";
const Support = () => {
  return (
    <>
      <div id="support" className="bg-warning p-2">
        <a href="https://t.me/Maverick45b">
          <img src={img} alt="support" width="30px" />
        </a>
      </div>
    </>
  );
};

export default Support;
