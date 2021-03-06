import TextInput from "../components/TextInput";
import TextAreaInput from "../components/TextAreaInput";

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
        label="Room Image"
        type="text"
        id="roomFormImage"
        name="imageUrl"
        value={props.state.imageUrl}
        onChange={props.onChange}
      />

      <TextAreaInput
        label="Description"
        type="text"
        id="roomFormDescription"
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
