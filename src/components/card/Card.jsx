import React from "react";


const Card=({title='',text='',image=''})=>{
    return(
        <>
            <div>
                <img src={image}/>
            </div>
            <div>
                <h3>{title}</h3>
                {text}
            </div>
        </>     
    );
}

export default Card;