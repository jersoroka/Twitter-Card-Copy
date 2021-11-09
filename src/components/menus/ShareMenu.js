import React, { useContext, useRef, useState } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import './Menu.css';
import './ShareMenu.css';
import { AiOutlineMail } from 'react-icons/ai';
import { MdOutlineBookmarkAdd } from 'react-icons/md';
import { BsLink45Deg } from 'react-icons/bs';
import { CgSoftwareUpload } from "react-icons/cg";
import { Option } from './Option';

export const ShareMenu = ({ handleCopy, handleBookmark, setIsShareMenuOpen }) => {
    const { isBookmarked, setIsBookmarked, useClickOutside } = useContext(GlobalContext);

    let domNode = useRef();
    useClickOutside(domNode, () => {
        setIsShareMenuOpen(false);
    });

    return (
        <div className="menu__container shareMenu__container" ref={domNode}>
            <Option icon={<AiOutlineMail/>} text={"Send via Direct Message"}/>
            <Option 
                icon={<MdOutlineBookmarkAdd/>} 
                text={isBookmarked ? "Remove Tweet from Bookmarks" : "Bookmark"}
                onClick={() => {
                    setIsBookmarked(!isBookmarked);
                    handleBookmark(isBookmarked);
                    setIsShareMenuOpen(false);
                }}/>
            <Option 
                icon={<BsLink45Deg/>} 
                text={"Copy link to Tweet"}
                onClick={() => {
                    handleCopy();
                }}/>
            <Option icon={<CgSoftwareUpload/>} text={"Share Tweet via ..."}/>
        </div>
    )
}
