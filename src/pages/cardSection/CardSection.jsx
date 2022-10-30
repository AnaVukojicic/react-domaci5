import React from "react";
import Card from "../../components/card/Card";
import classes from './CardSection.module.scss';
import Card1 from '../../images/card1.svg';
import Card2 from '../../images/card2.svg';
import Card3 from '../../images/card3.svg';
import CardImg1 from '../../images/card-img-1.svg';
import CardImg2 from '../../images/card-img-2.svg';
import CardImg3 from '../../images/card-img-3.svg';
import CircleCard from "../../components/circleCard/CircleCard";
import AppButton from "../../components/appButton/AppButton";
import SupportedSection from "../supportedSection/SupportedSection";



const CardSection=()=>{
    const list1=[
        {
            title:"Straight return of investment",
            image:Card1,
            text: <>
                <p>Soft skills training boosts productivity and retention by 12% and delivers a 250% return of investment within 8 months.*</p>
                <p><span>*</span> According to a study by Boston College, Harvard University, and the University of Michigan.</p>
                </>
        },
        {
            title:"Boost employee performance",
            image:Card2,
            text: <>
                <p>30% increased team's performance</p>
                </>
        },
        {
            title:"Increase leadership capacity",
            image:Card3,
            text: <>
                <p>40% better decision making</p>
                </>
        }
    ];

    const list2=[
        {
            title:'Lunch break cake',
            text:'Sweeten up your company life with 10 minutes per day',
            image:CardImg1
        },
        {
            title:'Fee',
            text:'Literally for free',
            image:CardImg2
        },
        {
            title:'Theme park spark',
            text:'Games, quizzes, community concept',
            image:CardImg3
        }
    ];

    return(
        <div className={classes['container']}>
            <div><h2>COMPANY COMPETENCE</h2></div>
            <div className={classes['card-container']}>
                {
                    list1.map((item,index)=>{
                       return <div className={classes[`card-${index+1}`]}>
                            <Card title={item.title} image={item.image} text={item.text} key={`card${index}`}/>
                        </div>
                    })
                }
            </div>
            <div className={classes['circle-card-container']}>
            {
                    list2.map((item,index)=>{
                       return<>
                                <CircleCard title={item.title} image={item.image} text={item.text} key={`circle-car-${index}`}/>
                            </>
                    })
                }
            </div>
            <div className={classes['plan-container']}>
                    <h3>Interested in the plan for <span>organisations?</span></h3>
                    <div><AppButton text="Your plan is ready"/></div>
            </div>  
            <div className={classes['supported']}>
                <SupportedSection/>
            </div>
        </div>
    );
}

export default CardSection;