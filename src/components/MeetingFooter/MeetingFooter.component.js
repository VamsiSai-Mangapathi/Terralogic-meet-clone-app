import React, { useEffect, useState,useRef} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import firepadRef from "../../server/firebase";
import {
  faMicrophone,
  faVideo,
  faDesktop,
  faVideoSlash,
  faMicrophoneSlash,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import ReactTooltip from "react-tooltip";
import "./MeetingFooter.css";
const MeetingFooter = (props) => {
  // const participantRef =useRef(firepadRef.child("participants"));
  // const participantRef = firepadRef.child("participants");
  const [streamState, setStreamState] = useState({
    mic: true,
    video: false,
    screen: false,
  });
  const micClick = () => {
    setStreamState((currentState) => {
      return {
        ...currentState,
        mic: !currentState.mic,
      };
    });
  };

  const onVideoClick = () => {
    setStreamState((currentState) => {
      return {
        ...currentState,
        video: !currentState.video,
      };
    });
  };
  // const oncallend=()=>{
  //   participantRef.current.destroy();
  // }
  const onScreenClick = () => {
    props.onScreenClick(setScreenState);
  };

  const setScreenState = () => {
    setStreamState((currentState) => {
      return {
        ...currentState,
        screen: !currentState.screen,
      };
    });
  };
  useEffect(() => {
    props.onMicClick(streamState.mic);
  }, [streamState.mic]);
  useEffect(() => {
    props.onVideoClick(streamState.video);
  }, [streamState.video]);
  return (
    <div className="meeting-footer">
      <div
        className={"meeting-icons " + (!streamState.mic ? "active" : "")}
        data-tip={streamState.mic ? "Mute Audio" : "Unmute Audio"}
        onClick={micClick}
      >
        <FontAwesomeIcon
          icon={!streamState.mic ? faMicrophoneSlash : faMicrophone}
          title="Mute"
        />
      </div>
      <div
        className={"meeting-icons " + (!streamState.mic ? "active" : "")}
        data-tip={streamState.mic ? "Call End" : ""}
        // onClick={oncallend}
      >
        <FontAwesomeIcon
          icon={!streamState.mic ? faPhone : faPhone}
          title="Mute"
        />
      </div>
      <div
        className={"meeting-icons " + (!streamState.video ? "active" : "")}
        data-tip={streamState.video ? "Hide Video" : "Show Video"}
        onClick={onVideoClick}
      >
        <FontAwesomeIcon icon={!streamState.video ? faVideoSlash : faVideo} />
      </div>
      <div
        className="meeting-icons"
        // data-tip="Share Screen"
        data-tip={!streamState.screen ? "Share Screen" : "Stop Sharing"}
        onClick={onScreenClick}
        // onClick={setScreenState}
        disabled={streamState.screen}
      >
        <FontAwesomeIcon icon={faDesktop} />
      </div>
      <ReactTooltip />
    </div>
  );
};

export default MeetingFooter;
