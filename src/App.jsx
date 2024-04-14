import { useState } from 'react'
import React from "react"
import "98.css";
import Draggable from 'react-draggable';
import RoomList from './Components/RoomList/RoomList';
import ChatRoom from './Components/ChatRoom/ChatRoom';

const App = () => {
    const [activeRooms, setActiveRooms] = useState([]);

    const handleRoomClose = (roomName) => {
        // Remove the closed room from the activeRooms array
        // setActiveRooms((prevRooms))
        setActiveRooms((prevRooms) => prevRooms.filter((name) => name != roomName));
    }

    const handleRoomClick = (roomName) => {
        // Add the clicked room to the activeRooms array
        setActiveRooms((prevRooms) => [...prevRooms, roomName]);
    };

    return (
        <div>
            <RoomList onRoomClick={handleRoomClick} />
            {/* Render active ChatRooms based on the state */}
            {activeRooms.map((roomName) => (
                <ChatRoom 
                    key={roomName} 
                    roomName={roomName} 
                    onRoomClose={handleRoomClose} 
                />
            ))}
        </div>
    );
};



export default App
