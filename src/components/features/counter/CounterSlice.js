import { createSlice } from "@reduxjs/toolkit";


const initialState = { value: 0 }

export const CounterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        addData: (state) => {
            state.value = state.value + 1;
        },
        showData: (state) => {
            state.value = state.value + 0;
        },
        minusData: (state) => {
            state.value = state.value - 1;
        }
    }
})

export const { addData, showData, minusData } = CounterSlice.actions;
export default CounterSlice.reducer;
