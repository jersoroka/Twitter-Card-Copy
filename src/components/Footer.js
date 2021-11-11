import React, { useContext, useState } from 'react'
import "./Footer.css"
import { CgSoftwareUpload } from "react-icons/cg";
import { FaRetweet, FaRegComment, FaRegHeart } from "react-icons/fa";
import { GlobalContext } from '../context/GlobalContext';
import { triggerUnfinishedFeatureToaster } from './toasters/UnfinishedFeatureToaster';

export const Footer = () => {

    const {tweets, retweets, setIsRetweetMenuOpen, setIsShareMenuOpen} = useContext(GlobalContext);
    const [likes, setLikes] = useState(tweets[0].likes);
    const [isLiked, setIsLiked] = useState(false);

    return (
        <div className="card__footer">
            <div className="card__footer-comment" onClick={() => triggerUnfinishedFeatureToaster()}>
                <div className="card__footer-comment-element">
                    <FaRegComment className="card__footer-icon"/>
                    <div className="card__footer-element">{tweets[0].comments}</div>
                </div>
            </div>
            <div className="card__footer-retweet">
                <div className="card__footer-retweet-element" onClick={() => setIsRetweetMenuOpen(true)}>
                    <FaRetweet className="card__footer-icon"/>
                    <div className="card__footer-element"
                        >{retweets}</div>
                </div>
            </div>
            <div 
                className="card__footer-like" 
                onClick={() => {
                    isLiked ? setLikes(likes - 1) : setLikes(likes + 1);
                    setIsLiked(!isLiked);
                }}>
                <div className="card__footer-like-element">
                    <FaRegHeart className="card__footer-icon"/>
                    <div className="card__footer-element">{likes}</div>
                </div>
            </div>
            <div className="card__footer-share" onClick={() => setIsShareMenuOpen(true)}>
                <CgSoftwareUpload className="card__footer-icon"/>
            </div>
        </div>
    )
}
