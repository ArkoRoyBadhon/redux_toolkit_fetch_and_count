import { configureStore } from '@reduxjs/toolkit'
import CounterSlice from '../components/features/counter/CounterSlice'
import postSlice from '../components/features/fetchData/postSlice'


const Store = configureStore({
    reducer: {
        counter: CounterSlice,
        posts: postSlice
    }
})


export default Store