import { Link } from "react-router-dom";

function CardRoom(props) {
  return (
    <div className="card m-3" style={{ width: "18rem" }}>
      <img
        className="card-img-top"
        src={props.room.imageUrl}
        alt={props.room.name}
      />
      <div className="card-body">
        <h5 className="card-title">{props.room.name}</h5>
        <p className="card-text">{props.room.description}</p>
        <Link to={`/room:${props.room._id}`} className="btn btn-primary">
          View
        </Link>
      </div>
    </div>
  );
}

export default CardRoom;
