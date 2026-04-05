import React from "react";
import styled from "styled-components";

function HomeCards({ title, photo, content }) {
  return (
    <StyledWrapper>
      <div className="card-container group h-80 w-80 overflow-hidden before:absolute before:inset-0 before:bg-[linear-gradient(135deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.95)_100%)] before:content-[''] max-md:h-38 max-md:w-38 max-md:justify-around">
        <div className="card">
          <div className="img-content">
            <img
              src={photo}
              alt="image"
              className="absolute h-full w-full object-cover opacity-80"
            />

            <h2 className="absolute top-4 rounded-2xl border-2 border-none bg-black/40 px-6 py-4 text-3xl text-white backdrop-blur-lg group-hover:hidden max-md:px-3 max-md:py-2 max-md:text-lg">
              {title}
            </h2>
          </div>

          <div className="content">
            <p className="text-[32px] max-md:text-[12px]">{title}</p>
            <p className="max-md:text-[8px]">{content}</p>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card-container {
    position: relative;
    border-radius: 16px;
  }

  .card {
    width: 100%;
    height: 100%;
    border-radius: inherit;
    overflow: hidden;
  }

  .card .img-content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(-45deg, #51c3c5 0%, #161616 100%);
    transition:
      scale 0.6s,
      rotate 0.6s,
      filter 1s;
  }

  .card .content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    color: #e8e8e8;
    padding: 20px 24px;
    line-height: 1.5;
    border-radius: 5px;
    opacity: 0;
    pointer-events: none;
    transform: translateY(50px);
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .card:hover .content {
    opacity: 1;
    transform: translateY(0);
  }

  .card:hover .img-content {
    scale: 2.5;
    rotate: 30deg;
    filter: blur(7px);
  }

  .card:hover .img-content svg {
    fill: transparent;
  }
`;

export default HomeCards;
