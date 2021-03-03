import { useState, useEffect } from "react";
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

  //   return (
  //     <div>
  //       {rooms.map((element) => (
  //         <Room room={element} key={element._id} />
  //       ))}
  //     </div>
  //   );

  return (
    <div className="d-flex justify-content-center">
      {loading ? (
        <Spinner className="mt-5" color="text-secondary" />
      ) : (
        <div>
          {rooms.map((element) => (
            <Room room={element} key={element._id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Homepage;
