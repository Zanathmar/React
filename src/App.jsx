import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import Home from "./Pages/Home";
import ErrorPage from "./Pages/error";
import NoteDetails from "./Pages/NoteDetails";
import ForecastDetails from "./components/ForecastDetails";
import Weather from "./components/Weather";
import Base from "./Pages/Base";

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );

  const addNote = (note) => {
    note.id = Date.now();
    setNotes([...notes, note]);
        localStorage.setItem("notes", JSON.stringify([...notes, note]));
  };

  const deleteNote = (noteId) => {
    setNotes(notes.filter((note) => note.id !== noteId));
    localStorage.setItem("notes", JSON.stringify(notes.filter((note) => note.id!== noteId)));
  };

  const updateNote = (noteId, updatedNote) => {
    setNotes(notes.map((note) => (note.id === noteId ? updatedNote : note)));
  };

  const router = createBrowserRouter([
    {
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: (
            <Base />
          ),
        },
        {
          path: "/notes",
          element: (
            <Home
              notes={notes}
              addNote={addNote}
              deleteNote={deleteNote}
              updateNote={updateNote}
            />
          ),
        },
        {
          path: "/note/:noteId",
          element: <NoteDetails />,
          loader: ({ params }) => {
            const note = notes.find((note) => note.id === parseInt(params.noteId));
            if (note) {
              return note;
            } else {
              throw new Error("Note not found");
            }
          }
            
        },
        {
          path: "/weather",
          element: <Weather />,
          
        }
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;