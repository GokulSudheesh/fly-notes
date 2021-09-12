import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [newNote, setNewNote] = useState({ title: "", content: "" });
  const [isExpand, expand] = useState(false);

  return (
    <div>
      <form className="create-note">
        {isExpand && (
          <input
            name="title"
            placeholder="Title"
            autoComplete="off"
            onChange={(event) =>
              setNewNote({ ...newNote, title: event.target.value })
            }
            value={newNote.title}
          />
        )}
        <textarea
          name="content"
          placeholder="Take a note..."
          autoComplete="off"
          rows={isExpand ? 3 : 1}
          onChange={(event) =>
            setNewNote({ ...newNote, content: event.target.value })
          }
          onClick={() => expand(true)}
          value={newNote.content}
        />
        <button
          className="expand"
          onClick={(event) => {
            expand(!isExpand);
            event.preventDefault();
          }}
        >
          {isExpand ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </button>
        <Zoom in={isExpand}>
          <Fab
            onClick={(event) => {
              if (newNote.title.length || newNote.content.length) {
                props.add(newNote);
                setNewNote({ title: "", content: "" });
              }
              event.preventDefault();
            }}
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
