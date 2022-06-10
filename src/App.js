import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link 
} from "react-router-dom";

import Navbar from "./components/Navbar.components";
import ExerciseList from "./components/ExerciseList.components";
import EditExercise from "./components/EditExercise.components";
import CreateExercise from "./components/CreateExercise.components";
import CreateUser from "./components/CreateUser.components";

import './App.css';

function App() {
  return (
    <Router>
      <Navbar/>
      <br/>
      <Route path="/" exact component={ExerciseList} />
      <Route path="/edit/:id"  component={EditExercise} />
      <Route path="/create1"  component={CreateExercise} />
      <Route path="/user"  component={CreateUser} />
    </Router>
  );
}

export default App;
