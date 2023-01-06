import './Adduser.css';
import React,{useRef,useEffect,useState} from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import Mailsent from '../messages/Mailsent';
function Adduser(props){
    const [mailsent,setmailsent]=useState();
    const add=useRef();
    useEffect(()=>{
        add.current.focus();
    },[])
    const link=props.url;
    console.log(link);
    const adduserHandler=(event)=>{
      event.preventDefault();
  
      const entereduserEmail = add.current.value;
      
      
      fetch(
        // 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBERMyCRpzcfn_xn0o7_b464pVhJI2Y1RI',
        "http://nikhil010.pythonanywhere.com/meeting/",
        {
          method: "POST",
          body: JSON.stringify({
           email: entereduserEmail,
           Link:link,
           returnSecureToken: true,
          }),
          headers: 
          {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          if (res.ok) {
            setmailsent(true);
          } else {
            return res.json().then((data) => {
              let errorMessage = "Authentication failed!";
              if (data && data.error && data.error.message) {
                errorMessage = data.error.message;
              }

              throw new Error(errorMessage);
            });
          }
        })
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
        //   setwrong(err.message);
        //   if(wrong === "EMAIL_NOT_FOUND"){
        //     setwrongemail1(true);
        //   }
        //   if(wrong === "INVALID_PASSWORD") {
        //     setwrongpassword1(true)
        //   }
      });
    }
    const closemailhandler=()=>{
      setmailsent(false);
    }
    return (
      <div className="addbackdrop">
        <div className="add">
          <form onSubmit={adduserHandler}>
            <div className='adduser'>
              <h1>Add People</h1>
              <ClearIcon
                style={{
                  marginLeft: "240px",
                  marginTop: "30px",
                  cursor: "pointer",
                }}
                onClick={props.closeadd}
              />
            </div>
            <input className='adduser-input' type="email" placeholder="Enter email" ref={add} />
            <button className="sbtn" type="submit">
              Send Mail
            </button>
          </form>
        </div>
        {mailsent && <Mailsent closemail={closemailhandler}/>}
      </div>
    );
}
export default Adduser;