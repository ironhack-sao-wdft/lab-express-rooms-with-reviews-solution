import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navmenu from "./Navmenu";
import Homepage from "../routeComponents/Homepage.js";
import NewRoom from "../routeComponents/room/NewRoom.js";
import EditRoom from "../routeComponents/room/EditRoom";
import DeleteRoom from "../routeComponents/room/DeleteRoom";
import RoomDetail from "../routeComponents/room/RoomDetail";

function App() {
  return (
    <BrowserRouter>
      <Navmenu />
      <div>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/new-room" component={NewRoom} />
        <Route path="/room/edit/:id" component={EditRoom} />
        <Route path="/room/delete/:id" component={DeleteRoom} />
        <Route path="/room/:id" component={RoomDetail} />
      </div>
    </BrowserRouter>
  );
}

export default App;
