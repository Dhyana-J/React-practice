import React, { useContext, useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import Note from 'src/components/Note';
import CreateArea from 'src/components/CreateArea';
import uuid from 'react-uuid';
import { AppContext } from 'pages/_app';
import Data from 'src/Data';
import AnimationCircle from 'src/styled_components/AnimationCircle';
import AnimationNote from 'src/styled_components/AnimationNote';

function Home() {
    const [notes, setNotes] = useContext(AppContext);
    const [currentIndex, setIndex] = useState(5); //노트 초반 갯수가 5개이므로 5로 설정해주자
    const [isLoading, setLoadingState] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // 스크롤 바닥치면 데이터 추가 로드
    function handleScroll() {
        window.pageYOffset + document.documentElement.clientHeight >
            document.documentElement.scrollHeight - 1 && fetchMoreData();
    }

    function fetchMoreData() {
        setLoadingState(true);
        setTimeout(() => {
            const loadHowMany = 5;
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

    // const currentNotes = useMemo(()=>notes)

    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            {isLoading && <AnimationCircle />}
            <CreateArea onAdd={addNote} />
            <section className="section section--noteArea">
                <div className="inner">
                    <div className="inner__noteArea">
                        {notes.map((noteItem, index) => {
                            return (
                                <AnimationNote
                                    key={noteItem.id}
                                    index={index}
                                    noteLength={notes.length}
                                >
                                    <Note
                                        key={noteItem.id}
                                        id={noteItem.id}
                                        title={noteItem.title}
                                        content={noteItem.content}
                                        onDelete={deleteNote}
                                        onUpdate={updateNote}
                                    />
                                </AnimationNote>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;
