import React, { useContext, useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import Note from 'src/components/Note';
import CreateArea from 'src/components/CreateArea';
import uuid from 'react-uuid';
import { AppContext } from 'pages/_app';
// import styles, { keyframes } from 'styles/Home.module.css';
import Data from 'src/Data';

function Home() {
    const [notes, setNotes] = useContext(AppContext);
    const [currentIndex, setIndex] = useState(5); //노트 초반 갯수가 5개이므로 5로 설정해주자
    const [isLoading, setLoadingState] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    function renderLoadingDots() {
        if (isLoading)
            return (
                <div className="spinner-box">
                    <div className="pulse-container">
                        <div className="pulse-bubble pulse-bubble-1"></div>
                        <div className="pulse-bubble pulse-bubble-2"></div>
                        <div className="pulse-bubble pulse-bubble-3"></div>
                    </div>
                </div>
                // <div className={styles['spinner-box']}>
                //     <div className={styles['pulse-container']}>
                //         <div
                //             className={`${styles['pulse-bubble']}
                //                 ${styles['pulsebubble-1']}`}
                //         ></div>
                //         <div
                //             className={`${styles['pulse-bubble']}
                //             ${styles['pulsebubble-2']}`}
                //         ></div>
                //         <div
                //             className={`${styles['pulse-bubble']}
                //             ${styles['pulsebubble-3']}`}
                //         ></div>
                //     </div>
                // </div>
            );
    }

    function handleScroll() {
        if (
            window.pageYOffset + document.documentElement.clientHeight >
            document.documentElement.scrollHeight - 1
        )
            fetchMoreData();
    }

    function fetchMoreData() {
        setLoadingState(true);
        setTimeout(() => {
            const loadHowMany = 2;
            setNotes((prevValues) => {
                return prevValues.concat(
                    Data.splice(currentIndex, loadHowMany)
                );
            });
            setIndex(currentIndex + loadHowMany);
            setLoadingState(false);
        }, 1000);
    }

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
            {renderLoadingDots()}
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
