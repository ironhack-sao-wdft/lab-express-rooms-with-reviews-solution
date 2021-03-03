import { useState, useEffect } from "react";
import axios from "axios";

import RoomPost from "../components/RoomPost";
import Spinner from "../components/Spinner";

function Homepage() {
  const [room, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect
  useEffect(() => {
    async function fetchRooms() {
      try {
        const response = await axios.get("http://localhost:4000/room");

        console.log(response);

        setRooms([...response.data]);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    }
    fetchRooms();
  }, []);

  return (
    <div className="d-flex justify-content-center">
      {loading ? (
        <Spinner className="mt-5" color="text-secondary" />
      ) : (
        <div>
          {room.map((element) => (
            <RoomPost room={element} key={room._id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Homepage;
