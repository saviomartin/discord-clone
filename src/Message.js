import { Avatar } from "@material-ui/core";
import React from "react";
import "./Message.css";

function Message({ user, timestamp, message }) {
  return (
    <div className="message">
      <Avatar src={user.photo} />
      <div className="message__info">
        <h5>
          {user.displayName}
          <span className="message__timestamp">
            {new Date(timestamp?.toDate()).toUTCString()}
          </span>
        </h5>
        <h4>{message}</h4>
      </div>
    </div>
  );
}

export default Message;
