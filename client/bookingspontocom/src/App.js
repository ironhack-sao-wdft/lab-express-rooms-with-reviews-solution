import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import NewRoom from "./components/NewRoom";
import RoomDetail from "./components/RoomDetail";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div>
        <Route exact path="/new-room" component={NewRoom} />
        <Route exact path="/" component={Homepage} />
        <Route exact path="/:id" component={RoomDetail} />
      </div>
    </BrowserRouter>
  );
}

export default App;
