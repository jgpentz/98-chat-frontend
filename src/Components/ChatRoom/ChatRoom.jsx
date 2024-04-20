import { useState } from 'react'
import React from "react"
import "98.css";
import Draggable from 'react-draggable';
import classes from './ChatRoom.module.css'


const ChatRoom = ({ roomName, onRoomClose }) => {
    return (
        <Draggable handle=".handle">
            <div className={`window ${classes.ChatRoom}`}>
                <div className="title-bar handle">
                    <div className="title-bar-text">{roomName}</div>
                    <div className="title-bar-controls">
                        <button aria-label="Minimize" />
                        <button aria-label="Maximize" />
                        <button aria-label="Close" onClick={() => onRoomClose(roomName)}/>
                    </div>
                </div>

                <div className="window-body">
                    <p className={classes.Header}>Chat:</p>
                    <ul className={`tree-view ${classes.List}`}>
                    <li>
                        <div 
                            className={classes.ChatBox} 
                            onClick={() => onRoomClick(roomName)}
                        >
                            <p className={classes.RoomIcon}>{roomName}</p>
                            <p className={classes.RoomIcon}>{roomName}</p>
                            <p className={classes.RoomIcon}>{roomName}</p>
                            <p className={classes.RoomIcon}>{roomName}</p>
                            <p className={classes.RoomIcon}>{roomName}</p>
                            <p className={classes.RoomIcon}>{roomName}</p>
                            <p className={classes.RoomIcon}>{roomName}</p>
                            <p className={classes.RoomIcon}>{roomName}</p>
                            <p className={classes.RoomIcon}>{roomName}</p>
                            <p className={classes.RoomIcon}>{roomName}</p>
                            <p className={classes.RoomIcon}>{roomName}</p>
                            <p className={classes.RoomIcon}>{roomName}</p>
                            <p className={classes.RoomIcon}>{roomName}</p>
                        </div>
                    </li>
                    </ul>
                    <div className={classes.InputArea}>
                        <textarea className={classes.InputText} id="text20" rows="5"></textarea>
                        <button className={classes.Send}>Send</button>
                    </div>
                </div>

            </div>
        </Draggable>
    );
};
export default ChatRoom
