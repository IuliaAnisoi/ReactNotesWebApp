import React, { useState } from "react";
import firebase from "firebase/app";
import "./Notes.css";
import Container from "react-bootstrap/Container";
import { db } from "/Users/anisoiiuliaroxana/Desktop/iap/notes/src/init-firebase.js";

function Notes(props) {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  const createNote = () => {
    if (title.title !== "" && note.note !== "") {
      db.ref("notes").push({
        title: title,
        note: note,
      });
    }
  };

  const removeNote = (id) => {
    //referencing "notes" in the db, passing id as a parameter, which we then remove
    firebase.database().ref("notes").child(id).remove();
  };

  return (
    <Container>
      <section className="noteform">
        <h2 className="title">Create a new note</h2>
        <div className="form-group">
          <label className="label" htmlFor="noteform-title">
            Title
          </label>
          <input
            type="text"
            id="noteform-title"
            name="noteform-title"
            value={title.title}
            onChange={(evt) => setTitle(evt.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="label" htmlFor="noteform-note">
            Note
          </label>
          <textarea
            name="notefrom-note"
            id="noteform-note"
            value={note.note}
            onChange={(evt) => setNote(evt.target.value)}
          ></textarea>
        </div>

        <button className="btn" onClick={createNote}>
          Create Note
        </button>
      </section>

      <section className="notes-wrapper">
        <h2 className="title"> All Notes</h2>
        <div className="notes">
          {/* for each item in the list we're assigning a div */}
          {props.notes.map((note) => (
            <div className="note" key={note.id}>
              <div className="note-title">
                <h3>{note.title}</h3>
                <div className="remove" onClick={() => removeNote(note.id)}>
                  x
                </div>
              </div>
              <div className="note-content">
                <p>{note.note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}

export default Notes;
