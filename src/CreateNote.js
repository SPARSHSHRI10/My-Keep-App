import React,{useState} from 'react'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNote = (props) => {

    const [expand,setExpand] = useState(false);
    const [note,setNote] = useState({
        title : "",
        content : "",
    });

    const InputEvent = (event) => {

        const value = event.target.value; 
        const name = event.target.name;

        setNote((prevData) => {
            return {
                ...prevData,
                [name] : value,
            };
        });
    };

    const addEvent =() => {
        props.passNote(note);
        setNote (() => {
            return({
            title : "",
            content : "",
        })
        });
    };

    const expandit = () => {
        setExpand(true);
    }

    const backtonormal =() => {
        setExpand(false);
    }

    return (
        <>
        <div className = "main_note" onDoubleClick={backtonormal}>
            <form>
            {expand ?
                <input className ="input1"  type = "text" value ={note.title} name = "title" onChange = {InputEvent} placeholder="Title" autoComplete="off" /> : null }
                <textarea rows="" column="" value={note.content} name="content" onChange ={InputEvent} placeholder = "Take a Note..." onClick = {expandit} ></textarea>
            {expand ? <Button onClick={addEvent} variant="contained" color="default" >
                    <AddIcon className = "plus_sign" />
                </Button>: null}
            </form>
        </div>
        </>
    )
}

export default CreateNote;
