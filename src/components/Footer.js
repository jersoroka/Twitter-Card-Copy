import React, { useContext } from 'react'
import "./Footer.css"
import { CgSoftwareUpload } from "react-icons/cg";
import { FaRetweet, FaRegComment, FaRegHeart } from "react-icons/fa";
import { GlobalContext } from '../context/GlobalContext';

export const Footer = () => {

    const {tweets, setIsRetweetMenuOpen, setIsShareMenuOpen} = useContext(GlobalContext);

    return (
        <div className="card__footer">
            <div className="card__footer-comment">
                <div className="card__footer-comment-element">
                    <FaRegComment className="card__footer-icon"/>
                    <div className="card__footer-element">{tweets[0].comments}</div>
                </div>
            </div>
            <div className="card__footer-retweet">
                <div className="card__footer-retweet-element" onClick={() => setIsRetweetMenuOpen(true)}>
                    <FaRetweet className="card__footer-icon"/>
                    <div className="card__footer-element">{tweets[0].retweets}</div>
                </div>
            </div>
            <div className="card__footer-like">
                <div className="card__footer-like-element">
                    <FaRegHeart className="card__footer-icon"/>
                    <div className="card__footer-element">{tweets[0].likes}</div>
                </div>
            </div>
            <div className="card__footer-share" onClick={() => setIsShareMenuOpen(true)}>
                <CgSoftwareUpload className="card__footer-icon"/>
            </div>
        </div>
    )
}
