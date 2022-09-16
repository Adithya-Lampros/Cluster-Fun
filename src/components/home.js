import React from "react";
import "./home.css";
import { ImArrowDown } from "react-icons/im";
import HomeAnimation from "./homeanimation";

const home = () => {
  return (
    <div className="home">
      <div className="outerbg">
        <div className="animation-styles">
          <div>
            <HomeAnimation />
          </div>
        </div>
        <div className="steps-outer">
          <div className="steps-header">NFT Collections</div>
          <div className="steps">Connect</div>
          <ImArrowDown />
          <div className="steps">Fill Form</div>
          <ImArrowDown />
          <div className="steps">Provide Information</div>
          <ImArrowDown />
          <div className="steps">NFT</div>
        </div>
      </div>
    </div>
  );
};

export default home;
