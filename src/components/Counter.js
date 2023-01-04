import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { addData, minusData } from './features/counter/CounterSlice';


const Counter = () => {
    const data = useSelector(state => {
        // console.log(state);
        return state.counter.value;
    })

    const dispatch = useDispatch();


    return (
        <div>
            <h2>this is counter app</h2>
            <div className="">
                <button style={{ fontSize: "20px", fontWeight: "800", marginRight: "20px" }} onClick={()=> dispatch(minusData())}>-</button>
                <span>{data}</span>
                <button style={{ fontSize: "20px", fontWeight: "800", marginLeft: "20px" }} onClick={()=>dispatch(addData())}>+</button>
            </div>
        </div>
    );
};

export default Counter;