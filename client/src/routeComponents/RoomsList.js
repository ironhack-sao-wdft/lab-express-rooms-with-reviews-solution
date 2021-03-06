import { useState, useEffect } from "react";
import axios from "axios";

import CardRoom from "../components/CardRoom";

function RoomsList() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get("http://localhost:4000/room");

        console.log(response);
        setRooms([...response.data]);
      } catch (err) {
        console.error(err);
      }
    };
    fetchRooms();
  }, []);
  return (
    <div className="d-flex  flex-wrap justify-content-start">
      {rooms.map((room) => (
        <CardRoom key={room._id} room={room} />
      ))}
    </div>
  );
}

export default RoomsList;
