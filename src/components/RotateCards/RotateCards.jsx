import { useState } from "react";
import { rotateCardsData } from "../../data/rotateCards_data/rotateCards_data";
import styled from "styled-components";

const RotateCards = () => {
  const [paused, setPaused] = useState(false);

  return (
    <Wrapper>
      <div
        className={`card-3d ${paused ? "paused" : ""}`}
        onClick={() => setPaused(!paused)}
      >
        {rotateCardsData.map((card) => (
          <div key={card.id} className="h-50 w-[320px] max-md:h-40 max-md:w-70">
            <span className="text-[2.4rem] max-md:text-[1.5rem]">
              {card.id}
            </span>
            <h4 className="text-[1rem] max-md:text-[0.8rem]">{card.title}</h4>
            <p className="text-[0.85rem] max-md:text-[0.65rem]">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  perspective: 1000px;

  .card-3d {
    position: relative;
    width: 500px;
    height: 360px;
    transform-style: preserve-3d;
    animation: spin 18s linear infinite;
    cursor: pointer;
  }

  /* 👇 pause on click */
  .card-3d.paused {
    animation-play-state: paused;
  }

  .card-3d div {
    position: absolute;
    left: 50%;
    top: 50%;
    transform-style: preserve-3d;

    background: #1b1b1b;
    border-radius: 18px;
    padding: 1.6rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.6rem;

    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.45);

    transform-origin: center center;
    backface-visibility: hidden;
  }

  .card-3d span {
    font-weight: 700;
    color: #22d3ee;
    opacity: 0.9;
  }

  .card-3d h4 {
    font-weight: 600;
    color: #ffffff;
  }

  .card-3d p {
    line-height: 1.5;
    color: #cbd5e1;
  }

  /* توزيع الكروت في 3D */
  .card-3d div:nth-child(1) {
    transform: translate(-50%, -50%) rotateY(0deg) translateZ(320px);
  }
  .card-3d div:nth-child(2) {
    transform: translate(-50%, -50%) rotateY(60deg) translateZ(320px);
  }
  .card-3d div:nth-child(3) {
    transform: translate(-50%, -50%) rotateY(120deg) translateZ(320px);
  }
  .card-3d div:nth-child(4) {
    transform: translate(-50%, -50%) rotateY(180deg) translateZ(320px);
  }
  .card-3d div:nth-child(5) {
    transform: translate(-50%, -50%) rotateY(240deg) translateZ(320px);
  }
  .card-3d div:nth-child(6) {
    transform: translate(-50%, -50%) rotateY(300deg) translateZ(320px);
  }

  @keyframes spin {
    from {
      transform: rotateY(0deg);
    }
    to {
      transform: rotateY(360deg);
    }
  }
`;

export default RotateCards;
