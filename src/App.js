import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Main from "./Pages/Main/Index"
import Register  from "./Pages/Register/register"
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
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;