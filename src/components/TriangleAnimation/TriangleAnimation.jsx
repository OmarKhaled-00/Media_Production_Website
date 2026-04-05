import React from "react";
import styled from "styled-components";

const Triangle = () => {
  return (
    <StyledWrapper>
      <div className="pyramid-loader h-75 w-75 max-md:h-40 max-md:w-40">
        <div className="wrapper">
          <span className="side side1 flex items-center justify-center">
            <span className="text-[8px]">Omega </span>
          </span>
          <span className="side side2 flex items-center justify-center">
            <span className="text-[8px]">Omega </span>
          </span>
          <span className="side side3 flex items-center justify-center">
            <span className="text-[8px]">Omega </span>
          </span>
          <span className="side side4 flex items-center justify-center">
            <span className="text-[8px]">Omega </span>
          </span>
          <span className="shadow" />
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .pyramid-loader {
    position: relative;
    transform-style: preserve-3d;
    transform: rotateX(-20deg);
  }

  .wrapper {
    position: relative;
    width: 20%;
    height: 20%;
    transform-style: preserve-3d;
    animation: spin 4s linear infinite;
  }

  @keyframes spin {
    100% {
      transform: rotateY(360deg);
    }
  }

  .side {
    width: 100px;
    height: 100px;
    position: absolute;
    inset: 0;
    margin: auto;
    transform-origin: center top;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    box-shadow: 0 0 20px rgba(81, 195, 197, 0.35);
  }

  /* FRONT */
  .side1 {
    transform: rotateZ(-30deg) rotateY(90deg);
    background: linear-gradient(135deg, #2d2d2d, #51c3c5);
  }

  /* BACK */
  .side2 {
    transform: rotateZ(30deg) rotateY(90deg);
    background: linear-gradient(135deg, #51c3c5, #2d2d2d);
  }

  /* RIGHT */
  .side3 {
    transform: rotateX(30deg);
    background: linear-gradient(135deg, #161616, #51c3c5);
  }

  /* LEFT */
  .side4 {
    transform: rotateX(-30deg);
    background: linear-gradient(135deg, #51c3c5, #161616);
  }

  .shadow {
    width: 100px;
    height: 100px;
    background: #51c3c5;
    position: absolute;
    inset: 0;
    margin: auto;
    transform: rotateX(90deg) translateZ(-45px);
    filter: blur(18px);
    opacity: 0.6;
  }
`;

export default Triangle;
