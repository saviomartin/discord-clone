import React from "react";
import { useDispatch } from "react-redux";
import { setChannelInfo } from "./features/appSlice";
import "./SidebarChannel.css";

function SidebarChannel({ id, channelName }) {
    const dispatch = useDispatch();
    return (
        <div className="sidebarChannel"
            onClick={() =>
                dispatch(
                    setChannelInfo({
                        channelId: id,
                        channelName: channelName,
                    })
                )
            }
        >
            <h5><span className="sidebarChannel__hash">#</span>{channelName}</h5>
        </div>
    );
}

export default SidebarChannel;
