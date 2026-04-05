import React from "react";
import styled from "styled-components";

const SocialCard = () => {
  const socialItems = [
    {
      name: "Facebook",
      url: "/",
      svgPath:
        "M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z",
    },
    {
      name: "Twitter",
      url: "/",
      svgPath:
        "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z",
    },
    {
      name: "Instagram",
      url: "/",
      svgPath:
        "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z",
    },
    {
      name: "TikTok",
      url: "/",
      svgPath:
        "M448,209.91c-13.45,0-25.83-1.19-37.72-3.43V319.61a128.12,128.12,0,1,1-128-128V323.53A96,96,0,1,0,320,223.39V125.27c26.52,11.74,56.43,18.64,87.94,18.64Z",
    },
    {
      name: "Vimeo",
      url: "/",
      svgPath:
        "M447.2,139.1c-1.1,23.7-17.5,56.1-49,97.2-32.2,42.7-59.5,64-81.8,64-14.4,0-24.9-13.3-31.6-39.9-9.8-37.6-19.6-75.3-29.5-112.9C239.1,43.7,232,30,224.1,30c-4.3,0-10.6,2.5-18.9,7.6-7.6,4.7-12.8,8-15.5,9.9l-22.8,15.2c-3.4,2.3-6.8,5.1-10.3,8.4L112,80.9c-1.2,.7-2.3,1.2-3.5,1.7-1.3,.5-2.6,.9-3.9,1.2-1.3,.2-2.6,.3-3.8,.3-5.5,0-10-2.5-13.3-7.6C75.5,75.9,74,71,74,66.1c0-8.4,9.2-19.6,27.6-33.8C124.6,4.9,143.9,0,162.2,0c21.1,0,37.1,7.9,48.9,23.7,11.5,15.5,21.6,36.2,30.9,61.2,12.3,35.1,21.1,58.2,26.4,69.4,6.2,13.1,13.4,19.7,21.5,19.7,5.3,0,15.5-2.7,30.6-8.1,11.2-4.1,21.6-8.2,31.4-12.2v23.5Z",
    },
    {
      name: "Behance",
      url: "/",
      svgPath:
        "M488,64v384a32,32,0,0,1-32,32H56a32,32,0,0,1-32-32V64A32,32,0,0,1,56,32H456A32,32,0,0,1,488,64ZM128,208H96v96h32V208Zm160,112a56,56,0,1,0-56-56A56,56,0,0,0,288,320Zm112-64h-48v16h48v16h-48v16h48v16h-64V208h64Z",
    },
  ];

  return (
    <StyledWrapper>
      <div className="card">
        <ul>
          {socialItems.map((item, index) => (
            <li key={index} className="iso-pro">
              <span />
              <span />
              <span />
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                <svg className="svg" viewBox="0 0 512 512">
                  <path d={item.svgPath} />
                </svg>
              </a>
              <div className="text">{item.name}</div>
            </li>
          ))}
        </ul>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  /* page bg */
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  .card {
    max-width: fit-content;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    gap: 1rem;
    background: #161616; /* card bg */
    backdrop-filter: blur(15px);
    box-shadow:
      inset 0 0 20px rgba(255, 255, 255, 0.192),
      inset 0 0 5px rgba(255, 255, 255, 0.274),
      0 5px 5px rgba(0, 0, 0, 0.164);
    transition: 0.5s;
  }

  .card:hover {
    background: rgba(81, 195, 197, 0.1);
    animation: ease-out 5s;
  }

  .card ul {
    padding: 1rem;
    display: flex;
    list-style: none;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
    flex-direction: column;
  }

  .card ul li {
    cursor: pointer;
    position: relative;
  }

  .svg {
    transition: all 0.3s;
    padding: 1rem;
    height: 60px;
    width: 60px;
    border-radius: 100%;
    color: #51c3c5; /* accent color */
    fill: currentColor;
    box-shadow:
      inset 0 0 20px rgba(255, 255, 255, 0.3),
      inset 0 0 5px rgba(255, 255, 255, 0.5),
      0 5px 5px rgba(0, 0, 0, 0.164);
  }

  .text {
    opacity: 0;
    border-radius: 5px;
    padding: 5px;
    transition: all 0.3s;
    color: #ffffff;
    background-color: rgba(81, 195, 197, 0.3);
    position: absolute;
    z-index: 9999;
    box-shadow:
      -5px 0 1px rgba(153, 153, 153, 0.2),
      -10px 0 1px rgba(153, 153, 153, 0.2),
      inset 0 0 20px rgba(255, 255, 255, 0.3),
      inset 0 0 5px rgba(255, 255, 255, 0.5),
      0 5px 5px rgba(0, 0, 0, 0.082);
  }

  .iso-pro:hover a > .svg {
    transform: translate(5px, -5px);
    border-radius: 100%;
  }

  .iso-pro:hover .text {
    opacity: 1;
    transform: translate(25px, -2px) skew(-5deg);
  }

  .iso-pro span {
    opacity: 0;
    position: absolute;
    color: #51c3c5;
    border-color: #51c3c5;
    box-shadow:
      inset 0 0 20px rgba(255, 255, 255, 0.3),
      inset 0 0 5px rgba(255, 255, 255, 0.5),
      0 5px 5px rgba(0, 0, 0, 0.164);
    border-radius: 50%;
    transition: all 0.3s;
    height: 60px;
    width: 60px;
  }

  .iso-pro:hover span:nth-child(1) {
    opacity: 0.2;
  }
  .iso-pro:hover span:nth-child(2) {
    opacity: 0.4;
    transform: translate(5px, -5px);
  }
  .iso-pro:hover span:nth-child(3) {
    opacity: 0.6;
    transform: translate(10px, -10px);
  }
`;

export default SocialCard;
