import React, { useContext, useEffect, useRef } from 'react'
import { GlobalContext } from '../../context/GlobalContext';
import "./OptionsMenu.css"

export const OptionsMenu = ({ setIsOptionsMenuOpen }) => {
    const { useClickOutside } = useContext(GlobalContext);

    let domNode = useClickOutside(() => {
        setIsOptionsMenuOpen(false);
    });

    return (
        <div className="optionsMenu__container" ref={domNode}>
            Hello World!
        </div>
    )
}
