import React from "react";
import { auth, provider } from "./Firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";
import "./logi.css";

function Logi() {
  const [{}, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="LoginDiv">
      <div className="LoginInside">
        <img
          className="whatsappimg"
          src="https://i.pinimg.com/originals/f7/5d/94/f75d94874d855a7fcfcc922d89ac5e80.png"
        />
        <button className="signin" onClick={signIn}>
          Sign in{" "}
        </button>
      </div>
    </div>
  );
}

export default Logi;
