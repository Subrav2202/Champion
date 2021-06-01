import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Main from "./Pages/Main/Index"
import Register  from "./Pages/Register/register"
import Profile from "./Pages/Admin/Profile/Profile"
import Dashboard from "./Pages/Admin/Dashboard/dashboard"
import Employee from "./Pages/Admin/Employee/employee"
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path="/"><Main/></Route>
        <Route exact path="/register"><Register/></Route>
        <Route exact path="/profile"><Profile/></Route>
        <Route exact path="/dashboard"><Dashboard/></Route>
        <Route exact path="/employee"><Employee/></Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;