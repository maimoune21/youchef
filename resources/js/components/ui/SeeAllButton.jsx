import React from "react";
import styled from "styled-components";

const SeeAllButton = () => {
    return (
        <StyledWrapper>
            <button className='cursor-pointer flexy! rounded-lg text-sm'>
                See All
                <div className="arrow-wrapper">
                    <div className="arrow" />
                </div>
            </button>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    button {
        --primary-color: var(--wave-1);
        --secondary-color: #fff;
        --hover-color: var(--bg-10);
        --arrow-width: 10px;
        --arrow-stroke: 2px;
        box-sizing: border-box;
        border: 0;
        color: var(--secondary-color);
        padding: 0.3rem 1rem;
        background: var(--primary-color);
        display: flex;
        transition: 0.2s background;
        align-items: center;
        gap: 0.6em;
        font-weight: bold;
    }

    button .arrow-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    button .arrow {
        margin-top: 1px;
        width: var(--arrow-width);
        height: var(--arrow-stroke);
        position: relative;
        transition: 0.2s;
    }

    button .arrow::before {
        content: "";
        box-sizing: border-box;
        position: absolute;
        border: solid var(--secondary-color);
        border-width: 0 var(--arrow-stroke) var(--arrow-stroke) 0;
        display: inline-block;
        top: -3px;
        right: 3px;
        transition: 0.2s;
        padding: 3px;
        transform: rotate(-45deg);
    }

    button:hover {
        background-color: var(--hover-color);
    }

    button:hover .arrow {
        background: var(--secondary-color);
    }

    button:hover .arrow:before {
        right: 0;
    }
`;

export default SeeAllButton;
