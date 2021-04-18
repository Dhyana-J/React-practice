import React, { useState } from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';

function Detail(props) {

    const [note, setNote] = useState({
        id:props.location.id,
        title: props.location.title,
        content: props.location.content
    });

    function handleDelete(event) {
      props.location.onDelete(props.location.id);
      event.preventDefault();
      props.history.push('/',null);
    }

    function handleUpdate(event){
        props.location.onUpdate(note);
        event.preventDefault();
        alert('게시글 수정이 완료되었습니다!');
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
                    <button onClick={handleDelete}><DeleteIcon/></button>
                    <button onClick={handleUpdate}><CreateIcon/></button>
                </div>
            </form>
        </div>
    </>
  );
}

export default Detail;
