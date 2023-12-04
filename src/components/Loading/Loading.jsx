import React from "react";
import {
  load_ball,
  load_basketball,
  load_die,
  load_mine,
  load_nine,
  load_spades,
} from "../../assets";

import "./loader.css";

const Loading = () => {
  return (
    <div id="preloader">
      <div className="loader1">
        <img className="element element1" src={load_mine} width={"50px"} />
        <img className="element element2" src={load_nine} width={"50px"} />
      </div>

      <div className="loader2">
        <img className="element element1 img2" src={load_ball} width={"50px"} />
        <img
          className="element element2 img5"
          src={load_basketball}
          width={"50px"}
        />
      </div>

      <div className="loader3">
        <img
          className="element element1 img3"
          src={load_spades}
          width={"50px"}
        />
        <img className="element element2 img" src={load_die} width={"50px"} />
      </div>
    </div>
  );
};

export default Loading;
