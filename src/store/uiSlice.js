import { createSlice } from "@reduxjs/toolkit";

const uiSlice=createSlice({
    name:'ui',
    initialState:{
        toggle:false,
        ErrorTitle:'',
        ErrorMessege:''
    },
    reducers:{
        modalTodo(state,{payload}){
state.toggle=!state.toggle
state.ErrorTitle=payload.title
state.ErrorMessege=payload.messege
        },
        closeTodo(state){
            state.toggle=null
        }
    }
})
export const {modalTodo,closeTodo}=uiSlice.actions
export default uiSlice