import React from 'react'
import db from './Firebase';
import './Sidebarchat.css';
import {Link} from 'react-router-dom';

function Sidebarchat({id , name, addnewchat}) {
  
    const createChat = ()=>{
         console.log("hey")
         const roomName = prompt("please enter A room Name to continue");

  
    if(roomName){
        db.collection('rooms').add({
            name:roomName,
        });
    }
}
    return !addnewchat ?(<>
     
       <Link to={`/rooms/${id}`}>
           
           
                <div className="chatmain">
                <div className="avatar">
                <div className="avatarinsideroom"><i className="fas fa-user-tie"></i></div>
                </div>
                <div className="infoDiv">
                                    <div className="infoinside">
                                        <div className="roomname">
                                            <p className="room"> {name}</p>
                                        </div>
                                        <div className="lastchat">
                                            <p> Chat</p>
                                        </div>
                                    </div>
                </div>
                </div>
       </Link>
    </>) : (
        <div onClick={createChat} className="chatmain">
        <div className="addDiv">
            <h2 ><span className="add_new">Add new Chat</span> <i class="fas fa-plus"></i></h2>
        </div>

        </div>
    )
}

export default Sidebarchat;
