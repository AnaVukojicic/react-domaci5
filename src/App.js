import clsx from 'clsx';
import { useState } from 'react';
import classes from './App.module.scss';
import AppButton from './components/appButton/AppButton';
import DesktopIndex from './pages/desktopIndex/DesktopIndex';
import Index from './pages/index/Index';
import IntroSection from './pages/introductionSection/IntroSection';
import PlayBtn from './images/playBtn.svg';
function App() {
  const [showIndex,setShowIndex]=useState(true);

  const showIntro=()=>{
    setShowIndex(false)
  }

  return (
    <div className={classes['container']}>
      <div className={!showIndex && classes['d-none']}><Index onClickDesktop={()=>showIntro()}/></div>
      <div className={clsx(classes['intro'],showIndex && classes['d-none'])}><IntroSection/></div>
      <div className={clsx(showIndex && classes['d-none'],classes['desktop-index'])}><DesktopIndex/></div>
      <div className={clsx(classes['video'],showIndex && classes['d-none'])}><AppButton text="WATCH OUR VIDEO" image={PlayBtn}/></div>
    </div>
  );
}

export default App;
