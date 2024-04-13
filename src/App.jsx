import { useState } from 'react'
import React from "react"
import "98.css";
import Draggable from 'react-draggable';
import RoomList from './Components/RoomList/RoomList';
import ChatRoom from './Components/ChatRoom/ChatRoom';

const App = () => {
    const [activeRooms, setActiveRooms] = useState([]);

    const handleRoomClick = (roomName) => {
        // Add the clicked room to the activeRooms array
        setActiveRooms((prevRooms) => [...prevRooms, roomName]);
    };

    return (
        <div>
            <RoomList onRoomClick={handleRoomClick} />
            {/* Render active ChatRooms based on the state */}
            {activeRooms.map((roomName) => (
                <ChatRoom key={roomName} roomName={roomName} />
            ))}
        </div>
    );
};



export default App
