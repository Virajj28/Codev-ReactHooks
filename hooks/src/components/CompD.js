import React,{useContext} from 'react'
import {CountContext} from '../App'

function CompD() {
    const countContext = useContext(CountContext)
    return (
        <div>
            CompD
            <button onClick={()=>countContext.countDispatch('increment')}>Increment</button>
            <button onClick={()=>countContext.countDispatch('decrement')}>Decrement</button>
            <button onClick={()=>countContext.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default CompD