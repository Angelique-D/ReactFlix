import React from "react";
import { CardProps } from "../../types/components/common";

const Card: React.FC<CardProps> = ({arrayObject}) => {
    return (
        <>
            <div 
                className="bg-blue-950 h-40 md:h-72 w-24 md:w-48"
            >
                <img src="/assets/images/imageFromPixlr2.png" alt="Movie name" className="object-cover h-full" />
            </div>
        </>
    );  
};

export default Card;