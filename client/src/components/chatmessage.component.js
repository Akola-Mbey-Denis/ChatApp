import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import moment from "moment";
import {
  MDBCard,
  MDBCardBody,  
} from "mdbreact";
 
import "./chat.css";
const ChatMessage = ({
  message: { sender_name, message, createdAt, sender_id, receiver_id },
  currentUserId,
}) => (
  <li className="chat-message d-flex justify-content-between mb-4">
    <MDBCard>
      <MDBCardBody>
        {(sender_id === currentUserId &&
          receiver_id !==
            currentUserId)?(
              <div style={{ backgroundColor: "#eeee" }}>
                <strong className="primary-font">{sender_name}</strong>
                <small className="pull-right text-muted">
                  <p className="mb-0">{message}</p>
                  <p className="mb-0">
                    {moment(createdAt).format("dddd Do MMMM, YYYY hh:mm")}
                  </p>
                </small>
              </div>
            ):(
          <div>
            <strong className="primary-font">{sender_name}</strong>
            <small className="pull-right text-muted">
              <p className="mb-0">{message}</p>
              <p className="mb-0">
                {moment(createdAt).format("dddd Do MMMM, YYYY hh mm")}
              </p>
            </small>
          </div>
        )}

        <hr />
      </MDBCardBody>
    </MDBCard>
  </li>
);
export default ChatMessage;