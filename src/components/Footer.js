import React, { useContext } from 'react'
import "./Footer.css"
import { CgSoftwareUpload } from "react-icons/cg";
import { FaRetweet, FaRegComment, FaRegHeart } from "react-icons/fa";
import { GlobalContext } from '../context/GlobalContext';

export const Footer = () => {

    const {tweets} = useContext(GlobalContext);

    return (
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
    )
}
