import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { UserProvider } from "./context/userState";
import { Header } from "./components/header";
import { Home } from "./components/Home";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <div>
          <Header />
          <div className="container">
            <div className="wall-container">
              <Home />
            </div>
          </div>
        </div>
      </UserProvider>
    </div>
  );
}

export default App;
