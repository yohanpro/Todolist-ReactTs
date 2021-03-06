import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Login from "src/pages/login";
import Home from "src/pages/home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.scss";

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <BrowserRouter>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </BrowserRouter>
      </div>
    </RecoilRoot>
  );
}

export default App;
