import React,{useState,useEffect} from 'react'
import useCustomCounter from './useCustomCounter'

function Counter1() {
    const [increment,decrement,reset,count]= useCustomCounter(1,2)

    return (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default Counter1
