import { useState } from "react";
import { trainCardsData } from "../../data/trainCards_data/trainCards_data";
import styled from "styled-components";

const TrainBranding = () => {
  const [paused, setPaused] = useState(false);

  return (
    <StyledWrapper>
      <div className="marquee">
        <div
          className={`marquee__inner ${paused ? "paused" : ""}`}
          onClick={() => setPaused(!paused)}
        >
          {/* First copy */}
          <div className="marquee__group">
            {trainCardsData.map((card) => (
              <img
                key={`1-${card.id}`}
                src={card.img_path}
                alt={`brand ${card.id}`}
              />
            ))}
          </div>

          {/* Second copy */}
          <div className="marquee__group">
            {trainCardsData.map((card) => (
              <img
                key={`2-${card.id}`}
                src={card.img_path}
                alt={`brand ${card.id}`}
              />
            ))}
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .marquee {
    overflow: hidden;
    width: 100%;
    padding: 1rem 0;

    -webkit-mask-image: linear-gradient(
      to right,
      transparent 0%,
      black 10%,
      black 90%,
      transparent 100%
    );
    mask-image: linear-gradient(
      to right,
      transparent 0%,
      black 10%,
      black 90%,
      transparent 100%
    );
  }

  .marquee__inner {
    display: flex;
    width: max-content;
    animation: marquee 15s linear infinite;
    cursor: pointer;
  }

  /* 👇 pause on click */
  .marquee__inner.paused {
    animation-play-state: paused;
  }

  .marquee__group {
    display: flex;
  }

  .marquee__group img {
    margin: 0 1rem;
    border-radius: 8px;
    object-fit: cover;
    min-width: 200px;
    flex-shrink: 0;
    max-width: 280px;
    max-height: 128px;
  }

  @keyframes marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  /* ❌ شيل hover */
  /* .marquee__inner:hover {
    animation-play-state: paused;
  } */
`;

export default TrainBranding;
