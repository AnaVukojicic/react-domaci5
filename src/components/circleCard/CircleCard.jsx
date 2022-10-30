import React from "react";
import classes from './CircleCard.module.scss';


const CircleCard=({image='',title='',text=''})=>{
    return(
        <div className={classes['container']}>
            <div>
                <img src={image} alt=''/>
            </div>
            <div>
                <h4>{title}</h4>
                <p>{text}</p>
            </div>
        </div>
    );
}

export default CircleCard;