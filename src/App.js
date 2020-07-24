import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { UserProvider } from "./context/userState";
import { Header } from "./components/header";
import { BrowserRouter as Router } from "react-router-dom";
import CurrentUserChecker from "./components/currentUserChecker";
import Routes from "./routes/routes";
import Footer from "./components/footer";
function App() {
  return (
    <div className="App">
      <UserProvider>
        <CurrentUserChecker>
          <Router>
            <Header />
            <div className="container">
              <Routes />
            </div>
          </Router>
          <Footer />
        </CurrentUserChecker>
      </UserProvider>
    </div>
  );
}

export default App;
