import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";


function Notes(props) {
  const { notes, deleteNote, update} = props;

  return (
    <div className="notepad flex flex-wrap justify-center text-center py-6">
      { /* Style your note cards with Tailwind here and get the data from app.js */ }
       
               {notes.map(note => 
              <div class="bg-white max-w-sm rounded overflow-hidden shadow-lg">
              <div class="px-6 py-4" key={note.id}>
                <div class="font-bold text-xl mb-2">{note.title}</div>
                <p class="text-gray-700 text-base">
                  {note.content}
                </p>
              </div>
              <div className="edits flex flex-wrap justify-center text-center">
              <div className=' border border-white p-3 ' onClick={() => update(note.id)}><FaEdit className=' cursor-pointer text-center text-[24px] relative left-[30px] text-green-600'/></div>
              <div className='border border-white p-3 ' onClick={() => deleteNote(note.id)}><FaTrash className='cursor-pointer text-center text-[24px] relative left-[30px] text-red-600'/></div>

             
              </div>
               <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
              </div>
            </div>
                 
               )}
         

       

    </div>
  );
}

export default Notes;