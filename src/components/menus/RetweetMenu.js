import React, { useContext, useRef } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import './Menu.css';
import './RetweetMenu.css';
import { FaRetweet} from "react-icons/fa";
import { BsPencil } from 'react-icons/bs';
import { Option } from './Option';
import { triggerUnfinishedFeatureToaster } from '../toasters/UnfinishedFeatureToaster';

export const RetweetMenu = ({ setIsRetweetMenuOpen }) => {
    const { useClickOutside, isRetweeted, setIsRetweeted, retweets, setRetweets } = useContext(GlobalContext);

    let domNode = useRef();
    useClickOutside(domNode, () => {
        setIsRetweetMenuOpen(false);
    });

    return (
        <div className="menu__container retweetMenu__container" ref={domNode}>
            <Option 
                icon={<FaRetweet/>} 
                text={isRetweeted ? "Undo Retweet" : "Retweet"} 
                onClick={() => {
                    isRetweeted ? setRetweets(retweets - 1) : setRetweets(retweets + 1);
                    setIsRetweeted(!isRetweeted);
                    setIsRetweetMenuOpen(false);
                }}/>
            <Option icon={<BsPencil/>} text={"Quote Tweet"} onClick={() => triggerUnfinishedFeatureToaster()}/>
        </div>
    )
}