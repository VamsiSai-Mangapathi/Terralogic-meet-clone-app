import './Newform.css';
import React from 'react';
import {NavLink} from 'react-router-dom';
import { useEffect,useRef } from 'react';

function Newform(props){
  const emailRef=useRef();
    useEffect(()=>{
      emailRef.current.focus();
    },[])
    return (
      <div>
        <div className="newform">
          <div className="newlogin">
            <form>
              <h5>Login to Terralogic Meet</h5>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="newinput"
                  id="email"
                  ref={emailRef}
                  onClick={props.click}
                />
                <p className="lins4">Do no have account ?</p>
                <NavLink to="/Registration" style={{ textDecoration: "none" }}>
                  <p className="lin4">Register</p>
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Newform;