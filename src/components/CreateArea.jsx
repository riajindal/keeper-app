import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';

function CreateArea(props) {

  const [note, setNote] = useState({
    title: "", 
    content: ""
  });

  function handleChange(event){
    const {name, value} = event.target;
    setNote((prevValue) => {
      return {
        ...prevValue, 
        [name] : value,
      }
    })
  }

  function submitNote(event){
    props.addNote(note);
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input name="title" value={note.title} onChange={handleChange} placeholder="Title" />
        <textarea name="content" value={note.content} onChange={handleChange} placeholder="Take a note..." rows="3" />
        <button onClick={submitNote}><AddIcon /></button>
      </form>
    </div>
  );
}

export default CreateArea;
