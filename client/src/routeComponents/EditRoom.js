import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

import RoomForm from "./RoomForm";

function UpdateRoom() {
  const [state, setState] = useState({
    name: "",
    description: "",
    imageUrl: "",
  });

  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/room/${id}`);
        setState({ ...response.data });
      } catch (err) {
        console.error(err);
      }
    };
    fetchRoom();
  }, [id]);

  // A função de atualização de state dos Hooks é destrutiva, ou seja, ela substitui o valor no state atual pelo valor recebido. Pra não perdermos o que já temos no nosso objeto de state, precisamos fazer o spread do state atual
  function handleChange(event) {
    const stateBkp = { ...state };
    stateBkp[event.target.name] = event.target.value;

    setState(stateBkp);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await axios.patch(
        `http://localhost:4000/room/${id}`,
        state
      );
      console.log(response);
      history.push("/");
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

export default UpdateRoom;
