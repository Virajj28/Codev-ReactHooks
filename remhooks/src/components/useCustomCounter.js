import {useState} from 'react'

function useCustomCounter(initialCount, value) {
    const [count, setCount] = useState(initialCount)
    const increment = () => {
        setCount(prevState => prevState + value)
    }

    const decrement = () => {
        setCount(prevState => prevState - value)
    }

    const reset = () => {
        setCount(initialCount)
    }
    return [increment, decrement, reset, count]
}

export default useCustomCounter
