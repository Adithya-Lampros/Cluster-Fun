import React from "react";
import "./home.css";
import { ImArrowDown } from "react-icons/im";
import HomeAnimation from "./homeanimation";
import { Intercom, Window, Launcher } from '@relaycc/receiver';

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
          <div>
          <Launcher wallet={"0x8A35405F2c68d45fe9201a1832279260236DE421"} />
      <Intercom>
        <Window />
      </Intercom>
          </div>
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
