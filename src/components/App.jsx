import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import CreateArea from "./CreateArea";

const notes = JSON.parse(localStorage.getItem("flyNotes")) || [];

function App() {
  const [newNotes, setNotes] = useState(notes);
  localStorage.setItem("flyNotes", JSON.stringify(newNotes));
  return (
    <>
      <Header />
      <CreateArea
        add={(newNote) => {
          console.log(newNote);
          setNotes([...newNotes, newNote]);
        }}
      />
      {newNotes.map((note, index) => (
        <Note
          key={index}
          title={note.title}
          content={note.content}
          delete={() => {
            setNotes(newNotes.filter((newNote, newId) => newId !== index));
          }}
          edit={(editedNote) => {
            console.log(editedNote);
            setNotes(
              newNotes.map((newNote, newId) =>
                newId === index ? editedNote : newNote
              )
            );
          }}
        />
      ))}
    </>
  );
}

export default App;
