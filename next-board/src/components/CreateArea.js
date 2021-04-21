import React, { useState } from 'react';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import { Zoom } from '@material-ui/core';

function CreateArea(props) {
    const [isExpanded, setExpand] = useState(false);

    const [note, setNote] = useState({
        id: '',
        title: '',
        content: '',
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setNote((prevNote) => {
            return {
                ...prevNote,
                [name]: value,
            };
        });
    }

    function submitNote(event) {
        if (note.content || note.title) {
            props.onAdd(note);
            setNote({
                id: '',
                title: '',
                content: '',
            });
        } else {
            alert('내용을 입력하세요');
        }
        event.preventDefault();
    }

    function expand() {
        setExpand(true);
    }

    return (
        <section className="section ">
            <div className="inner">
                <form className="createForm">
                    {isExpanded && (
                        <input
                            name="title"
                            onChange={handleChange}
                            value={note.title}
                            placeholder="Title"
                        />
                    )}
                    <textarea
                        name="content"
                        onChange={handleChange}
                        value={note.content}
                        placeholder="Take a note..."
                        onClick={expand}
                        rows={isExpanded ? 3 : 1}
                    />
                    <Zoom in={isExpanded}>
                        <Fab size="medium" onClick={submitNote}>
                            <EditIcon />
                        </Fab>
                    </Zoom>
                </form>
            </div>
        </section>
    );
}

export default CreateArea;
