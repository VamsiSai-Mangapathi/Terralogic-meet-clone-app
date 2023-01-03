import './Wrong.css';
import React from 'react';

function Wrongemail(props){
  return (
    <div className="wrongbackdrop">
      <div className="wrongmodal">
        <div>
          <h1 className="wrongheader">Email Not Found...</h1>
        </div>
        <div className="wrongcontent">
          <p>Enter Valid Email</p>
        </div>
        <button className="wrongbtn" onClick={props.valid}>Okay</button>
      </div>
    </div>
  );
}

export default Wrongemail;