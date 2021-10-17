import React from 'react'
import "./HoverCard.css"

export const HoverCard = ({position, handleMouseLeave}) => {
    return (
        <div className={"hoverCard__container " + position} onMouseLeave={handleMouseLeave}>
            
        </div>
    )
}
