import React, { useContext, useRef } from 'react'
import { GlobalContext } from '../../context/GlobalContext';
import "./Menu.css"
import "./Option.css"
import { Option } from './Option';
import { FaUserTimes } from 'react-icons/fa'
import { MdPostAdd } from 'react-icons/md';
import { BiBlock, BiVolumeMute } from 'react-icons/bi';
import { ImEmbed } from 'react-icons/im';
import { IoFlagOutline } from 'react-icons/io5';

export const Menu = ({ setIsOptionsMenuOpen }) => {
    const { handle, useClickOutside } = useContext(GlobalContext);

    let domNode = useRef();
    useClickOutside(domNode, () => {
        setIsOptionsMenuOpen(false);
    });

    return (
        <div className="menu__container" ref={domNode}>
            <Option icon={<FaUserTimes/>} text={"Unfollow " + handle}/>
            <Option icon={<MdPostAdd/>} text={"Add/remove " + handle + " from Lists"}/>
            <Option icon={<BiVolumeMute/>} text={"Mute " + handle}/>
            <Option icon={<BiBlock/>} text={"Block " + handle}/>
            <Option icon={<ImEmbed/>} text={"Embed Tweet"}/>
            <Option icon={<IoFlagOutline/>} text={"Report Tweet"}/>
        </div>
    )
}
