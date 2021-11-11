import React, { useContext, useRef } from 'react'
import { GlobalContext } from '../../context/GlobalContext';
import "./Menu.css";
import "./Option.css";
import "./OptionsMenu.css";
import { Option } from './Option';
import { FaUserPlus, FaUserTimes } from 'react-icons/fa'
import { MdPostAdd } from 'react-icons/md';
import { BiBlock, BiVolumeFull, BiVolumeMute } from 'react-icons/bi';
import { ImEmbed } from 'react-icons/im';
import { IoFlagOutline } from 'react-icons/io5';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { triggerUnfinishedFeatureToaster } from '../toasters/UnfinishedFeatureToaster';
import { triggerSuccessToaster } from '../toasters/SuccessToaster';

export const OptionsMenu = ({ setIsOptionsMenuOpen }) => {
    const { handle, isFollower, setIsFollower, isMute, setIsMute, useClickOutside } = useContext(GlobalContext);

    let domNode = useRef();
    useClickOutside(domNode, () => {
        setIsOptionsMenuOpen(false);
    });

    const handleMute = (value) => {
        isMute ? triggerSuccessToaster(handle + " has been unmuted") : triggerSuccessToaster(handle + " has been muted");
        setIsMute(value);
    }

    return (
        <div className="menu__container optionsMenu__container" ref={domNode}>
            {isFollower ?
                <Option icon={<FaUserTimes/>} text={"Unfollow " + handle} onClick={() => setIsFollower(false)}/> :
                <Option icon={<FaUserPlus/>} text={"Follow " + handle} onClick={() => setIsFollower(true)}/>
            }
            <Option icon={<MdPostAdd/>} text={"Add/remove " + handle + " from Lists"} onClick={() => triggerUnfinishedFeatureToaster()}/>
            {isMute ?
                <Option icon={<BiVolumeFull/>} text={"Unmute " + handle} onClick={() => handleMute(false)}/> :
                <Option icon={<BiVolumeMute/>} text={"Mute " + handle} onClick={() => handleMute(true)}/>
            }
            <Option icon={<BiBlock/>} text={"Block " + handle} onClick={() => toast('Successfully blocked.')}/>
            <Option icon={<ImEmbed/>} text={"Embed Tweet"} onClick={() => triggerUnfinishedFeatureToaster()}/>
            <Option icon={<IoFlagOutline/>} text={"Report Tweet"} onClick={() => triggerUnfinishedFeatureToaster()}/>
        </div>
    )
}
