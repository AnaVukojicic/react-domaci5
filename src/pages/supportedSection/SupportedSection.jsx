import React from "react";
import classes from './SupportedSection.module.scss';
import Img1 from '../../images/Group 1882.png';
import Img2 from '../../images/Group 1883.png';
import Img3 from '../../images/Group 1885.png';
import Apple from '../../images/appStore.svg'
import Google from '../../images/googleStore.svg'

const SupportedSection=()=>{
    return(
        <div className={classes['container']}>
            <div className={classes['support']}>
            <h3>Supported by</h3>
                <div>
                    <img src={Img1} alt=''/>
                    <img src={Img2} alt=''/>
                    <img src={Img3} alt=''/>
                </div>
            </div>
            <div className={classes['download']}>
                <h3>Download now</h3>
                <div>
                    <img src={Google} alt=''/>
                    <img src={Apple} alt=''/>
                </div>
            </div>
        </div>
    );
}

export default SupportedSection;