import React from "react";
import {
  Switch,
  Router,
  Route,
  BrowserRouter,
  RouteComponentProps,
  withRouter,
} from "react-router-dom";
import "./styles/index.scss";

import Login from "src/pages/login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/login">
          <Login />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
