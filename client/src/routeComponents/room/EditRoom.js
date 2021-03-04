import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import RoomForm from "./RoomForm";

function EditRoom() {
  const [state, setState] = useState({
    name: "",
    description: "",
    picture: "",
  });

  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `http://localhost:${process.env.REACT_APP_SERVER_PORT}/room`
        );

        setState({ ...response.data });
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, [id]);

  function handleChange(event) {
    const stateBkp = { ...state };
    stateBkp[event.target.name] = event.target.value;
    setState(stateBkp);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await axios.patch(
        `http://localhost:${process.env.REACT_APP_SERVER_PORT}/room/${id}`,
        {
          ...state,
        }
      );
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="m-2">
      <h1>Edit Room</h1>
      <RoomForm
        state={state}
        onChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default EditRoom;
