import { useState } from 'react'
import React from "react"
import "98.css";
import RoomList from './Components/RoomList/RoomList';
import ChatRoom from './Components/ChatRoom/ChatRoom';

const App = () => {
    const [activeRooms, setActiveRooms] = useState([]);

    const positions = {
        "🍃 sencha": [50, 400],
        "☕ Coffee": [400, 300],
        "🧋 Bubble Tea": [300, 500],

    }

    const handleRoomClose = (roomName) => {
        // Remove the closed room from the activeRooms array
        // setActiveRooms((prevRooms))
        setActiveRooms((prevRooms) => prevRooms.filter((name) => name != roomName));
    }

    const handleRoomClick = (roomName) => {
        if (!activeRooms.includes(roomName)) {
            // Add the clicked room to the activeRooms array
            setActiveRooms((prevRooms) => [...prevRooms, roomName]);
        }
    };

    return (
        <div>
            <RoomList onRoomClick={handleRoomClick} />
            {/* Render active ChatRooms based on the state */}
            {activeRooms.map((roomName) => (
                <ChatRoom 
                key={roomName} 
                roomName={roomName} 
                pos_x={positions[roomName][0]}
                pos_y={positions[roomName][1]}
                onRoomClose={handleRoomClose} 
                />
            ))}
        </div>
    );
};



export default App
