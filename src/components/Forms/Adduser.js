import './Adduser.css';
import React,{useRef,useEffect} from 'react';
import ClearIcon from '@mui/icons-material/Clear';

function Adduser(props){
    const add=useRef();
    useEffect(()=>{
        add.current.focus();
    },[])

    const adduserHandler=(event)=>{
      event.preventDefault();
  
      const entereduserEmail = add.current.value;
      
      
      
      fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBERMyCRpzcfn_xn0o7_b464pVhJI2Y1RI',
        // "http://127.0.0.1:8000/49.205.67.174/login",
        {
          method: "POST",
          body: JSON.stringify({
           email: entereduserEmail,
           returnSecureToken: true,
          }),
          headers: 
          {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          if (res.ok) {
            return res.json();
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
    return (
      <div className="addbackdrop">
        <div className="add">
          <form onSubmit={adduserHandler}>
            <h1>Add People</h1>
            <ClearIcon
              style={{
                marginLeft: "90%",
                marginTop: "-50px",
                cursor: "pointer",
              }}
              onClick={props.closeadd}
            />
            <input
              type="email"
              placeholder="Enter email"
              ref={add}
            />
            <button className="sbtn" type="submit">
              Send Mail
            </button>
          </form>
        </div>
      </div>
    );
}
export default Adduser;