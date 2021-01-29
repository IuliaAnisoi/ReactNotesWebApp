import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Hello from "./components/pages/Hello";
import Calendar from "./components/pages/Calendar";
import SignUp from "./components/pages/SignUp";
import Notes from "./components/pages/Notes";
import { db } from "./init-firebase.js";

class App extends Component {
  constructor() {
    super();

    this.state = {
      notes: [],
    };
  }

  componentDidMount() {
    this.listenForChange();
  }

  //listening for changes in the database
  listenForChange() {
    /* 1. after referencing the 'notes' in our database
    on() creates an event listener for 'child_added', 
    we're using firebase to create an event listener for 'child_added'
    */
    db.ref("notes").on("child_added", (snapshot) => {
      //creating a new note object for each child added
      //val() returns an object on which we can use the .notation to get what we want

      let note = {
        id: snapshot.key,
        title: snapshot.val().title,
        note: snapshot.val().note,
      };

      //we're getting our notes and say that they're equal to this notes variable
      //we're creting a new reference to those notes
      let notes = this.state.notes;
      notes.push(note);

      this.setState({
        //we're passing the new notes array we've just created
        notes: notes,
      });
    });

    //this one is listening for when we delete one
    db.ref("notes").on("child_removed", (snapshot) => {
      let notes = this.state.notes;
      notes = notes.filter((note) => note.id !== snapshot.key);

      this.setState({
        notes: notes,
      });
    });
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Hello />
            </Route>
            <Route path="/notes">
              <Notes notes={this.state.notes} onChange={this.state.setNote} />
            </Route>
            <Route path="/calendar">
              <Calendar />
            </Route>
            <Route path="/sign-up" component={SignUp}>
              <SignUp />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
