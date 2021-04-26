import React, { useContext, useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import { AppContext } from 'pages/_app';
import Styles from 'styles/Note.module.css';
import Notes from 'src/Data';

function Detail({ item }) {
    console.log('client side item : ', item);
    const router = useRouter();

    const [notes, setNotes] = useContext(AppContext);

    const [note, setNote] = useState(
        notes.filter((note) => note.id === router.query.id)[0]
    );

    if (!note) {
        return (
            <div className="not-found">
                <h1>Oooops...</h1>
                <h2>That PAge can't be found</h2>
                <Link href="/">
                    <a>Go Back to the Home</a>
                </Link>
            </div>
        );
    }

    function deleteNote(event) {
        setNotes((prevNotes) =>
            prevNotes.filter((prevNote) => prevNote.id !== note.id)
        );
        event.preventDefault();
        router.push('/');
    }

    function updateNote(event) {
        console.log(event);
        if (note.title || note.content) {
            setNotes((prevNotes) =>
                prevNotes.map((prevNote) =>
                    prevNote.id === note.id ? note : prevNote
                )
            );
            alert('게시글 수정이 완료되었습니다');
        } else alert('내용을 입력하세요');
        event.preventDefault();
    }

    function handleChange(event) {
        const { name, value } = event.target;

        setNote((prevNote) => {
            return {
                ...prevNote,
                [name]: value,
            };
        });
    }

    return (
        <>
            <Head>
                <title>Detail</title>
            </Head>
            <section className="section section--detail">
                <div className="inner">
                    <div className={`${Styles.note} ${Styles.detail}`}>
                        <form className={Styles.detail}>
                            <input
                                className={Styles.titleInput}
                                type="text"
                                name="title"
                                onChange={handleChange}
                                value={note.title}
                            />
                            <textarea
                                className={Styles.contentInput}
                                resize="disable"
                                name="content"
                                onChange={handleChange}
                                rows="30"
                                value={note.content}
                            ></textarea>
                            <div className={Styles.buttonWrapper}>
                                <button
                                    className={Styles.noteBtn}
                                    onClick={deleteNote}
                                >
                                    <DeleteIcon className={Styles.btn} />
                                </button>
                                <button
                                    className={Styles.noteBtn}
                                    onClick={updateNote}
                                >
                                    <CreateIcon className={Styles.btn} />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Detail;

// export async function getServerSideProps(context) {
//     const id = context.params.id;
//     console.log('this is id');
//     console.log(id);

//     const [data] = Notes.filter((note) => note.id === id);

//     return {
//         props: {
//             item: data || null,
//         },
//     };
// }
