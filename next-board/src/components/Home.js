import React from 'react';
import Head from 'next/head';
import Note from './Note';
import CreateArea from './CreateArea';
import uuid from 'react-uuid';

export const getStaticProps = async () => {
    // runs at build time. this function never runs in the browser
    // data fetch 할 수 있는 function

    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return {
        props: { notes: data },
    };
};

function Home(props) {
    if (!props) return null;

    function addNote(newNote) {
        props.setNotes((prevNotes) => {
            newNote.id = uuid();
            return [...prevNotes, newNote];
        });
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
