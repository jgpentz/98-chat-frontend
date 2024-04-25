import React, { useEffect, useState } from 'react';
import Draggable from 'react-draggable';
import classes from './ChatRoom.module.css';

const ChatRoom = ({ roomName, pos_x, pos_y, onRoomClose }) => {
  const [active, setActive] = useState(false);
  const [zIndex, setZIndex] = useState(1);
    const [inputText, setInputText] = useState("")
    const [chatLog, setChatLog] = useState([])

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

    const sendMsg = async () => {
        let msg = {
            user: "Jesus",
            msg: inputText,
            chatRoom: roomName
        }

        try {
            const response = await fetch("http://localhost:8080/write_msg", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(msg)
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            // Clear the input textarea after sending
            setInputText('');
        } catch (error) {
            console.log(error.message);
        }
    };


    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const fetchData = async () => {
        try {
            const baseUrl = "http://localhost:8080/read_chat";
            const params = {chat_room: roomName};
            const url = new URL(baseUrl);
            url.search = new URLSearchParams(params).toString();

            const response = await fetch(url.toString());
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const jsonData = await response.json();
            setChatLog(jsonData)
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        // Fetch data on component mount
        fetchData();

        // Fetch chat data periodically (every second)
        const interval = setInterval(fetchData, 1000);

        return () => clearInterval(interval);
    }, [roomName]);

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
                            {Array.isArray(chatLog) && chatLog.map((msg, index) => (
                                <p key={index}>
                                    {msg.User && <strong>{msg.User}:</strong>} {/* Render User if not null */}
                                    {msg.Msg && msg.Msg} {/* Render Msg if not null */}
                                </p>
                            ))}
                        </div>
                    </li>
                    </ul>
                    <div className={classes.InputArea}>
                        <textarea 
                            className={classes.InputText} 
                            value={inputText}
                            onChange={handleInputChange}
                            placeholder='Say something...'
                            id="text20" 
                            rows="5"
                        />

                        <button className={classes.Send} onClick={sendMsg}>Send</button>
                    </div>
                </div>

            </div>
        </Draggable>
    );
};
export default ChatRoom
