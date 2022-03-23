import React from 'react';
import axios from 'axios';
import{ 
  BrowserRouter as Router,
  Routes,
  Route
 } from 'react-router-dom';
import './App.css';
import Register from './components/Register/Register';

function App() {
  axios.defaults.baseURL = process.env.REACT_APP_API_URL;
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/register">
            <Register/>
            
          </Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
