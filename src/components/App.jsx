import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [notes, setNotes] = useState([]);

  function addNote(note){
    setNotes((prevValue) => {
      return [...prevValue, note];
    })
  }

  function deleteNote(index){
    setNotes((prevValue) => {
      return notes.filter((note, id) => {
        return index !== id;
      });
    })
  }

  return (
    <div>
      <Header />
      <CreateArea addNote = {addNote} />
      {notes.map((noteItem, index) => {
        return <Note key={index} id={index} title={noteItem.title} content={noteItem.content} deleteNote={deleteNote} />
      })}
      <Footer />
    </div>
  );
}

export default App;
