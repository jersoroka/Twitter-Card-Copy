import React, { useContext, useEffect, useRef } from 'react'
import { GlobalContext } from '../../context/GlobalContext';
import "./OptionsMenu.css"
import "./Option.css"
import { Option } from './Option';
import { FaUserTimes } from 'react-icons/fa'

export const OptionsMenu = ({ setIsOptionsMenuOpen }) => {
    const { useClickOutside } = useContext(GlobalContext);

    let domNode = useClickOutside(() => {
        setIsOptionsMenuOpen(false);
    });

    return (
        <div className="optionsMenu__container" ref={domNode}>
            <Option icon={<FaUserTimes className="option__icon"/>} text={"Hello World"}/>
        </div>
    )
}
