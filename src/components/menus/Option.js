import React from 'react'
import "./Option.css"

export const Option = ({icon, text}) => {
    return (
        <div className="option__container">
            <span>{icon}</span>
            <span className="option__text">{text}</span>
        </div>
    )
}
