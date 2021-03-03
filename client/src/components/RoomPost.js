function RoomPost(props) {
  return (
    <div className="card border-0  mb-2" key={props.room._id}>
      <img
        src={props.room.imageUrl}
        className="card-img-top rounded-0"
        alt={props.room.name}
      />
      <div className="card-body">
        <span>{props.room.name}</span>
        <p>{props.room.description}</p>
      </div>
    </div>
  );
}

export default RoomPost;
