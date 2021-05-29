import React , {useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';
import './App.css';

const App = () => {
  const [addItem,setAddItem] = useState([]);
  //adding items in array
  const addNote = (note) => {

    //alert("I am clicked");
    setAddItem((prevData)=>{
      return [...prevData , note];
    });
    
  };

  const onDelete =(id) => {
    setAddItem((oldData)=> {
    return (oldData.filter((currdata,indx) => {
      return indx !== id;
    }))
  })    
  }

  return(
    <>
    <div className = "main_div">
      <Header />
      <CreateNote passNote={addNote} />
     {/*using map method to render array item one by one*/}
      {addItem.map((val,index)=> {
        return (
        <Note 
          key = {index}
          id = {index}
          title = {val.title}
          content = {val.content}
          deleteItem = {onDelete}
        />
        );
      })}

      <Footer />
    </div>
    </>
  )
}


export default App;