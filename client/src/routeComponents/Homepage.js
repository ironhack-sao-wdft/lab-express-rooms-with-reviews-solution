import { useState, useEffect } from "react";
import axios from "axios";

import RoomPost from "../components/RoomPost";
import Spinner from "../components/Spinner";
require("dotenv").config();

function Homepage() {
  const [room, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect
  useEffect(() => {
    async function fetchRooms() {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://localhost:${process.env.REACT_APP_SERVER_PORT}/room`
        );

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
              <RoomPost room={element} key={element._id} />
            ))}
        </div>
      )}
    </div>
  );
}

export default Homepage;
