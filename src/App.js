import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Hello from "./components/pages/Hello";
import AllNotes from "./components/pages/All";
import Daily from "./components/pages/Daily";
import Urgent from "./components/pages/Urgent";
import Others from "./components/pages/Others";
import Calendar from "./components/pages/Calendar";
import SignUp from "./components/pages/SignUp";
import Notes from "./components/pages/Notes";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Hello} />
        <Route path="/notes" component={Notes} />
        <Route path="/all" component={AllNotes} />
        <Route path="/daily" component={Daily} />
        <Route path="/urgent" component={Urgent} />
        <Route path="/others" component={Others} />
        <Route path="/calendar" component={Calendar} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
