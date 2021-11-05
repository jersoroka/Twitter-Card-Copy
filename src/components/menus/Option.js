import React from 'react'
import "./Option.css"

export const Option = ({icon, onClick, text}) => {
    return (
        <div className="option__container" onClick={onClick}>
            <span className="option__icon-container">{icon}</span>
            <span className="option__text">{text}</span>
        </div>
    )
}
