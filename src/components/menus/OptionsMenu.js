import React, { useContext, useRef } from 'react'
import { GlobalContext } from '../../context/GlobalContext';
import "./Menu.css";
import "./Option.css";
import "./OptionsMenu.css";
import { Option } from './Option';
import { FaUserPlus, FaUserTimes } from 'react-icons/fa'
import { MdPostAdd } from 'react-icons/md';
import { BiBlock, BiVolumeMute } from 'react-icons/bi';
import { ImEmbed } from 'react-icons/im';
import { IoFlagOutline } from 'react-icons/io5';

export const OptionsMenu = ({ setIsOptionsMenuOpen }) => {
    const { handle, isFollower, setIsFollower, useClickOutside } = useContext(GlobalContext);

    let domNode = useRef();
    useClickOutside(domNode, () => {
        setIsOptionsMenuOpen(false);
    });

    return (
        <div className="menu__container optionsMenu__container" ref={domNode}>
            {isFollower ?
                <Option icon={<FaUserTimes/>} text={"Unfollow " + handle} onClick={() => setIsFollower(false)}/> :
                <Option icon={<FaUserPlus/>} text={"Follow " + handle} onClick={() => setIsFollower(true)}/>
            }
            <Option icon={<MdPostAdd/>} text={"Add/remove " + handle + " from Lists"}/>
            <Option icon={<BiVolumeMute/>} text={"Mute " + handle}/>
            <Option icon={<BiBlock/>} text={"Block " + handle}/>
            <Option icon={<ImEmbed/>} text={"Embed Tweet"}/>
            <Option icon={<IoFlagOutline/>} text={"Report Tweet"}/>
        </div>
    )
}
