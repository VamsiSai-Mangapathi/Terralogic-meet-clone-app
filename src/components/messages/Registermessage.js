import './Registermessage.css';
import React from 'react';

function Registermessage(props){
    return(
        <div className="backdrop2" onClick={props.click}>
            <div className='modal2'>
                <h1>Registered Successfull</h1>
                <button className='button4' onClick={props.click}>okay</button>
            </div>
        </div>
    )
};
export default Registermessage;