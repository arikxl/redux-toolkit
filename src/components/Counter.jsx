import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { increment, decrement, increaseAmount } from '../redux/slice/counterSlice';

const Counter = () => {

    const counter = useSelector(state => state?.counter?.value)
    const dispatch = useDispatch();

    return (
        <div>
            <h2>counter: {counter}</h2>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(increaseAmount(5))}>Increase By 5</button>
        </div>
    )
}

export default Counter
