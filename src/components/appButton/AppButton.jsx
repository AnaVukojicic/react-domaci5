import React from "react";
import classes from './AppButton.module.scss';

const AppButton=({text='',image='',onClick=()=>{}})=>{
    return(
        <button className={classes['button']} onClick={()=>onClick()}>
            <img src={image} alt=''/>
            <span>{text}</span>
        </button>
    );
}

export default AppButton;