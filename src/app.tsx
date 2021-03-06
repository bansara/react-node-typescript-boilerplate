import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import HelloWorld from "./components/HelloWorld";
import "./app.css";

const App: React.FC = () => {
  return (
    <Router basename="/">
      <Switch>
        <Route exact path="/" component={HelloWorld} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

const app: HTMLElement = document.getElementById("app")!;
ReactDOM.render(<App />, app);
