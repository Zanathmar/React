import PropTypes, { func } from "prop-types";
import React, { useState } from "react";
import Note from "../components/Note";

function Home({ notes, addNote, deleteNote, updateNote }) {
  const [id, setId] = useState(0);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  function submitHandler(e) {
    e.preventDefault();

    const note = {
      title: title,
      content: content,
    };
    addNote(note);
    console.log(notes);

    if (isEditing) {
        updateNote(id, note);
        setIsEditing(false);
      } else 
      
      

    setId(0);
    setTitle("");
    setContent("");
  }

  function editHandler(note) {
    setId(note.id);
    setTitle(note.title);
    setContent(note.content);
    setIsEditing(true)
  }



  function cancelHandler() {
    setId(0);
    setTitle("");
    setContent("");
    setIsEditing(false)
  }
  return (
    <React.Fragment>
      <form onSubmit={submitHandler}>
        
        <h1>To do list</h1>

        <input
          type="hidden"
          name="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <input
          id="title"
          type="text"
          name="title"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          id="content"
          name="content"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button className={"btn-primary" + (isEditing ? " bg-blue" : "")} type="submit">
          {isEditing ? "Update" : "Add"} Note
        </button>
        {isEditing && (
          <button className="btn-danger" type="button" onClick={cancelHandler}>
            Cancel
          </button>
        )}
      </form>
      <section>
        <h1>My Notes :</h1>
        {notes.length === 0 && <p className="no-notes">No notes found</p>}
        {notes.map((note) => (
          <Note
            key={note.id}
            title={note.title}
            content={note.content}
            to={`/note/${note.id}`}
            onEdit={() => editHandler(note)}
            onDelete={() => deleteNote(note.id)}
          />
    ))}
      </section>
    </React.Fragment>
  );
}

Home.propTypes = {
  notes: PropTypes.array.isRequired,
  addNote: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired,
  updateNote: PropTypes.func.isRequired,
};

export default Home;