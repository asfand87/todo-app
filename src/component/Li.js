import { Button, List, ListItem, ListItemText, makeStyles, Modal } from '@material-ui/core';
import { SettingsPowerRounded } from '@material-ui/icons';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import React, {useState} from 'react';
import db from "../firebase";


const useStyles = makeStyles((theme)=>({
    paper : {
        position : "absolute",
        width: 400,
        backgroundColor : theme.palette.background.paper,
        border : "2px solid #000",
        boxShadow : theme.shadows[5],
        padding : theme.spacing(2, 4, 3),
    },
}));



const Li = ({item}) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState("");

    const handleClose = ()=>{
        setOpen(false);
    }

    const handleOpen = ()=>{
        setOpen(true);
    }

    

const updateTodo = ()=>{
    // update the todos.
    db.collection("todo").doc(item.id).set({
        todo: input,
    },{merge:true})

    setOpen(false)
  }

       return (
     <>      
  <Modal
  open={open}
  onClose={handleClose}
  >
  <div className={classes.paper}>
  <h1>I am a modle</h1>
  <input placeholder={item.todo} type="text" onChange={event=>setInput(event.target.value)} value={input}/>
        <Button onClick={updateTodo}>UpDate to do</Button>
  </div>

  

</Modal>
        <List>
            <ListItem>
                <ListItemText primary = {item.todo} secondary = "todo"/>
                <Button onClick={event=>{
                 db.collection("todo").doc(item.id).delete();
                }
                
                }><DeleteForeverIcon/></Button>
            </ListItem>
            <button onClick={handleOpen}>Edit</button>
        </List>
        </> 
    )
}


export default Li;