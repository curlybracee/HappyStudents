import React from 'react';
import './App.css';
import PostTesting from './components/postTesting';
import Header from './components/header'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route}from 'react-router-dom'
import home from './components/home';
function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Route path="/" exact component={localStorage.getItem("token")?home:PostTesting}/>
      <Route path="/home" component={home}/>
    </Router>
    </div>
  );
}

export default App;
