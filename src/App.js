import logo from "./logo.svg";
import "./App.css";
import { lazy, Suspense, useEffect } from "react";
import Index from "./jsx";

import { connect, useDispatch } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";
// action
import { checkAutoLogin } from "./services/AuthService";
import { isAuthenticated } from "./store/selectors/AuthSelectors";
/// Style
import "./vendor/bootstrap-select/dist/css/bootstrap-select.min.css";
import "./css/style.css";

function App() {
  return (
    <Suspense
      fallback={
        <div id="preloader">
          <div className="sk-three-bounce">
            <div className="sk-child sk-bounce1"></div>
            <div className="sk-child sk-bounce2"></div>
            <div className="sk-child sk-bounce3"></div>
          </div>
        </div>
      }
    >
      <Index />
    </Suspense>
  );
}

export default App;
