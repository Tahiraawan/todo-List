import { createSlice } from "@reduxjs/toolkit";
//1 create initial state
const initialState={
    userId:null,
    userName:null,
    isLoggedIn:false
}
//2.. create slice ..using function that import ..and the pass an object
export const userSlice=createSlice({
    //1.name
    //2.initial value
    //3.reducer function ka object(define all actions )
    name:'user',
    initialState,//initialState:initial state
    reducers:{
        //action=>initial state
        //action=> dispatch(type,payload)
        loginUser:(state,action)=>{
            state.userName=action.payload.userName;
            state.userId=action.payload.userId;
            state.isLoggedIn=true
        },
        // logoutUser:(state)=>{
        //     state.userName=null;
        //     state.userId=null;
        //     state.isLoggedIn=false;
        // }
    }
});
export const selectUserName=(state)=>state.user.userName;
export const selectUserId=(state)=>state.user.userId;
export const selectIsLoggedIn=(state)=>state.user.isLoggedIn;
export const {loginUser,logoutUser}=userSlice.actions;
export default userSlice.reducer;