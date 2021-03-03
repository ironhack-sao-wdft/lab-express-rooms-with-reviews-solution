import { useState, useEffect } from "react";
import axios from "axios";

import PostRoom from "../components/PostRoom";
import Spinner from "../components/Spinner";

function Timeline() {
  const [rooms, setRooms] = useState([]);
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
          {rooms.map((e) => (
            <PostRoom post={e} key={rooms._id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Timeline;
