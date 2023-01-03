
import React from "react";
import Clock from 'react-live-clock';

const DateAndTime=()=>{

    
    const currDate = new Date().toLocaleDateString();

    return(
    <>
    <Clock style={{color:"gray",fontSize:"larger"}} format={'HH:mm:ss'} ticking={true} timezone={'india/kolkata'} />
    <p style={{color:"gray",fontSize:"larger"}} >  {currDate} </p>
    </>
)
    

}
export default DateAndTime;






