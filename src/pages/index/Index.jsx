import React from 'react';
import classes from './Index.module.scss';
import logoImg from '../../images/logoImage.svg';
import DisplayCard from '../../components/displayCard/DisplayCard';
import { faDisplay, faMobileScreen } from '@fortawesome/free-solid-svg-icons';

const Index=({onClickDesktop=()=>{}})=>{
    return(
        <div className={classes['container']}>
            <div className={classes['content-container']}>
                <div className={classes['img-container']}>
                    <img src={logoImg} alt='flourish'/>
                </div>
                <div className={classes['icons-container']}>
                    <div onClick={()=>onClickDesktop()}><DisplayCard icon={faDisplay} title='Desktop'/></div>
                    <div><DisplayCard icon={faMobileScreen} title='Mobile'/></div>
                </div>
            </div>
        </div>
    );
}

export default Index;