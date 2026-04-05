import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const VideographyCards = ({ icon, title }) => {
  return (
    <StyledWrapper>
      <div className="outer">
        <div className="dot" />
        <div className="card">
          <div className="ray" />
          <div className="text-xl">
            <FontAwesomeIcon icon={icon} />
          </div>
          <div className="text">{title}</div>
          <div className="line topl" />
          <div className="line leftl" />
          <div className="line bottoml" />
          <div className="line rightl" />
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .outer {
    width: 300px;
    height: 250px;
    border-radius: 10px;
    padding: 1px;
    background: radial-gradient(circle 230px at 0% 0%, #06b6d4, #000000);
    position: relative;
  }

  .dot {
    width: 5px;
    aspect-ratio: 1;
    position: absolute;
    background-color: white;
    box-shadow:
      0 0 10px #06b6d4,
      0 0 20px #06b6d4;
    border-radius: 100px;
    z-index: 2;
    right: 10%;
    top: 10%;
    animation: moveDot 6s linear infinite;
  }

  @keyframes moveDot {
    0%,
    100% {
      top: 10%;
      right: 10%;
    }
    25% {
      top: 10%;
      right: calc(100% - 35px);
    }
    50% {
      top: calc(100% - 30px);
      right: calc(100% - 35px);
    }
    75% {
      top: calc(100% - 30px);
      right: 10%;
    }
  }

  .card {
    z-index: 1;
    width: 100%;
    height: 100%;
    border-radius: 9px;
    border: solid 1px #06b6d4;
    background: radial-gradient(circle 280px at 0% 0%, #111, #000);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    flex-direction: column;
    gap: 1rem;
    color: #fff;
  }

  .ray {
    width: 220px;
    height: 45px;
    border-radius: 100px;
    position: absolute;
    background-color: #06b6d4;
    opacity: 0.3;
    box-shadow: 0 0 50px #06b6d4;
    filter: blur(12px);
    transform-origin: 10%;
    top: 0%;
    left: 0;
    transform: rotate(40deg);
  }

  .card .text {
    font-weight: bolder;
    font-size: 1.5rem;
    background: linear-gradient(45deg, #06b6d4, #ffffff, #06b6d4);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }

  .line {
    width: 100%;
    height: 1px;
    position: absolute;
    background-color: #111;
  }

  .topl {
    top: 10%;
    background: linear-gradient(90deg, #06b6d4 30%, #000 70%);
  }

  .bottoml {
    bottom: 10%;
    background: linear-gradient(90deg, #000 30%, #06b6d4 70%);
  }

  .leftl {
    left: 10%;
    width: 1px;
    height: 100%;
    background: linear-gradient(180deg, #06b6d4 30%, #000 70%);
  }

  .rightl {
    right: 10%;
    width: 1px;
    height: 100%;
    background: linear-gradient(180deg, #000 30%, #06b6d4 70%);
  }
`;

export default VideographyCards;
