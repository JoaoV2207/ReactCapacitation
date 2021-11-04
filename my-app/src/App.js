import React from 'react';
import axios from 'axios';
import{ 
  BrowserRouter as Router,
  Switch,
  Route
 } from 'react-router-dom';
import './App.css';
import Register from './components/Register/Register';

function App() {
  axios.defaults.baseURL = process.env.REACT_APP_API_URL;
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/Registro">
            <Register/>
          </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
