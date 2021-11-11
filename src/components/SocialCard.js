import React, {useContext, useState} from 'react';
import "./SocialCard.css";
import displayPicture from '../images/stephen-a-smith-profile.jpg'
import { GlobalContext } from '../context/GlobalContext';
import { HoverCard } from "./HoverCard";
import { Header } from "./Header"
import { Footer } from "./Footer";
import { OptionsMenu } from './menus/OptionsMenu';
import { ShareMenu } from './menus/ShareMenu';
import { RetweetMenu } from './menus/RetweetMenu';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UnfinishedFeatureToaster from './toasters/UnfinishedFeatureToaster';
import SuccessToaster from './toasters/SuccessToaster';

export const SocialCard = () => {
    const {tweets, isOptionsMenuOpen, setIsOptionsMenuOpen, isRetweetMenuOpen, setIsRetweetMenuOpen, isShareMenuOpen, setIsShareMenuOpen} = useContext(GlobalContext)
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
    };

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
    };

    const handleBookmark = (isBookmarked) => {
        isBookmarked ? toast("Tweet removed from your Bookmarks", {containerId: 'success'}) : toast("Tweet added to your Bookmarks", {containerId: 'success'}) ;
    };

    return (
        <div className="card">
            <img className="card__profile" src={displayPicture} alt="stephen-a-smith-profile"
                onMouseOver={(e) => handleMouseOver(e.target.className)} 
                onMouseLeave={() => handleMouseLeave("card__profile")}/>
            {isHovering && !isHeaderHovering && <HoverCard handleMouseLeave={() => handleMouseLeave("card__profile")} position="hoverCard__profile"/>}
            <Header handleMouseOver={() => handleMouseOver("card__header-identity")} 
                    handleMouseLeave={() => handleMouseLeave("card__header-identity")}
                    isHovering={isHovering}
                    isHeaderHovering={isHeaderHovering}/>
            <div className="card__body">{tweets[0].tweet}</div>
            <Footer/>
            {isOptionsMenuOpen && <OptionsMenu setIsOptionsMenuOpen={setIsOptionsMenuOpen}/>}
            {isShareMenuOpen && <ShareMenu setIsShareMenuOpen={setIsShareMenuOpen}  handleBookmark={handleBookmark} handleCopy={() => toast('Copied to clipboard', {containerId: 'success'})}/>}
            {isRetweetMenuOpen && <RetweetMenu setIsRetweetMenuOpen={setIsRetweetMenuOpen}/>}
            <SuccessToaster/>
            <UnfinishedFeatureToaster/>
        </div>
    )
}
