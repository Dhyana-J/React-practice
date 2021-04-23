import React, { useEffect, useMemo } from 'react';
import Link from 'next/link';
import DeleteIcon from '@material-ui/icons/Delete';
import SearchIcon from '@material-ui/icons/Search';
import Styles from 'styles/Note.module.css';

function Note(props) {
    const title = props.title;
    const content = props.content;

    function handleDelete() {
        props.onDelete(props.id);
    }
    return (
        <div className="noteWrapper">
            <div className={Styles.note}>
                <h1 className={Styles.noteTitle}>
                    {title.length > 30 ? title.substr(0, 30) + '...' : title}
                </h1>
                <p className={Styles.noteContent}>
                    {content.length > 100
                        ? content.substr(0, 100) + '...'
                        : content}
                </p>
                <div className={Styles.buttonWrapper}>
                    <button className={Styles.noteBtn} onClick={handleDelete}>
                        <DeleteIcon onClick={handleDelete} />
                    </button>
                    <Link href={`/detail/${props.id}`}>
                        <button className={Styles.noteBtn}>
                            <SearchIcon className={Styles.searchBtn} />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Note;
