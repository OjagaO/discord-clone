import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import SettingsIcon from "@mui/icons-material/Settings";
import AddIcon from "@mui/icons-material/Add";
import "./Sidebar.scss";
import SidebarChannels from "./SidebarChannels";

const Accordion = () => {
    return (
        <div className="sidebar_right">
            <div className="right_header">
                <h3>Channelタイトル</h3>
                <ExpandMoreIcon />
            </div>

            <div className="channel_box">
                <div className="contents_box">
                    <button className="contents_title">
                        <ExpandMoreIcon />
                        <h3>インフォメーション</h3>
                    </button>
                    <AddIcon />
                </div>
                <SidebarChannels />
                <SidebarChannels />
                <SidebarChannels />
            </div>
            <div className="channel_box">
                <div className="contents_box">
                    <button className="contents_title">
                        <ExpandMoreIcon />
                        <h3>テキストチャンネル</h3>
                    </button>
                    <AddIcon />
                </div>
                <SidebarChannels />
            </div>
            <div className="channel_box">
                <div className="contents_box">
                    <button className="contents_title">
                        <ExpandMoreIcon />
                        <h3>ボイスチャンネル</h3>
                    </button>
                    <AddIcon />
                </div>
                <SidebarChannels />
            </div>

            <div className="right_footer">
                <div className="footer_myarea">
                    <p className="server_icon">
                        <img src="/images/image.man.png" alt="" />
                    </p>
                    <div className="right_myinfo">
                      <p className="user_name">yamadar</p>
                      <p>#202020</p>
                    </div>
                </div>
                <div>
                    <KeyboardVoiceIcon />
                    <HeadphonesIcon />
                    <SettingsIcon />
                </div>
            </div>
        </div>
    );
};

export default Accordion;
