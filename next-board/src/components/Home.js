import React from "react";
import Note from "./Note";
import CreateArea from "./CreateArea";
import uuid from "react-uuid";

function Home(props) {

    function addNote(newNote) {
    props.setNotes(prevNotes => {
        newNote.id = uuid();
        return [...prevNotes, newNote];
    });
    }

    function deleteNote(id) {
    props.setNotes(prevNotes => {
        return prevNotes.filter((note) => note.id !== id);
    });
    
    }

    function updateNote(note){
        // props.setNotes(prevNotes => {
        //     const noteIndex = prevNotes.findIndex((before)=>before.id===note.id);

        //     prevNotes[noteIndex] = note;
        //     return prevNotes;
        // });
        props.setNotes(prevNotes=>prevNotes.map(
            prevNote => prevNote.id === note.id ? note : prevNote
        ));
    }

    return (
    <div>
        <CreateArea onAdd={addNote} />
        {props.notes.map((noteItem) => {
            console.log(noteItem);
            return (
            <Note
                key={noteItem.id}
                id={noteItem.id}
                title={noteItem.title}
                content={noteItem.content}
                onDelete={deleteNote}
                onUpdate={updateNote}
            />
            );
        })}
    </div>
    );
}

export default Home;
