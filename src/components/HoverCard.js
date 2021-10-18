import React from 'react'
import "./HoverCard.css"
import { motion } from "framer-motion";

export const HoverCard = ({position, handleMouseLeave}) => {
    return (
        <motion.div className={"hoverCard__container " + position} onMouseLeave={handleMouseLeave}
        animate={{ opacity: 1 }} transition={{ duration: 0.25 }}>
            
        </motion.div>
    )
}
