import Adminpage from './components/UserVideo/Adminpage';
import MainScreen from "./components/MainScreen/MainScreen.component"
import Registration from './components/Forms/Registration';
import {Route,Redirect,Switch} from 'react-router-dom';
import React from 'react';
import Home from './components/Kyathi/Home';
import Mainform from './components/Forms/Mainform';
import firepadRef, {db,userName} from "./server/firebase";
import "./App.css";
import { useEffect } from "react";
import {
  setMainStream,
  addParticipant,
  setUser,
  removeParticipant,
  updateParticipant,
} from "./store/actioncreator";
import { connect } from "react-redux";

function App(props) {
  // const userName=window.localStorage.getItem("username");
  const getUserStream = async () => {
    const localStream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });

    return localStream;
  };
  useEffect(async () => {
    const stream = await getUserStream();
    stream.getVideoTracks()[0].enabled = false;
    props.setMainStream(stream);

    connectedRef.on("value", (snap) => {
      if (snap.val()) {
        const defaultPreference = {
          audio: true,
          video: false,
          screen: false,
        };
        const userStatusRef = participantRef.push({
          preferences: defaultPreference,
        });
        props.setUser({
          [userStatusRef.key]: {  ...defaultPreference },
        });
        userStatusRef.onDisconnect().remove();
      }
    });
  }, []);

  const connectedRef = db.database().ref(".info/connected");
  const participantRef = firepadRef.child("participants");

  const isUserSet = !!props.user;
  const isStreamSet = !!props.stream;

  useEffect(() => {
    if (isStreamSet && isUserSet) {
      participantRef.on("child_added", (snap) => {
        const preferenceUpdateEvent = participantRef
          .child(snap.key)
          .child("preferences");
        preferenceUpdateEvent.on("child_changed", (preferenceSnap) => {
          props.updateParticipant({
            [snap.key]: {
              [preferenceSnap.key]: preferenceSnap.val(),
            },
          });
        });
        const {  preferences = {} } = snap.val();
        props.addParticipant({
          [snap.key]: {
            ...preferences,
          },
        });
      });
      participantRef.on("child_removed", (snap) => {
        props.removeParticipant(snap.key);
      });
    }
  }, [isStreamSet, isUserSet]);

  return (
    <div className="App">
      <Route>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/login" />
          </Route>
          <Route path="/login">
            <Mainform />
          </Route>
          <Route path="/Registration">
            <Registration />
          </Route>
          <Route path="/after">
            <Home />
          </Route>
          <Route path="/:id">            
            <MainScreen />
          </Route>
        </Switch>
      </Route>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    stream: state.mainStream,
    user: state.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setMainStream: (stream) => dispatch(setMainStream(stream)),
    addParticipant: (user) => dispatch(addParticipant(user)),
    setUser: (user) => dispatch(setUser(user)),
    removeParticipant: (userId) => dispatch(removeParticipant(userId)),
    updateParticipant: (user) => dispatch(updateParticipant(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
