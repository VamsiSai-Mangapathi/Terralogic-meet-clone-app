import './Wrong.css';
import React from 'react';

function Wrongpassword(props){
    return(
        <div className="wrongbackdrop">
      <div className="wrongmodal">
        <div>
          <h1 className="wrongheader">Invalid Password</h1>
        </div>
        <div className="wrongcontent">
          <p>Enter Valid Password</p>
        </div>
        <button className="wrongbtn" onClick={props.validpassword}>Okay</button>
      </div>
    </div>
    )
}

export default Wrongpassword;