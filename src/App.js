import React from 'react';
import './App.css';
import PostTesting from './components/postTesting';
import Header from './components/header'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <Header/>
    <PostTesting/>
    </div>
  );
}

export default App;
