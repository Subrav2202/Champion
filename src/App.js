import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Main from "./Pages/Main/Index"
import Register  from "./Pages/Register/register"
import Profile from "./Pages/Components/Profile/Profile"
import Dashboard from "./Pages/Components/Dashboard/dashboard"
import Employee from "./Pages/Components/Employee/employee"
import Roles from './Pages//Components/Roles/RolesMain'
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
        <Route exact path="/roles"><Roles/></Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;