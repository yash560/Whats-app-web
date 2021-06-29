import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./App.css";
import db from "./Firebase";
import firebase from "firebase";
import { useStateValue } from "./StateProvider";

function Chat() {
  const [{ user }, dispatch] = useStateValue();

  const [input, setInput] = useState("");
  const [roomName, setRoomName] = useState("");
  const { roomId } = useParams();
  const [messages, setmessages] = useState([]);

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setmessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);
  const sendmessage = (e) => {
    e.preventDefault();
    db.collection("messages").add({
      message: input,
      name: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    console.log(input);
    setInput(" ");
  };
  return (
    <div className="chatinfo">
      <div className="scrolldiv">
        <div className="headerinfo">
          <div class="avtaroutsidediv">
            <div class="avtar">
              <img
                className="userphoto"
                height="35px"
                width="35px"
                alt="No Img"
                src={user?.photoURL}
              />{" "}
            </div>
          </div>
          <div class="roomDetails">
            <div class="roomnamediv">
              <h5>Welcome</h5>
            </div>
            <div class="membernamediv">
              <p>{user.displayName}</p>
            </div>
          </div>
          <div class="rightMenu">
            <div class="searchdiv">
              <i class="fas fa-search rightsearch"></i>
            </div>
            <div class="menubuttondiv">
              <i className="fas fa-ellipsis-v"></i>
            </div>
          </div>
        </div>

        <div class="chatArea">
          {messages.map((message) => (
            <div
              className={`chatMessage ${
                message.name === user.displayName && "chatUser"
              }`}
            >
              {message.message}
              <span className="timeStamp">
                {new Date(message.timestamp?.toDate()).toUTCString()}
              </span>{" "}
              <p className="chatName">{message.name}</p>{" "}
            </div>
          ))}
        </div>

        <div className="senMessageComponent">
          <div class="attachmentsDiv">
            <div class="smileDiv">
              <i class="far fa-smile"></i>
            </div>
            <div class="attachment">
              <i class="fas fa-paperclip"></i>
            </div>
          </div>

          <div class="typeMessageDiv">
            <form class="typemessege">
              <input
                onChange={(e) => {
                  setInput(e.target.value);
                }}
                value={input}
                placeholder="      Enter Your Message"
                class="actualmessage"
                type="text"
              />
              <button
                className="submitButton"
                onClick={sendmessage}
                type="submit"
              ></button>
            </form>
          </div>

          <div class="voiceDiv">
            <i class="fas fa-microphone"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
