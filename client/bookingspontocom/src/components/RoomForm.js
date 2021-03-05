import TextInput from "./TextInput";

function RoomForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <TextInput
        label="Name"
        type="text"
        id="roomFormName"
        name="name"
        value={props.state.name}
        onChange={props.onChange}
      />
      <TextInput
        label="Description"
        type="text"
        id="roomFormName"
        name="name"
        value={props.state.name}
        onChange={props.onChange}
      />
    </form>
  );
}

export default RoomForm;
