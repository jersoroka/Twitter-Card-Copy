import React, { useContext, useRef } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import './Menu.css';
import './ShareMenu.css';
import { AiOutlineMail } from 'react-icons/ai';
import { MdOutlineBookmarkAdd } from 'react-icons/md';
import { BsLink45Deg } from 'react-icons/bs';
import { CgSoftwareUpload } from "react-icons/cg";
import { Option } from './Option';

export const ShareMenu = ({ setIsShareMenuOpen }) => {
    const { useClickOutside } = useContext(GlobalContext);

    let domNode = useRef();
    useClickOutside(domNode, () => {
        setIsShareMenuOpen(false);
    });
    return (
        <div className="menu__container shareMenu__container" ref={domNode}>
            <Option icon={<AiOutlineMail/>} text={"Send via Direct Message"}/>
            <Option icon={<MdOutlineBookmarkAdd/>} text={"Bookmark"}/>
            <Option icon={<BsLink45Deg/>} text={"Copy link to Tweet"}/>
            <Option icon={<CgSoftwareUpload/>} text={"Share Tweet via ..."}/>
        </div>
    )
}
