import React from "react";
import classes from './IntroSection.module.scss';
import IntroImg from '../../images/flourish@2x.png';
import logoIntro from '../../images/logoIntro.svg';
import AppButton from "../../components/appButton/AppButton";
import PlayStore from '../../images/googleStore.svg';
import AppStore from '../../images/appStore.svg';
import Arrow from '../../images/Arrow.svg';

const IntroSection=()=>{
    return(
        <div className={classes['main-container']}>
        <div className={classes['container']}>
            <div className={classes['logo-img']}>
                <img src={logoIntro} alt='flourish'/>
            </div>
            <div className={classes['intro-img']}>
                <img src={IntroImg} alt='flourish'/>
            </div>
            <div className={classes['content']}>
                <div>
                    <div className={classes['heading']}>
                        <h2>Smart Employee Growth Assistant</h2>
                    </div>
                    <div className={classes['text']}>
                        <p>Emotional intelligence directly affects job efficiency & employee satisfaction</p>
                    </div>
                    <div className={classes['app-buttons']}>
                        <AppButton text="LAUNCH ASSISTANT"/>
                        <div className={classes['download']}>
                            <h5>Download</h5>
                            <img src={Arrow} alt=''/>
                        </div>
                    </div>
                </div>
                <div className={classes['buttons']}>
                    <div className={classes['play-store']}><img src={PlayStore} alt='download'/></div>
                    <div className={classes['app-store']}><img src={AppStore} alt='download'/></div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default IntroSection;