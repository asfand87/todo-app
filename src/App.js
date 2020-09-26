import { Button, FormControl, Input, InputLabel} from '@material-ui/core';
import React, {useState, useEffect} from 'react';
import Todo from "./component/Li";
import db from "./firebase";
import './App.css';
import firebase from "firebase";

function App() {
  const [todo, setTodo] = useState("");
  const [item, setItem] = useState([]);

  // so here when the app loads we need to listen to the database and fetch new todos 
  // as they add or removed.
  // we will useEffect hook.
  useEffect(()=>{
    // this code fires when the app.js loads.
    db.collection("todo").orderBy("timeStamp", "desc").onSnapshot(snapShot=>{
      setItem(snapShot.docs.map(doc=>({
        id : doc.id , 
        todo :doc.data().todo,
      })))
    })
  }, 
  // this array will be blank if we dont put any thing but if its basket then it 
  // runs every time we add or remove any thing from it.
  []);

function addTodo(e){
setTodo(e.target.value);
}

function additem(e){
  db.collection("todo").add({
    todo: todo,
    timeStamp : firebase.firestore.FieldValue.serverTimestamp(),
  });
  // setItem((prevValue)=>{
  //   return [...prevValue,todo,]
  // });
  e.preventDefault();
  setTodo("");
}
  return (
    <div className="App">
      <h1>Welcome to do list App</h1>
        <FormControl>
            <InputLabel>Write To do List</InputLabel>
            <Input onChange={addTodo} type="text"  value={todo}/><Button type="submit" variant="contained" color="primary" disabled={!todo} onClick={additem}>Add To Do Item</Button>
       
       </FormControl>
      <ul>
        {
          item.map((todo ,index)=>
             <Todo 
              key = {index}  
              id = {index}
              item = {todo}
            />
          )
        }
      </ul>
    </div>
  );
}

export default App;
