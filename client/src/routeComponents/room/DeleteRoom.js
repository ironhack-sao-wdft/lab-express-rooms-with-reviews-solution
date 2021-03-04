import { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

function DeleteRoom() {
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    async function deleteRoom() {
      try {
        const response = await axios.delete(`http://localhost:4000/${process.env.REACT_APP_SERVER_PORT}/${id}`);

        console.log(response);

        history.push("/");
      } catch (err) {
        console.error(err);
      }
    }
    deleteRoom();
  }, [id, history]);

  return <div>Deleting...</div>;
}

export default DeleteRoom;