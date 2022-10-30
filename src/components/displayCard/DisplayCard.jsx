import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import classes from './DisplayCard.module.scss';

const DisplayCard=({icon,title})=>{
    return(
        <div className={classes['container']}>
            <div className={classes['icon']}>
                <FontAwesomeIcon icon={icon} className={classes['fa']}/>
            </div>
            <div className={classes['title']}>{title}</div>
        </div>
    );
}

export default DisplayCard;