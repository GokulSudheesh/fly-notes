import React, { useState } from "react";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DoneIcon from "@material-ui/icons/Done";

function Note(props) {
  const [isEdit, edit] = useState(false);
  const [newNote, editNote] = useState({
    title: props.title,
    content: props.content,
  });

  function change(event) {
    const { name, value } = event.target;
    editNote({ ...newNote, [name]: value });
  }

  return (
    <div className="note">
      {!isEdit && (
        <>
          <h1>{props.title}</h1>
          <p>{props.content}</p>
        </>
      )}
      {isEdit && (
        <>
          <input name="title" onChange={change} value={newNote.title} />
          <textarea
            name="content"
            onChange={change}
            value={newNote.content}
            rows="5"
          />
        </>
      )}
      {!isEdit && (
        <button onClick={props.delete}>
          <DeleteOutlineIcon />
        </button>
      )}
      <button
        onClick={() => {
          if (isEdit) {
            props.edit(newNote);
          }
          edit(!isEdit);
        }}
      >
        {isEdit ? <DoneIcon /> : <EditOutlinedIcon />}
      </button>
    </div>
  );
}

export default Note;
