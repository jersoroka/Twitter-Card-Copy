import React, {useContext, useState} from 'react';
import "./SocialCard.css";
import { GoVerified } from "react-icons/go";
import { BsThreeDots } from "react-icons/bs";
import { CgSoftwareUpload } from "react-icons/cg"
import { FaCircle, FaRetweet, FaRegComment, FaRegHeart } from "react-icons/fa";
import displayPicture from '../images/stephen-a-smith-profile.jpg'
import { GlobalContext } from '../context/GlobalContext';
import { HoverCard } from "./HoverCard"

export const SocialCard = () => {

    const {name, handle, isVerified, tweets} = useContext(GlobalContext)
    const shortDate = tweets[0].date.split(/,| /).slice(3, 5).join(" ");
    
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    }

    const handleMouseLeave = (e) => {
        const div = document.getElementsByClassName("card__header-identity")[0];
        var timeout = setTimeout(() => {
            setIsHovering(false);
        }, 500)
        div.onmouseover = () => {
            clearTimeout(timeout);
        }
    }
    return (
        <div className="card">
            <img className="card__profile" src={displayPicture} alt="stephen-a-smith-profile-picture"/>
            <div className="card__header">
                <div className="card__header-info">
                    <div className="card__header-identity" tag="card__hover"
                        onMouseOver={handleMouseOver}
                        onMouseLeave={handleMouseLeave}>
                        <div className="card__header-name">{name}</div>
                        {isVerified && <GoVerified className="card__header-verified"/>}
                        <div className="card__header-text">{handle}</div>
                        {isHovering && <HoverCard name="hover-card"/>}
                    </div>
                    <FaCircle className="card__header-text card__header-circle"/>
                    <div className="card__header-text card__header-date">{shortDate}</div>
                </div>
                <div><BsThreeDots className="card__header-options"/></div>
            </div>
            <div className="card__body">{tweets[0].tweet}</div>
            <div className="card__footer">
                <div className="card__footer-comment">
                    <FaRegComment className="card__footer-icon"/>
                    <div className="card__footer-element">{tweets[0].comments}</div>
                </div>
                <div className="card__footer-retweet">
                    <FaRetweet className="card__footer-icon"/>
                    <div className="card__footer-element">{tweets[0].retweets}</div>
                </div>
                <div className="card__footer-like">
                    <FaRegHeart className="card__footer-icon"/>
                    <div className="card__footer-element">{tweets[0].likes}</div>
                </div>
                <div className="card__footer-share">
                    <CgSoftwareUpload className="card__footer-icon"/>
                </div>
            </div>
        </div>
    )
}
