import React, {useContext, useState} from 'react';
import "./SocialCard.css";
import { GoVerified } from "react-icons/go";
import { BsThreeDots } from "react-icons/bs";
import { FaCircle } from "react-icons/fa";
import displayPicture from '../images/stephen-a-smith-profile.jpg'
import { GlobalContext } from '../context/GlobalContext';
import { HoverCard } from "./HoverCard";
import { Footer } from "./Footer";

export const SocialCard = () => {

    const {name, handle, isVerified, tweets} = useContext(GlobalContext)
    const shortDate = tweets[0].date.split(/,| /).slice(3, 5).join(" ");
    
    const [isHovering, setIsHovering] = useState(false);
    const [isHeaderHovering, setIsHeaderHovering] = useState(false);

    const handleMouseOver =  (element) => {
        const div = document.getElementsByClassName(element)[0];

        var timeout = setTimeout(() => {
            setIsHovering(true);
            if (element === "card__header-identity") {
                setIsHeaderHovering(true);
            }
        }, 500);
        
        div.onmouseleave = () => {
            clearTimeout(timeout);
        }
    }

    const handleMouseLeave = (element) => {
        const hoverCard = document.getElementsByClassName("hoverCard__container")[0];
        const div = document.getElementsByClassName(element)[0];

        var timeout = setTimeout(() => {
            setIsHovering(false);
            setIsHeaderHovering(false);
        }, 500);

        div.onmouseover = () => {
            clearTimeout(timeout);
        };

        if (hoverCard) {
            hoverCard.onmouseover = () => {
                clearTimeout(timeout);
            };
        }
    }
    return (
        <div className="card">
            <img className="card__profile" src={displayPicture} alt="stephen-a-smith-profile-picture"
                onMouseOver={() => handleMouseOver("card__profile")} 
                onMouseLeave={() => handleMouseLeave("card__profile")}/>
            {isHovering && !isHeaderHovering && <HoverCard handleMouseLeave={() => handleMouseLeave("card__profile")} position="hoverCard__profile"/>}
            <div className="card__header">
                <div className="card__header-info">
                    <div className="card__header-identity" tag="card__hover"
                        onMouseOver={() => handleMouseOver("card__header-identity")}
                        onMouseLeave={() => handleMouseLeave("card__header-identity")}>
                        <div className="card__header-name">{name}</div>
                        {isVerified && <GoVerified className="card__header-verified"/>}
                        <div className="card__header-text">{handle}</div>
                    </div>
                    {isHovering && isHeaderHovering && <HoverCard handleMouseLeave={() => handleMouseLeave("card__header-identity")} position="hoverCard__top"/>}
                    <FaCircle className="card__header-text card__header-circle"/>
                    <div className="card__header-text card__header-date">{shortDate}</div>
                </div>
                <div><BsThreeDots className="card__header-options"/></div>
            </div>
            <div className="card__body">{tweets[0].tweet}</div>
            <Footer/>
        </div>
    )
}
