import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { UserProvider } from "./context/userState";
import { Header } from "./components/header";
import { Home } from "./components/Home";
import {Switch,Route,BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <UserProvider>
        <div>
          <Header />
          <div className="container">
            <div className="wall-container">
              <Router>
              <Switch>
                <Route to="/" component={Home} exact/>
              </Switch>
              </Router>
            </div>
          </div>
        </div>
      </UserProvider>
    </div>
  );
}

export default App;
