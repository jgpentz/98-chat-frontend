import { useState } from 'react'
import React from "react"
import "98.css";
import Draggable from 'react-draggable';
import classes from './ChatRoom.module.css'


const ChatRoom = ({ roomName }) => {
    return (
        <Draggable handle=".handle">
            <div className={`window ${classes.ChatRoom}`}>
                <div className="title-bar handle">
                    <div className="title-bar-text">{roomName}</div>
                    <div className="title-bar-controls">
                        <button aria-label="Minimize" />
                        <button aria-label="Maximize" />
                        <button aria-label="Close" />
                    </div>
                </div>

                <div className="window-body">
                    <p className={classes.Header}>Room List:</p>
                    <ul className={`tree-view ${classes.List}`}>
                    <li>
                        <div 
                            className={classes.RoomBox} 
                            onClick={() => onRoomClick('🍃 sencha')}
                        >
                            <p className={classes.RoomIcon}>🍃</p>
                            <p className={classes.RoomName}>Sencha</p>
                        </div>
                    </li>
                    </ul>
                </div>

            </div>
        </Draggable>
    );
};
export default ChatRoom
