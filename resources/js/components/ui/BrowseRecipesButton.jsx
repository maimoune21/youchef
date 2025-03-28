import React from "react";
import styled from "styled-components";

const BrowseRecipesButton = ({label}) => {
  return (
    <StyledWrapper>
      <button className="cta">
        <span>{label}</span>
        <svg width="15px" height="10px" viewBox="0 0 13 10">
          <path d="M1,5 L11,5" />
          <polyline points="8 1 12 5 8 9" />
        </svg>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .cta {
    position: relative;
    padding: 12px 18px;
    transition: all 0.2s ease;
    border: none;
    background: none;
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  .cta:before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(0%, -50%);
    display: block;
    border-radius: 50px;
    background: var(--bg-10);
    width: 45px;
    height: 45px;
    transition: all 0.3s ease;
  }

  .cta span {
    position: relative;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0.05em;
    transition: 400ms;
    color: black;
  }

  .cta svg {
    position: relative;
    top: 0;
    margin-left: 10px;
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke: black;
    stroke-width: 2;
    transform: translateX(-5px);
    transition: all 0.3s ease;
  }

  .cta:hover span {
    color: white;
  }

  .cta:hover svg {
    stroke: white;
  }

  .cta:hover:before {
    width: 100%;
    background: var(--bg-10);
  }

  .cta:hover svg {
    transform: translateX(0);
  }

  .cta:active {
    transform: scale(0.95);
  }
`;

export default BrowseRecipesButton;
