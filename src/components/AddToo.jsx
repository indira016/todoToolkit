import React, { Fragment, useState } from 'react'
import Button from './ui/Button'
import Card from './ui/Card'
import classes from './AddTodo.module.css'
import { useDispatch } from 'react-redux'
import { addTodo } from '../store/todoSlice'
import { closeTodo, modalTodo } from '../store/uiSlice'
import ErrorModul from './ErrorModul'
import { useSelector } from 'react-redux'

const AddToo = () => {

    const dispatch = useDispatch()
    const [inputTitle, setInputTitle] = useState('')
    const [inputDate,setInputDate]=useState('')
   
    const{toggle,ErrorTitle,ErrorMessege}=useSelector(state=>state.ui)

    const titleHandler = (e) => {
        setInputTitle(e.target.value)
    }
    const dateHandler=(e)=>{
setInputDate(e.target.value)
    
}
    
    const submitHandler = (e) => {
        e.preventDefault()
if(inputTitle.trim().length===0 || inputDate.trim().length===0){
    dispatch(modalTodo({
        title:'Ошибка',
        messege:'Форма не должен буть пустым'
    }))
    return
}

        const todos = {
            id: Math.random().toString(),
            title: inputTitle,
            date: inputDate,
            completed: false
        }

        dispatch(addTodo(todos))
        
       
    }
    const closeModulError = () => {
        dispatch(closeTodo())
    }
  return (
   <Fragment>
 {toggle && <ErrorModul title={ErrorTitle} messege={ErrorMessege} onClick={closeModulError} />}
    <Card className={classes.input}>
        <form  onSubmit={submitHandler}>
            <input type="text" value={inputTitle} placeholder='UserName' onChange={titleHandler} />
            <input type="date" value={inputDate} placeholder='Date' onChange={dateHandler} />
            <Button type="submit" >Add</Button>
        </form>
    </Card>
   </Fragment>
  )
}

export default AddToo