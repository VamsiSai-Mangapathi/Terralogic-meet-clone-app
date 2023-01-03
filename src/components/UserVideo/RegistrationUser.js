import '../Forms/LoginForm.css';
import '../Forms/Registration.css';
import {NavLink,useHistory} from 'react-router-dom';
import React,{useState,useRef,useEffect} from 'react';
import logo1 from '../../assets/image.png';
import Registermessage from '../messages/Registermessage'
import Emailvalid from '../messages/Emailvalid';
import Header from '../Header';
import Wrongregister from '../messages/Wrongregister';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';




function RegistrationUser(props){
  const history=useHistory();
  const emailRef = useRef();
  const passwordRef3 = useRef();
  const usernameref=useRef();
  const confirmpasswordRef=useRef();
  const [Rmessage,setRmessage]=useState(false);
  const[emailisValid,setemailisValid]=useState(false);
  const[errorregister,seterrorregister]=useState();
  const[wrongregister,setwrongregister]=useState();
  const[passwordlength,setpasswordlength]=useState();
  const[passworduppercase,setpassworduppercase]=useState();
  const[passwordlowercase,setpasswordlowercase]=useState();
  const[passwordnumber,setpasswordnumber]=useState();
  const[passwordmatch,setpasswordmatch]=useState();
  const[formisValid,setformisValid]=useState(false);
  const [passwordspecial, setpasswordspecial] = useState();
  const[passwordcondition,setpasswordcondition]=useState();
  const[passwordcondition1,setpasswordcondition1]=useState();
  
  const handler=()=>{
    setRmessage(false);
    history.push('/login')
  };

  const emailHandler=()=>{
    setemailisValid(false);
  };
  
  const passwordenterhandler3=()=>{
    const enteredpassword1=passwordRef3.current.value;
      if(enteredpassword1.trim().length>=8){
        setpasswordlength(true);
      }else
      if(enteredpassword1.trim().length<8){setpasswordlength(false)}
      if(enteredpassword1.match(/[A-Z]/)){
        setpassworduppercase(true);
      }
      else {
        setpassworduppercase(false);
      }
      if(enteredpassword1.match(/[a-z]/)){
        setpasswordlowercase(true);
      }
      else{
        setpasswordlowercase(false);
      }
      if(enteredpassword1.match(/[0-9]/)){
        setpasswordnumber(true);
      }
      else{
        setpasswordnumber(false);
      }
      if(enteredpassword1.match(/[^A-Za-z0-9-' ']/i)){
        setpasswordspecial(true);
      }
      else{
        setpasswordspecial(false);
      }
  }
  const confirmpasswordhandler=()=>{
    const confirmpassword=confirmpasswordRef.current.value;
    const enteredpassword1=passwordRef3.current.value;
    if(confirmpassword === enteredpassword1){
      setformisValid(true);
      setpasswordmatch(true);
    }
    else{
      setformisValid(false);
      setpasswordmatch(false);
    }
  }

  const passwordconditions=()=>{
    setpasswordcondition(false);
    setpasswordcondition1(true);
  }
  const pswdconditions=()=>{
    setpasswordcondition(true);
    setpasswordcondition1(false);
  }
  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailRef.current.value;
    const enteredpassword = passwordRef3.current.value;
    const enteredUsername=usernameref.current.value;

    if(enteredEmail.includes("@terralogic.com")){
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBERMyCRpzcfn_xn0o7_b464pVhJI2Y1RI",
        // "http://127.0.0.1:8000/core/register/",
        {
          method: "POST",
          body: JSON.stringify({
            username:enteredUsername,
            email: enteredEmail,
            password: enteredpassword,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((res) => {
        if (res.ok) {
          setRmessage(true);
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication failed!";
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }
            setRmessage(false);
            seterrorregister(errorMessage);
            if(errorregister === "EMAIL_EXISTS"){
              setwrongregister(true);
            }
          });
        }
      });
    }else{
      setemailisValid(true);
    }
  };
  useEffect(() => {
    usernameref.current.focus();
  }, []);

  const validregisterHandler=()=>{
    setwrongregister(false);
  }
  

  return (
    <div>
      <Header />
      <div>{<img className="logo1" src={logo1} alt="logo1" />}</div>
      <div className="mainform">
        <form onSubmit={submitHandler}>
          <h5 className="h5">Registration for Terralogic Meet</h5>
          <div className="login">
            <label htmlFor="text">User Name</label>
            <input
              className="input"
              type="text"
              id="username"
              ref={usernameref}
            />
          </div>
          <div className="login">
            <label htmlFor="email">Email Id</label>
            <input
              className="input"
              type="email"
              id="email"
              required
              ref={emailRef}
            />
          </div>
          <div className="login1">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              required
              ref={passwordRef3}
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,}$"
              onInput={passwordenterhandler3}
              onClick={pswdconditions}
            />
          </div>
          <div className="conditions">
            {passwordcondition ? (
              <div>
                <ul
                  style={{
                    fontSize: "14px",
                    marginTop: "10px",
                    marginLeft: "35px",
                  }}
                >
                  <li
                    style={{
                      lineHeight: "20px",
                      color: passwordlength ? "green" : "red",
                    }}
                  >
                    Minimum 8 characters
                  </li>
                  <li
                    style={{
                      lineHeight: "20px",
                      color: passworduppercase ? "green" : "red",
                    }}
                  >
                    Aleast One Uppercase
                  </li>
                  <li
                    style={{
                      lineHeight: "20px",
                      color: passwordlowercase ? "green" : "red",
                    }}
                  >
                    Lowercase
                  </li>
                  <li
                    style={{
                      lineHeight: "20px",
                      color: passwordnumber ? "green" : "red",
                    }}
                  >
                    Number
                  </li>
                  <li
                    style={{
                      lineHeight: "20px",
                      color: passwordspecial ? "green" : "red",
                    }}
                  >
                    Special Character
                  </li>
                </ul>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="login1">
            <label htmlFor="password">Confirm Password</label>
            <input
              type="password"
              id="password"
              required
              ref={confirmpasswordRef}
              onInput={confirmpasswordhandler}
              onClick={passwordconditions}
            />
            <div className="conditions">
            {passwordcondition1 ? (
              <div>
                <ul
                  style={{
                    fontSize: "14px",
                    marginTop: "10px",
                    marginLeft: "35px",
                  }}
                >
                  <li
                    style={{
                      lineHeight: "25px",
                      color: passwordmatch ? "green" : "red",
                    }}
                  >
                    Password Match
                  </li>
                </ul>
              </div>
            ) : (
              ""
            )}
          </div>
          </div>
          <div>
            <button className="button1" type="submit" disabled={!formisValid}>
              Register
            </button>
            <p className="lins4">Already have an account ? </p>
            <NavLink to="/login1" style={{ textDecoration: "none" }}>
              <p className="lin4">Login</p>
            </NavLink>
          </div>
        </form>
        {Rmessage && <Registermessage click={handler} />}
        {emailisValid && <Emailvalid email={emailHandler} />}
        {wrongregister && (
          <Wrongregister validregister={validregisterHandler} />
        )}
      </div>
    </div>
  );
};

export default RegistrationUser;




        