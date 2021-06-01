import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Main from "./Pages/Main/Index"
import Register  from "./Pages/Register/register"
import Profile from "./Pages/Profile/Profile"
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Dashboard from './Pages/Dashboard/Index'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path="/"><Main/></Route>
        <Route exact path="/register"><Register/></Route>
          <Route exact path="/profile"><Profile /></Route>
          <Route exact path="/dashboard"><Dashboard/></Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;