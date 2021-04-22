import React, { useContext } from 'react';
import Head from 'next/head';
import Note from 'src/components/Note';
import CreateArea from 'src/components/CreateArea';
import uuid from 'react-uuid';
import { AppContext } from 'pages/_app';

function Home() {
    const [notes, setNotes] = useContext(AppContext);

    function addNote(newNote) {
        setNotes((prevNotes) => {
            newNote.id = uuid();
            return [...prevNotes, newNote];
        });
    }

    function deleteNote(id) {
        setNotes((prevNotes) => {
            return prevNotes.filter((note) => note.id !== id);
        });
    }

    function updateNote(note) {
        setNotes((prevNotes) =>
            prevNotes.map((prevNote) =>
                prevNote.id === note.id ? note : prevNote
            )
        );
    }

    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <CreateArea onAdd={addNote} />
            <section className="section section--noteArea">
                <div className="inner">
                    <div className="inner__noteArea">
                        {notes.map((noteItem) => {
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
                </div>
            </section>
        </>
    );
}

export default Home;
