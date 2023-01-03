import './Wrong.css';
import React from 'react';

function Wrongregister(props){
  return (
    <div className="wrongbackdrop">
      <div className="wrongmodal">
        <div>
          <h1 className="wrongheader">Email Exists</h1>
        </div>
        <div className="wrongcontent">
          <p>Try with Another Email</p>
        </div>
        <button className="wrongbtn" onClick={props.validregister}>Okay</button>
      </div>
    </div>
  );
}

export default Wrongregister;