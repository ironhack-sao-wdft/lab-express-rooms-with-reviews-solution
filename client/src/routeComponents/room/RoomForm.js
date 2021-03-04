import TextInput from "../../components/TextInput";

function RoomForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <TextInput
        label="Name"
        type="text"
        id="RoomFormName"
        name="name"
        value={props.state.name}
        onChange={props.onChange}
      />

      <TextInput
        label="Picture"
        type="text"
        id="RoomFormImageUrl"
        name="picture"
        value={props.state.imageUrl}
        onChange={props.onChange}
      />

      <TextInput
        label="Description"
        type="text"
        id="RoomFormDescpription"
        name="description"
        value={props.state.description}
        onChange={props.onChange}
      />

      <button type="submit" className="btn btn-primary">
        Save
      </button>
    </form>
  );
}

export default RoomForm;
