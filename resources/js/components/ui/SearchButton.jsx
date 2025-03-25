import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";

const SearchBar = ({ CustumClass }) => {
    const inputRef = useRef(null);
    const wrapperRef = useRef(null);
    const [isExpanded, setIsExpanded] = useState(false);

    const handleContainerClick = () => {
        if (!isExpanded) {
            setIsExpanded(true);
            inputRef.current.focus();
        }
    };

    const handleIconClick = (e) => {
        e.stopPropagation();
        if (isExpanded) {
            setIsExpanded(false);
        } else {
            setIsExpanded(true);
            inputRef.current.focus();
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                wrapperRef.current &&
                !wrapperRef.current.contains(event.target)
            ) {
                setIsExpanded(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <StyledWrapper
            onClick={handleContainerClick}
            ref={wrapperRef}
            className={isExpanded ? "expanded" : ""}
        >
            <input
                type="text"
                name="text"
                className={`input ${CustumClass}`}
                required
                placeholder="Type to search..."
                ref={inputRef}
            />
            <div className="icon" onClick={handleIconClick}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ionicon"
                    viewBox="0 0 512 512"
                >
                    <title>Search</title>
                    <path
                        d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
                        fill="none"
                        stroke="currentColor"
                        strokeMiterlimit={10}
                        strokeWidth={32}
                    />
                    <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeMiterlimit={10}
                        strokeWidth={32}
                        d="M338.29 338.29L448 448"
                    />
                </svg>
            </div>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    position: relative;
    --size-button: 40px;
    color: white;
    display: flex;
    justify-content: flex-end;

    .input {
        padding-right: var(--size-button);
        height: var(--size-button);
        font-size: 15px;
        border: none;
        color: #fff;
        outline: none;
        width: var(--size-button);
        transition: all ease 0.3s;
        background-color: var(--bg-10);
        border-radius: 50px;
        cursor: pointer;
    }

    &.expanded .input {
        padding-left: 15px;
        width: 100%;
        cursor: text;
    }

    &.expanded .icon {
        pointer-events: all;
        cursor: pointer;
        right: 0;
        left: auto;
    }

    .icon {
        position: absolute;
        width: var(--size-button);
        height: var(--size-button);
        top: 0;
        right: 0;
        padding: 8px;
        pointer-events: none;
    }

    .icon svg {
        width: 100%;
        height: 100%;
    }
`;

export default SearchBar;
