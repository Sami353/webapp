import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css"
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import UserList from "./pages/userList/UserList";

function App() {
  return (
    // <Router>
    //   <Topbar />
    //   <div className="container">
    //     <Sidebar />
    //     <Switch>
    //       <Route exact path="/">
    //         <Home />
    //       </Route>
    //       <Route path="/users">
    //         <UserList />
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Home />
      </div>

    </div>
  );
}

export default App;
