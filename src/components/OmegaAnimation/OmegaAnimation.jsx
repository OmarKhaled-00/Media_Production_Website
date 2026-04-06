import styled from "styled-components";

const Omega = () => {
  return (
    <StyledWrapper>
      <div className="loader-wrapper h-30 min-h-[20vh] text-[2.5rem] max-md:h-10 max-xl:text-[2.2rem] max-md:text-[2rem]">
        <span className="loader-letter">O</span>
        <span className="loader-letter">M</span>
        <span className="loader-letter">E</span>
        <span className="loader-letter">G</span>
        <span className="loader-letter">A</span>
        <div className="loader" />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .loader-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: "Poppins", sans-serif;
    font-weight: 700;
    letter-spacing: 0.15em;
    user-select: none;
    color: #ffffff;

    scale: 1.8;
  }

  .loader {
    position: absolute;
    inset: 0;
    z-index: 1;

    mask: repeating-linear-gradient(
      90deg,
      transparent 0,
      transparent 6px,
      black 7px,
      black 8px
    );
  }

  .loader::after {
    content: "";
    position: absolute;
    inset: 0;

    background-image:
      radial-gradient(circle, #51c3c5 0%, transparent 45%),
      radial-gradient(circle, #ffffff 0%, transparent 50%);
    mask: radial-gradient(circle, transparent 0%, transparent 15%, black 30%);

    animation:
      transform-animation 2s infinite alternate,
      opacity-animation 4s infinite;
    animation-timing-function: cubic-bezier(0.6, 0.8, 0.5, 1);
  }

  @keyframes transform-animation {
    0% {
      transform: translateX(-55%);
    }
    100% {
      transform: translateX(55%);
    }
  }

  @keyframes opacity-animation {
    0%,
    100% {
      opacity: 0;
    }
    15% {
      opacity: 1;
    }
    65% {
      opacity: 0;
    }
  }

  .loader-letter {
    display: inline-block;
    opacity: 0;
    animation: loader-letter-anim 4s infinite linear;
    z-index: 2;
  }

  .loader-letter:nth-child(n) {
    animation-delay: calc(var(--i) * 0.12s);
  }

  /* Only 5 letters now */
  .loader-letter:nth-child(1) {
    --i: 1;
  }
  .loader-letter:nth-child(2) {
    --i: 2;
  }
  .loader-letter:nth-child(3) {
    --i: 3;
  }
  .loader-letter:nth-child(4) {
    --i: 4;
  }
  .loader-letter:nth-child(5) {
    --i: 5;
  }

  @keyframes loader-letter-anim {
    0% {
      opacity: 0;
    }
    5% {
      opacity: 1;
      color: #51c3c5;
      text-shadow: 0 0 10px #51c3c5;
      transform: scale(1.15) translateY(-3px);
    }
    20% {
      opacity: 0.3;
      color: #ffffff;
    }
    100% {
      opacity: 0;
    }
  }
`;

export default Omega;
