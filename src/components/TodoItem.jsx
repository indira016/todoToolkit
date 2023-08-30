import React from 'react'
import Button from './ui/Button'
import { useDispatch } from 'react-redux'
import { checkboxTodo, deleteTodo } from '../store/todoSlice'
import classes from './TodoItem.module.css'
import Card from './ui/Card'


const TodoItem = (props) => {
  const dispatch=useDispatch()

const {title,date,id,completed}=props

  const deleteHandler=()=>{
dispatch(deleteTodo({id}))
console.log(id);
  }
const checkboxHandler=()=>{
  dispatch(checkboxTodo({id}))
}
  return (
    <Card className={classes.users}>

        <li className={props.completed ? classes.done : ''}>
            <h4>{title}</h4>
            <h4>{date}</h4>
            <input onChange={checkboxHandler} type="checkbox" />
            <Button onClick={deleteHandler} >delete</Button>
          
        </li>
    </Card>
  
  )
}

export default TodoItem