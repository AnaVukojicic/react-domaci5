import React from "react";
import classes from './FooterSection.module.scss';


const FooterSection=()=>{
    return(
        <div className={classes['container']}>
            <p>© All rights reserved 2021 Flourish</p>
            <p>info@flourish.me +382 20 000 000</p>
        </div>
    );
}

export default FooterSection;