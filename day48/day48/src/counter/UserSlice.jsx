import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: ["soundous"],   
};
export const userSlice=createSlice({
    name: 'user',
    initialState,
    reducers:{
        addName : (state,action)=>{
            state.value.push(action.payload);
        },
        removeName : (state,action)=>{
            state.value.filter((n)=>n!=action.payload);
        },
    },
});

export const {addName, removeName} =userSlice.actions;

export default userSlice.reducer;

