import React from 'react';
import Head from 'next/head';
import Note from 'src/components/Note';
import CreateArea from 'src/components/CreateArea';
import uuid from 'react-uuid';

function Home(props) {
    let testValue = React.useRef(1);
    console.log('useRef 변수 : ', testValue);

    if (!props) return null;

    function addNote(newNote) {
        props.setNotes((prevNotes) => {
            newNote.id = uuid();
            return [...prevNotes, newNote];
        });
        testValue.current++;
        console.log(testValue.current);
    }

    function deleteNote(id) {
        props.setNotes((prevNotes) => {
            return prevNotes.filter((note) => note.id !== id);
        });
    }

    function updateNote(note) {
        props.setNotes((prevNotes) =>
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
                        {props.notes.map((noteItem) => {
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
