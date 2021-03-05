import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Room from "./Room";
import Spinner from "./Spinner";

function Homepage() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRooms() {
      try {
        const response = await axios.get("http://localhost:4000/room");

        setRooms([...response.data]);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    }
    fetchRooms();
  }, []);
  console.log(rooms);

  return (
    <div className="d-flex justify-content-center">
      {loading ? (
        <Spinner className="mt-5" color="text-secondary" />
      ) : (
        <div className="d-flex m-5">
          {rooms.map((element) => (
            <Link to={`/${element._id}`} key={element._id}>
              <Room room={element} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Homepage;
