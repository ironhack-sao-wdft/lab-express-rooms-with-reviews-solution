function Room(props) {
  return (
    <div className="card border-0  mb-2" key={props.room._id}>
      <img
        src={props.room.imageUrl}
        className="card-img-top rounded-0"
        alt={props.room.name}
      />
      <div className="card-body">
        <h5 className="card-title">{props.room.name}</h5>
        <p className="card-text">{props.room.description}</p>
      </div>
    </div>
  );
}

export default Room;
