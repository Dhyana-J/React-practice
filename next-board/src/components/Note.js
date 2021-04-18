import React from "react";
import Link from "next/link"
import DeleteIcon from '@material-ui/icons/Delete';
import SearchIcon from '@material-ui/icons/Search';


function Note(props) {
  
  const content = props.content;

  function handleDelete() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{content.length>100?content.substr(0,100)+"...":content}</p>
      <button onClick={handleDelete}><DeleteIcon/></button>
      {/* <Link to={{
        pathname:'/detail',
        id:props.id,
        title:props.title,
        content:props.content,
        onDelete:props.onDelete,
        onUpdate:props.onUpdate
      }}>
          <button><SearchIcon/></button>
      </Link> */}
      <Link href={`/detail/${props.id}`}>
          <button><SearchIcon/></button>
      </Link>
    </div>
  );
}

export default Note;