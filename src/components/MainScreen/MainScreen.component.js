import React, { useRef, useEffect,useState } from "react";
import MeetingFooter from "../MeetingFooter/MeetingFooter.component";
import Participants from "../Participants/Participants.component";
import "./MainScreen.css";
import { connect } from "react-redux";
import { setMainStream, updateUser } from "../../store/actioncreator";
import Join from "./../Kyathi/Join";
import firepadRef from "../../server/firebase";
import {useHistory} from "react-router-dom";
import Welcome from "./Welcome";
const MainScreen = (props) => {
  const isAdmin = window.location.hash === '#init' ? true : false;
  const copy= `${window.location.origin}${`/login/?id=`}${firepadRef.key}`;
  const[join,setJoin]=useState();
  window.localStorage.setItem("url",copy);
  const history=useHistory();
  // const [welcome,setwelcome]=useState(window.localStorage.getItem("refresh"));
  useEffect(()=>{
    
    if(isAdmin){
     setJoin(true);
    }
    // else{
    //   setwelcome(true);
    // }
  },[]);

  // history.go(1);
  // function reloadPage() {
  //   // The last "domLoading" Time //
  //   var currentDocumentTimestamp =
  //   new Date(performance.timing.domLoading).getTime();
  //   // Current Time //
  //   var now = Date.now();
  //   // Ten Seconds //
  //   var tenSec = 10 * 1000;
  //   // Plus Ten Seconds //
  //   var plusTenSec = currentDocumentTimestamp + tenSec;
  //   if (now > plusTenSec) {
  //   window.location.reload();
  //   } else {}
  // }
  // reloadPage();
  const closejoinHandler=()=>{
    setJoin(false);
  }

  // const closewelcomehandler=()=>{
  //   window.location.reload(true);
  //   window.localStorage.setItem("refresh",false);
  //   setwelcome(false);
  // }
  const participantRef = useRef(props.participants);

  const onMicClick = (micEnabled) => {
    if (props.stream) {
      props.stream.getAudioTracks()[0].enabled = micEnabled;
      props.updateUser({ audio: micEnabled });
    }
  };
  const onVideoClick = (videoEnabled) => {
    if (props.stream) {
      props.stream.getVideoTracks()[0].enabled = videoEnabled;
      props.updateUser({ video: videoEnabled });
    }
  };

  useEffect(() => {
    participantRef.current = props.participants;
  }, [props.participants]);

  const updateStream = (stream) => {
    for (let key in participantRef.current) {
      const sender = participantRef.current[key];
      if (sender.currentUser) continue;
      const peerConnection = sender.peerConnection
        .getSenders()
        .find((s) => (s.track ? s.track.kind === "video" : false));
      peerConnection.replaceTrack(stream.getVideoTracks()[0]);
    }
    props.setMainStream(stream);
  };

  const onScreenShareEnd = async () => {
    const localStream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });

    localStream.getVideoTracks()[0].enabled = Object.values(
      props.currentUser
    )[0].video;

    updateStream(localStream);

    props.updateUser({ screen: false });
  };

  const onScreenClick = async () => {
    let mediaStream;
    if (navigator.getDisplayMedia) {
      mediaStream = await navigator.getDisplayMedia({ video: true });
    } else if (navigator.mediaDevices.getDisplayMedia) {
      mediaStream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
      });
    } else {
      mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { mediaSource: "screen" },
      });
    }

    mediaStream.getVideoTracks()[0].onended = onScreenShareEnd;

    updateStream(mediaStream);

    props.updateUser({ screen: true });
  };
  return (
    <div className="wrapper">
      <div className="main-screen">
        {join && <Join onclose={closejoinHandler} url={copy} />}
        {/* {welcome && <Welcome onclosewelcome={closewelcomehandler} /> } */}
        <Participants />
      </div>

      <div className="footer">
        <MeetingFooter
          onScreenClickend={onScreenShareEnd}
          onScreenClick={onScreenClick}
          onMicClick={onMicClick}
          onVideoClick={onVideoClick}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    stream: state.mainStream,
    participants: state.participants,
    currentUser: state.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setMainStream: (stream) => dispatch(setMainStream(stream)),
    updateUser: (user) => dispatch(updateUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
