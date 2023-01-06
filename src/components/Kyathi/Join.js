import './Join.css';
import ClearIcon from '@mui/icons-material/Clear';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import PersonAddAlt1RoundedIcon from '@mui/icons-material/PersonAddAlt1Rounded';
import React,{useState} from 'react';
import Adduser from '../Forms/Adduser';


function Join(props){
   const[adduser,setadduser]=useState(); 
   const addHandler=()=>{
    setadduser(true);
   }
   const closeaddHandler=()=>{
    setadduser(false);
   }
    return (
      <div className='joinbackdrop'>
        <div className="join">
          <h1>Here's your joining info
          <ClearIcon style={{marginLeft:'35%',marginTop:'5px',cursor:'pointer'}} onClick={props.onclose}/></h1>
          <p>
            Send this to people you want to meet with.Be <br />
            sure to save it so you can use it later,too
          </p>
          <div>
            <button className='btn' onClick={addHandler}><PersonAddAlt1RoundedIcon style={{width:"40px"}}/>Add Others</button>
          </div>
          <div className='meet-link'>
            <span>{props.url}</span>
            <ContentCopyIcon className='icon' onClick={() => navigator.clipboard.writeText(props.url)}/>
          </div>
        </div>
        {adduser && <Adduser closeadd={closeaddHandler} url={props.url} />}
      </div>
    );
};

export default Join; 