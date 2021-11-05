import React, { useContext, useRef } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import './Menu.css';
import './RetweetMenu.css';
import { FaRetweet} from "react-icons/fa";
import { BsPencil } from 'react-icons/bs';
import { Option } from './Option';

export const RetweetMenu = ({ setIsRetweetMenuOpen }) => {
    const { useClickOutside,  } = useContext(GlobalContext);

    let domNode = useRef();
    useClickOutside(domNode, () => {
        setIsRetweetMenuOpen(false);
    });

    return (
        <div className="menu__container retweetMenu__container" ref={domNode}>
            <Option icon={<FaRetweet/>} text={"Retweet"}/>
            <Option icon={<BsPencil/>} text={"Quote Tweet"}/>
        </div>
    )
}