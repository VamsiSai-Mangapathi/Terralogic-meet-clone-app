import './Content.css';
import React from 'react';
const Content=(props)=>{
    return (
      <div onClick={props.click}>
        <div className="content" >
          <nav>
            <navlink>create a new meet</navlink>
          </nav>
        </div>
      </div>
    );
    
}
export default  Content;