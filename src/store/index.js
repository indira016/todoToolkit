import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";
import uiSlice from "./uiSlice";

const store=configureStore({
    reducer:{
        todo:todoSlice.reducer,
        ui:uiSlice.reducer
    }
})
export default store