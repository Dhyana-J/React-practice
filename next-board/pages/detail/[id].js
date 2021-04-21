import React, { useContext, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import { AppContext } from '../../src/components/AppContext';

export const getStaticPaths = async () => {
    //내가 가진 데이터 기준으로 얼마나 많은 라우팅 페이지를 미리 만들어두어야하는지 설정해주는 메소드
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    //가져온 데이터의 id값들을 가지고 배열을 만든다.
    const paths = data.map((post) => {
        return {
            params: {
                id: post.id.toString(), // 이렇게 안해주면 integer로 들어오는데, 반드시 string version이어야한다.
            },
        };
    });

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();

    return {
        props: {
            note: data,
        },
    };
};

function Detail({ note }) {
    const router = useRouter();
    // const [notes, setNotes] = useContext(AppContext);
    const [note, setNote] = useState(
        notes.filter((note) => note.id === router.query.id)[0]
    );

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
                    <div className="note detail">
                        <form className="detail">
                            <input
                                type="text"
                                name="title"
                                onChange={handleChange}
                                value={note.title}
                            />
                            <textarea
                                resize="disable"
                                name="content"
                                onChange={handleChange}
                                rows="30"
                                value={note.content}
                            ></textarea>
                            <div>
                                <button onClick={deleteNote}>
                                    <DeleteIcon />
                                </button>
                                <button onClick={updateNote}>
                                    <CreateIcon />
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
