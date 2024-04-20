import { useState } from 'react'
import React from "react"
import "98.css";
import Draggable from 'react-draggable';
import classes from './RoomList.module.css'
import msnLogo from '../../assets/msn_logo.png'


const RoomList = ({ onRoomClick }) => {
  return (
    <Draggable handle=".handle">
        <div className={`window ${classes.RoomList}`}>
            <div className="title-bar handle">
                <div className="title-bar-text">Chat Rooms</div>
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
                    <div 
                        className={classes.RoomBox} 
                        onClick={() => onRoomClick('☕ Coffee')}
                    >
                        <p className={classes.RoomIcon}>☕</p>
                        <p className={classes.RoomName}>Coffee</p>
                    </div>
                    <div 
                        className={classes.RoomBox} 
                        onClick={() => onRoomClick('🧋 Bubble Tea')}
                    >
                        <p className={classes.RoomIcon}>🧋</p>
                        <p className={classes.RoomName}>Bubble Tea</p>
                    </div>
                </li>
                </ul>
            </div>

            <img src={msnLogo} alt="MSN Logo" className={classes.MsnLogo}/>
        </div>
    </Draggable>
  );
};



export default RoomList
