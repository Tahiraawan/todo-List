import userSliceReducer from './userSlice'
import { configureStore } from "@reduxjs/toolkit";
//create store..
export const store=configureStore({
reducer:{
user: userSliceReducer
}
});