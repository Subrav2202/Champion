import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store ,perStore} from "./Storage/Store";
import App from "./App";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={perStore}>
        <App />
      </PersistGate>
    </Provider>

  </React.StrictMode>,
  document.getElementById("root")
);
