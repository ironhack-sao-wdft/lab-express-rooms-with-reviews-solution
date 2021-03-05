import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import RoomsList from "./routeComponents/RoomsList";
import NewRoom from "./routeComponents/NewRoom";
import EditRoom from "./routeComponents/EditRoom";
import NavMenu from "./components/NavMenu";

function App() {
  return (
    <>
      <NavMenu />
      <BrowserRouter>
        <Route exact path="/" component={RoomsList} />
        <Route exact path="/room/new" component={NewRoom} />
        <Route exact path="/room/edit/:id" component={EditRoom} />
      </BrowserRouter>
    </>
  );
}

export default App;
