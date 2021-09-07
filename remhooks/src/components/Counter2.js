import React,{useState,useEffect} from 'react'
import useCustomCounter from './useCustomCounter'

function Counter2() {
    const [increment,decrement,reset,count]= useCustomCounter(10,10)
    
    return (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default Counter2
