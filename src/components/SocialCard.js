import React from 'react';
import "./SocialCard.css";
import { GoVerified } from "react-icons/go";
import { BsThreeDots } from "react-icons/bs";
import displayPicture from '../images/stephen-a-smith-profile.jpg'

export const SocialCard = () => {
    return (
        <div className="card">
            <img className="card__profile" src={displayPicture} alt="stephen-a-smith-profile-picture"/>
            <div className="card__header">
                <div className="card__header-info">

                </div>
                <BsThreeDots/>
            </div>
        </div>
    )
}
