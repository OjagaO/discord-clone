import React, { useRef } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";

const SidebarRight = () => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const onClickEvent = () => {
        if (!buttonRef.current) return; // ④nullでないことを確かめる
        let buttonInfo = buttonRef.current; // ⑤入力値取得
        buttonInfo.classList.toggle("active");
    };
    return (
        <div className="sidebar_right">
            <div className="channel_box">
                <div className="contents_box">
                    <button className="contents_title" type="button" onClick={onClickEvent} ref={buttonRef}>
                        <ExpandMoreIcon />
                        <h3>インフォメーション</h3>
                    </button>
                    <AddIcon />
                </div>
                <ul>
                    <li>話そう</li>
                    <li>話すな</li>
                    <li>聞くな</li>
                </ul>
            </div>
            <div className="channel_box">
                <div className="contents_box">
                    <button className="contents_title" type="button" onClick={onClickEvent} ref={buttonRef}>
                        <ExpandMoreIcon />
                        <h3>テキストチャンネル</h3>
                    </button>
                    <AddIcon />
                </div>
            </div>
            <div className="channel_box">
                <div className="contents_box">
                    <button className="contents_title" type="button" onClick={onClickEvent} ref={buttonRef}>
                        <ExpandMoreIcon />
                        <h3>ボイスチャンネル</h3>
                    </button>
                    <AddIcon />
                </div>
            </div>
        </div>
    );
};

export default SidebarRight;
