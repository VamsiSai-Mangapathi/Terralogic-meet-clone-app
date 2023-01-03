import './Meeting.css';
import LinkIcon from '@mui/icons-material/Link';
import {NavLink} from 'react-router-dom';
import React,{useContext} from 'react';


function Meeting(props){
    
    return(
        <div className='meet' onClick={props.close}>
            <LinkIcon style={{marginTop:'5px'}} /><div><h1>Create a Instant Meeting</h1></div>
        </div>
    )
};

export default Meeting;
