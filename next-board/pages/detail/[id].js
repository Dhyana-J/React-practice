import React, {useContext,useState } from "react";
import {useRouter} from 'next/router';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import {AppContext} from '../../src/components/AppContext';

function Detail() {
  const router = useRouter();
  const [notes,setNotes] = useContext(AppContext);
  const [note,setNote] = useState(notes.filter(note=>note.id===router.query.id)[0]);



  function deleteNote(event){
    setNotes(prevNotes=>prevNotes.filter(prevNote=>prevNote.id!==note.id));
    event.preventDefault();
    router.push('/');
  }
  
  function updateNote(event){
    setNotes(prevNotes=>prevNotes.map(prevNote=>prevNote.id===note.id?note:prevNote));
    event.preventDefault();
    alert('게시글 수정이 완료되었습니다');
  }

  function handleChange(event){
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  return (
    <>
        <div className="note detail">
            <form className="detail">
                <input type="text" name="title" onChange={handleChange} value={note.title}/>
                <textarea resize="disable" name="content" onChange={handleChange} rows="30" value={note.content}></textarea>
                <div>
                    <button onClick={deleteNote}><DeleteIcon/></button>
                    <button onClick={updateNote}><CreateIcon/></button>
                </div>
            </form>
        </div>
    </>
  );
}

export default Detail;
