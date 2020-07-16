import React from "react";
import "./App.css";
import 'antd/dist/antd.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { UserProvider } from "./context/userState";
import { Header } from "./components/header";
import {BrowserRouter as Router} from 'react-router-dom'
import CurrentUserChecker from "./components/currentUserChecker";
import Routes from './routes/routes'
function App() {
  return (
    <div className="App">
      <UserProvider>
        <CurrentUserChecker>
          <Header />
          <div className="container">
            <div className="wall-container">
              <Router>
                <Routes/>
              </Router>
            </div>
          </div>
        </CurrentUserChecker>
      </UserProvider>
    </div>
  );
}

export default App;
