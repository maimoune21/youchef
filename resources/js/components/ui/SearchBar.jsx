import { XCancelIcon } from "@/../../public/icons/Icons";
import React, { useRef, useEffect } from "react";
import styled from "styled-components";

const SearchBar = ({ CustumClass, isExpanded, setIsExpanded, setSearchedInput, handleKeyDown }) => {
    const inputRef = useRef(null);
    const GrowRef = useRef(null);
    const toggleExpand = (e) => {
        e.stopPropagation();
        setIsExpanded((prev) => !prev);
        if (!isExpanded) inputRef.current.focus();
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (GrowRef.current && !GrowRef.current.contains(e.target)) {
                setIsExpanded(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <StyleInputGrow ref={GrowRef} className={`${isExpanded ? "expanded w-full" : ""}`}>
            <input
                type="text"
                className={`input green-bg-selection ${CustumClass}`}
                placeholder="Type to search..."
                ref={inputRef}
                onClick={(e) => e.stopPropagation()}
                onChange={e=>setSearchedInput(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <div className="icon left-0" onClick={toggleExpand}>
                <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
                    <path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={32} />
                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={32} d="M338.29 338.29L448 448" />
                </svg>
            </div>
            <div className={`icon right-0 ${isExpanded ? "" : "hidden"}`} onClick={toggleExpand}>
                <XCancelIcon />
            </div>
        </StyleInputGrow>
    );
};

const StyleInputGrow = styled.div`
    position: relative;
    --size-button: 45px;
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
        transition: all 0.3s ease;
        background-color: var(--bg-10);
        border-radius: 50px;
        cursor: pointer;
    }

    &.expanded .input {
        padding-left: 2.5rem;
        width: 100%;
        cursor: text;
    }

    .icon {
        position: absolute;
        width: var(--size-button);
        height: var(--size-button);
        top: 0;
        padding: 11px;
        cursor: pointer;
    }

    .icon svg {
        width: 100%;
        height: 100%;
    }
`;

export default SearchBar;