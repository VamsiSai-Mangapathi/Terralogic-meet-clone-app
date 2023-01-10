import './Button.css';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import Meeting from './Meeting';
import React,{useState} from 'react';
import {useHistory} from "react-router-dom";
import firepadRef from "./../../server/firebase";

const Button=()=>{
    const[meeting,setmeeting1]=useState();
    const history=useHistory();
    const meetingHandler=()=>{ 
        setmeeting1(true);
    };
    const closeHandler=()=>{
        setmeeting1(false);
        history.push ("/meeting/"+`?id=${firepadRef.key}#init`);
    }
    
    return(
        <div>
            <div>
            <button  className='Button' onClick={meetingHandler} ><VideoCallIcon style={{marginLeft:"-10px",marginTop:"-5px"}} />NewMeeting</button>
            {meeting && <Meeting close={closeHandler}/>}
            </div>
        </div>
    )
};
export default Button;