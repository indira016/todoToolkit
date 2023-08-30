import { createSlice } from "@reduxjs/toolkit";


const todoSlice=createSlice({
    name:'todo',
    initialState:{
        items:[]
    },
    reducers:{
        addTodo(state, action){
            const todoItem = action.payload
            console.log(action.payload);

            state.items.push({
                id:todoItem.id,
                title:todoItem.title,
                date:todoItem.date,
                completed:todoItem.completed
            })

        },
        deleteTodo(state,action){
            const todoId=action.payload.id
            state.items=state.items.filter((el)=>el.id!==todoId)
        },
        checkboxTodo(state,action){
            const todoId=action.payload.id
            state.items=state.items.map((el)=>{
                if(el.id===todoId){
                    el.completed= !el.completed
                }
                return el
            })
        }
    }
})


export const {addTodo,deleteTodo,checkboxTodo} = todoSlice.actions
export default todoSlice