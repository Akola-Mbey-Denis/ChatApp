import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
 import {
  MDBIcon,MDBBadge} from "mdbreact";
 
import "./chat.css"; 
const Friend = ({
  friend: {username,email  },onClickFriend,senderId,receiverId  
}) => (
<div>
 
  <button  style={{margin:20 ,backgroundColor:"red"}}onClick={()=>{onClickFriend(senderId,receiverId)}}>
    <div style={{ fontSize: 15 }}>
      <strong>{username}</strong>
       
    </div>
    <div>
      
       { receiverId? (
        <MDBBadge color="danger" className="float-right">
          {email}
        </MDBBadge>
      ) : (
        <span className="text-muted float-right">
          <MDBIcon icon="reply" aria-hidden="true" />
        </span>
      )}
    </div>
  </button>
  </div>
);
export default Friend;