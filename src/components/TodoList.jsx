import React from 'react'

import TodoItem from './TodoItem'
import { useSelector } from 'react-redux'

const TodoList = () => {
const todoList=useSelector(state=>state.todo.items)
console.log(todoList);


  return (
    <div>
        <ul>
        {todoList.map((el)=>{
return <TodoItem    
    key={el.id}
    id={el.id}
     title={el.title}
     date={el.date}
     completed={el.completed}
 />
})}
        </ul>
    </div>
  )
}

export default TodoList