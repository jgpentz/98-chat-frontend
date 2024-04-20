import React, { useState } from 'react';
import Draggable from 'react-draggable';
import classes from './ChatRoom.module.css';

const ChatRoom = ({ roomName, pos_x, pos_y, onRoomClose }) => {
  const [active, setActive] = useState(false);
  const [zIndex, setZIndex] = useState(1);

  const makeActiveWindow = () => {
    // Toggle active state
    setActive(true);

    // Find all active chat rooms and get their zIndex values
    const activeWindows = document.querySelectorAll('.window');
    const zIndexValues = Array.from(activeWindows).map((window) => {
        const zIndex = parseInt(window.style.zIndex || 0, 10);
        return isNaN(zIndex) ? 0 : zIndex;
    });

    // Find the maximum zIndex value among all active windows
    const maxZIndex = Math.max(...zIndexValues);

    // Set zIndex for the current chat room to be above the maximum zIndex
    setZIndex(maxZIndex + 1);
  };

  const handleClose = () => {
    setActive(false);
    // Implement your close logic here
    onRoomClose(roomName);
  };

  const roomLocation = {
    left: `${pos_x}px`,
    top: `${pos_y}px`,
    zIndex: active ? zIndex : 1, // Use active state and zIndex to control stacking
  };

  return (
        <Draggable handle=".handle" onMouseDown={makeActiveWindow}>
            <div style={roomLocation} className={`window ${classes.ChatRoom}`}>
                <div className={`title-bar handle ${active ? classes.Active : ''}`}>
                    <div className="title-bar-text">{roomName}</div>
                    <div className="title-bar-controls">
                        <button aria-label="Minimize" />
                        <button aria-label="Maximize" />
                        <button aria-label="Close" onClick={handleClose} />
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
