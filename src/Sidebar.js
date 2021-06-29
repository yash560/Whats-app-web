import React, { useEffect, useState } from "react";
import "./sidebar.css";
import db from "./Firebase";
import Sidebarchat from "./Sidebarchat";
import { useStateValue } from "./StateProvider";
import Settings from "./Settings";
import { useParams } from "react-router";

function Sidebar() {
  const { roomId } = useParams();
  const [rooms, setRooms] = useState([]);
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot) =>
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, [roomId]);
  return (
    <div className="sidebarwhole">
      <div className="sidebarHeader">
        <div className="avatardiv">
          <div className="avatarinside">
            <div className="avatarinsidemain">
              <img
                className="userphoto"
                height="50px"
                width="50px"
                alt="."
                src={user?.photoURL}
              />
            </div>
          </div>
        </div>
        <div className="headerRightDiv">
          <div className="refreshDiv">
            <i className="fas fa-redo"></i>
          </div>
          <div className="messageicondiv">
            <Settings />
          </div>
          <div className="menudiv">
            <div className="menuIcon">
              <i className="fas fa-ellipsis-v"></i>
              <div className="menuIcon-Div">
                <p className="home">
                  <a href="https://meraaportfolioo.000webhostapp.com/PorfolioWebsite/style.html">
                    <i class="fas fa-home"></i>Home
                  </a>
                </p>
                <p className="darkmode">
                  <i className="fas fa-adjust"></i> Dark Mode
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="serachmainDiv">
        <div class="serachmainDivinside">
          <div class="searchbutton">
            <div class="searchin">
              <i class="fas fa-search sidebarsearch"></i>
            </div>
          </div>
          <div class="inputfield">
            <div class="inputin">
              <input
                class="searchinput"
                placeholder="Search or Start new chat"
                type="text"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="sidebarchats">
        <Sidebarchat addnewchat />
        {rooms.map((room) => (
          <Sidebarchat key={room.id} id={room.id} name={room.data.name} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
