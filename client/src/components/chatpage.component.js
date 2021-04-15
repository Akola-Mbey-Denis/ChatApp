import React, {Component } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./chat.css";
import ChatMessage from "./chatmessage.component";
import Friend from "./friendmessage.component"; 
 
import {
  MDBCard,
  MDBCardBody,
  MDBRow,
  MDBCol,
  MDBListGroup,
  MDBBtn,
} from "mdbreact";
const axios = require("axios");
class ChatPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messageSenderId: "",
      textArea: " ",
      messageReceiverId: "",
      userId: this.props.userId.substring(6, this.props.userId.length),
      friends: [],
      messages: [],
    };
    this.onChangeText = this.onChangeText.bind(this);
  }
  async callApi() {
    //this method fetches the friends of the current user from the database
     await axios
      .get("https://aqueous-taiga-66714.herokuapp.com/api/v1/users")
      .then((response) => {
        
        var currentuser_id = this.props.userId.substring(
          6,
          this.props.userId.length
        );

        let friendsData = response.data;
      var myFriends = friendsData.filter(
          (element) => element.id !== currentuser_id
        );
        console.log("My friends are ::", myFriends);

     this.setState({friends:myFriends});
        console.log("The friends state variable is ::", this.state.friends); //will always be bound to the this context
      });
  }

  onClickFriend(sender_id, receiver_id) {
    //this function fetches the chat message between two users/friends
    console.log("Receiver is :::", receiver_id);
    axios
      .get(
        "https://aqueous-taiga-66714.herokuapp.com/api/v1/messages/" +
          sender_id +
          "/" +
          receiver_id +
          "/"
      )
      .then((response) => {
        this.setState({
          messages: response.data,
          messageReceiverId: receiver_id,
          messageSenderId: sender_id,
        });
        console.log("The messages state variable is ::", this.state.messages); //will always be bound to the this context
      });
  }
  onChangeText(event) {
    console.log("THe message is ::", event.target.value);
    this.setState({
      messageToSend: event.target.value,
      textArea: event.target.value,
    });
  }
  // getUserId(event)

  onSendPress() {
    //this function is activated when a user wants to send a message to another user
    this.setState({ textArea: " " });

    var data = {
      sender: this.state.messageSenderId,
      receiver: this.state.messageReceiverId,
      message: this.state.messageToSend,
    };

    axios({
      method: "post",
      url: "https://aqueous-taiga-66714.herokuapp.com/api/v1/messages",
      data: data,
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then(function (response) {
        this.onClickFriend();
        console.log(response);

        console.log(this.state.textArea);
      })
      .catch(function (response) {
        //handle error
        // console.log(response);
      });
  }

  componentDidMount() {
    this.callApi();
  }
  

  render() {
    return (
      <MDBCard>
        <MDBCardBody>
          <MDBRow className="px-lg-2 px-2">
            <MDBCol md="6" xl="4" className="px-0 mb-2 mb-md-0">
              <h5 className="font-weight-bold mb-3 text-lg-left">Member</h5>
              <h6 className="font-weight-bold mb-3 text-lg-left">Current user Email:{this.props.userEmail}</h6>
              <div className="white z-depth-1 p-3">
                <MDBListGroup className="friend-list">
                  {this.state.friends.map((friend) => (
                    <Friend
                      key={friend.id}
                      friend={friend}
                      senderId={this.state.userId}
                      receiverId={friend.id}
                      onClickFriend={this.onClickFriend.bind(this)}
                    />
                  ))}
                </MDBListGroup>
              </div>
            </MDBCol>
            <MDBCol md="6" xl="8" className="pl-md-3 px-lg-auto mt-2 mt-md-0">
              <MDBRow>
                <MDBListGroup className="list-unstyled pl-3">
                  {this.state.messages.map((message) => (
                    <ChatMessage key={message.id} message={message}  currentUserId={this.state.userId}/>
                  ))}
                  <li>
                    <div className="form-group basic-textarea">
                      <textarea
                        className="form-control pl-2 my-0"
                        onChange={this.onChangeText}
                        value={this.state.textArea}
                        id="exampleFormControlTextarea2"
                        rows="2"
                        placeholder="Type your message here..."
                      />

                      <MDBBtn
                        onClick={this.onSendPress.bind(this)}
                        color="info"
                        rounded
                        size="sm"
                        className="float-right mt-4"
                      >
                        Send
                      </MDBBtn>
                    </div>
                  </li>
                </MDBListGroup>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    );
  }
}
export default ChatPage;