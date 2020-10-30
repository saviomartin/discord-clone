import React from "react";
import "./ChatHeader.css";
import NotificationsIcon from "@material-ui/icons/Notifications";
import EditLocationRoundedIcon from "@material-ui/icons/EditLocationRounded";
import PeopleIcon from "@material-ui/icons/People";
import { IconButton, Input } from "@material-ui/core";
import HelpIcon from "@material-ui/icons/Help";
import InboxIcon from "@material-ui/icons/Inbox";
import SearchIcon from "@material-ui/icons/Search";

function ChatHeader({ channelName }) {
  return (
    <div className="chatHeader">
      <div className="chatHeader__left">
        <h4>
          <span className="chatHeader__hash">#</span>
          {channelName}
        </h4>
      </div>
      <div className="chatHeader__right">
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <IconButton>
          <EditLocationRoundedIcon />
        </IconButton>
        <IconButton>
          <PeopleIcon />
        </IconButton>

        <div className="chatHeader__search">
          <Input placeholder="search" className="chatHeader__search" />
          <SearchIcon />
        </div>

        <IconButton>
          <InboxIcon />
        </IconButton>
        <IconButton>
          <HelpIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default ChatHeader;
