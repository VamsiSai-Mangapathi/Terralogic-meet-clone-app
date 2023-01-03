import {SocketContext} from'../../Context';
import React,{useContext,useState} from 'react';
import { Grid,makeStyles } from '@material-ui/core';
import Videofooter from '../VedioCall/Videofooter';
import Videojoin from '../VedioCall/Videojoin';
const useStyles = makeStyles((theme) => ({
    video: {
      width: "550px",
      [theme.breakpoints.down("xs")]: { 
        width: "300px",
      },
    },
    gridContainer: {
      // justifyContent: "center",
      [theme.breakpoints.down("xs")]: {
        flexDirection: "column",
      },
    } 
  }));
function Uservideocall(){
  const {
    myVideo,
    userVideo,
    callEnded,
    stream,
    callAccepted,
    call,
    answerCall,
    me,
  } = useContext(SocketContext);
  const classes = useStyles();
  const[Connect1,setConnect]=useState(true);
  const ConnectHandler=()=>{
    setConnect(false);
  }
  return (
    <div style={{ backgroundColor: "grey", height: "100vh" }}>
      {Connect1 && <Videojoin connect={ConnectHandler} />}
      <Grid container className={classes.gridContainer}>
        {stream && (
          <Grid item xs={12} md={6}>
            <video
              className={classes.video}
              playsInline
              ref={userVideo}
              autoPlay
            ></video>
          </Grid>
        )}

        {callAccepted && !callEnded && (
          <Grid item xs={12} md={6}>
            <video
              playsInline
              ref={myVideo}
              autoPlay
              className={classes.video}
            />
          </Grid>
        )}

        <Videofooter />
      </Grid>
    </div>
  );
}
export default Uservideocall;