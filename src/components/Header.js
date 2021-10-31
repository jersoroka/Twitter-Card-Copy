import React, {useContext, useEffect, useRef, useState} from 'react';
import { GoVerified } from "react-icons/go";
import { BsThreeDots } from "react-icons/bs";
import { FaCircle } from "react-icons/fa";
import { GlobalContext } from '../context/GlobalContext';
import { HoverCard } from './HoverCard';
import { OptionsMenu } from './menus/OptionsMenu';
import "./Header.css";

export const Header = ({handleMouseOver, handleMouseLeave, isHovering, isHeaderHovering}) => {
    const {name, handle, isVerified, tweets, setIsOptionsMenuOpen} = useContext(GlobalContext);
    const [isDateHovering, setIsDateHovering] = useState(false);

    const shortDate = tweets[0].date.split(/,| /).slice(3, 5).join(" ");

    const handleDateMouseOver = (className) => {
        const div = document.getElementsByClassName(className)[0];

        var timeout = setTimeout(() => {
            setIsDateHovering(true);
        }, 500);

        div.onmouseleave = () => {
            clearTimeout(timeout);
        }
    };

    const handleDateMouseLeave = (className) => {
        const div = document.getElementsByClassName(className)[0];

        var timeout = setTimeout(() => {
            setIsDateHovering(false);
        }, 500);

        div.onmouseover = () => {
            clearTimeout(timeout);
        }
    };

    return (
        <div className="card__header">
            <div className="card__header-info">
                <div className="card__header-identity" tag="card__hover"
                    onMouseOver={handleMouseOver}
                    onMouseLeave={handleMouseLeave}>
                    <div className="card__header-name">{name}</div>
                    {isVerified && <GoVerified className="card__header-verified"/>}
                    <div className="card__header-text">{handle}</div>
                </div>
                {isHovering && isHeaderHovering && <HoverCard handleMouseLeave={handleMouseLeave} position="hoverCard__top"/>}
                <FaCircle className="card__header-text card__header-circle"/>
                <div className="card__header-text card__header-date"
                    onMouseOver={(e) => handleDateMouseOver(e.target.className)}
                    onMouseLeave={(e) => handleDateMouseLeave(e.target.className)}>{shortDate}
                    {isDateHovering && <div className="app__small-text-hover-card">{tweets[0].date}</div>}
                </div>
            </div>
            <div><BsThreeDots className="card__header-options" onClick={() => setIsOptionsMenuOpen(true)}/></div>   
        </div>
    )
}
