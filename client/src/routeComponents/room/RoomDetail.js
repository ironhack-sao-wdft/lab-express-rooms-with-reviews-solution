import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

import ConfirmationModal from "../../components/ConfirmationModal";

function PetDetail(props) {
  const [roomDetails, setRoomDetails] = useState({
    name: "",
    imageUrl: "",
    description: "",
  });

  const [showModal, setShowModal] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    async function fetchRoomDetails() {
      const response = await axios.get(`http://localhost:4000/room/${id}`);
      console.log(response.data);
      setRoomDetails({ ...response.data });
    }
    fetchRoomDetails();
  }, [id]);

  return (
    <div className="ml-3 mt-4">
      <div className="row">
        <div className="d-flex flex-column m-5">
          <div>
            <h1>{roomDetails.name}</h1>
          </div>
          <div>
            <img alt={roomDetails.name} src={roomDetails.imageUrl} />
          </div>
        </div>
        <div>
          <Link to={`/room/edit/${id}`} className="btn btn-primary">
            Edit
          </Link>
          <button onClick={() => setShowModal(true)} className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
      <ConfirmationModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        action={`/room/delete/${id}`}
      />
    </div>
  );
}

export default PetDetail;