import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialMediaCards = ({ name, icon, color }) => {
  // 🎯 Map Tailwind colors → real HEX colors
  const colorMap = {
    "text-blue-700": "#0a66c2", // LinkedIn
    "text-blue-600": "#1877f2", // Facebook
    "text-pink-500": "#e4405f", // Instagram
    "text-yellow-400": "#fffc00", // Snapchat
  };

  const customColor = colorMap[color] || "#ffffff";

  return (
    <StyledWrapper customColor={customColor}>
      <div className="light-button">
        <button className="bt">
          <div className="light-holder">
            <div className="dot" />
            <div className="light" />
          </div>

          <div className="button-holder">
            <FontAwesomeIcon icon={icon} className={color} />
            <p className={color}>{name}</p>
          </div>
        </button>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .light-button button.bt {
    position: relative;
    height: 200px;
    display: flex;
    align-items: flex-end;
    outline: none;
    background: none;
    border: none;
    cursor: pointer;
  }

  /* Button box */
  .light-button button.bt .button-holder {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 200px;
    width: 200px;
    background-color: #0a0a0a;
    border-radius: 5px;
    color: ${({ customColor }) => customColor};
    font-weight: 700;
    transition: 300ms;
    outline: ${({ customColor }) => customColor} 2px solid;
    outline-offset: 2px;
  }

  /* Icon */
  .light-button button.bt .button-holder svg {
    height: 50px;
    fill: ${({ customColor }) => customColor};
    transition: 300ms;
  }

  /* Light container */
  .light-button button.bt .light-holder {
    position: absolute;
    height: 210px;
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  /* Top dot */
  .light-button button.bt .light-holder .dot {
    position: absolute;
    top: 0;
    width: 10px;
    height: 10px;
    background-color: ${({ customColor }) => customColor};
    border-radius: 50%;
    z-index: 2;
  }

  /* 🔥 ALWAYS ON LIGHT */
  .light-button button.bt .light-holder .light {
    position: absolute;
    top: 0;
    width: 200px;
    height: 120px;
    clip-path: polygon(50% 0%, 25% 100%, 75% 100%);
    background: linear-gradient(
      180deg,
      ${({ customColor }) => customColor} 0%,
      rgba(255, 255, 255, 0.4) 60%,
      rgba(255, 255, 255, 0) 100%
    );
    opacity: 0.9;
  }

  /* Optional hover enhancement */
  .light-button button.bt:hover .light-holder .light {
    opacity: 1;
    filter: blur(1px);
  }
`;

export default SocialMediaCards;
