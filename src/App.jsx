import React, { useEffect, useState } from "react";
// Import all your components here
// Soo Jiido wixii components ah ood u baahantahay
import AddNote from "./components/AddNote";
import Notes from "./components/Notes"

import axios from "axios";

function App() {
  const [notes , setNotes] = useState([]);
  const [item , setItem] = useState([]);


  useEffect(() => {
    axios.get('http://localhost:9000/notes')
    .then((response) => {
      // console.log(response)
      setNotes(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }, []);

  const createNote = (noteData) => {
    // Make API call to create a note (POST request to http://localhost:9000/create_note)
   axios.post("http://localhost:9000/create_note", noteData)
   .then(res=>{
    console.log(noteData)
    setNotes((prevNotes)=>[...prevNotes, res.data])
   })
   .then(err=>{
    console.log(err)
   })
  };

  const yy = (id) => {
    // Make API call to delete a note (DELETE request to http://localhost:9000/delete_note/:id)
    // Halkaas ka tirtir note adigoo DELETE request isticmaalaayo http://localhost:9000/delete_note/:id
  };
  const deleteNote = (id) => {
    axios.delete(`http://localhost:9000/delete_note/${id}`)
    .then(() => {
      setNotes((prevNotes) => 
        prevNotes.filter((note) => note.id !== id)
      )
    })
    .catch((err) => {
      console.log(err)
    })

  }

  // STRETCH GOAL: Implement edit functionality
  // STRETCH GOAL: Isku day inaa edit ku sameyso notes-ka
  const update = async (e) => {
    e.preventDefault();
    try {
      await fetch(`http://localhost:9000/notes/${id}`, {
        method: "POST",
        // body: JSON.stringify(body),
      });
      prevNotes.filter((note) => note.id !== id)
    } catch (error) {
      console.log("error");
    }
  };
  return (
    <div className="bg-blue-600 min-h-screen flex">
      <div className="w-full">
        <div className="flex flex-col items-center">
          <h3 className="text-3xl text-white mb-5 mt-5">My Notes</h3>
          { /* Add here all the components you need */ }
          <AddNote createNote={createNote}/>
          <Notes notes={notes} deleteNote={deleteNote} update={update}/>
        </div>
      </div>
    </div>
  );
}

export default App;
