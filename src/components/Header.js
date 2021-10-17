import React, {useContext} from 'react';
import { GoVerified } from "react-icons/go";
import { BsThreeDots } from "react-icons/bs";
import { FaCircle } from "react-icons/fa";
import { GlobalContext } from '../context/GlobalContext';
import { HoverCard } from './HoverCard';
import "./Header.css";

export const Header = ({handleMouseOver, handleMouseLeave, isHovering, isHeaderHovering}) => {
    const {name, handle, isVerified, tweets} = useContext(GlobalContext);

    const shortDate = tweets[0].date.split(/,| /).slice(3, 5).join(" ");

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
                <div className="card__header-text card__header-date">{shortDate}</div>
            </div>
            <div><BsThreeDots className="card__header-options"/></div>
        </div>
    )
}
