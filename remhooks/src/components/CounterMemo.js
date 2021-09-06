import React,{useState, useMemo} from 'react'

function CounterMemo() {
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const incrementCounterOne = () => {
        setCounterOne(counterOne + 1)
    }

     const incrementCounterTwo = () => {
        setCounterTwo(counterTwo + 1)
    }

    const isEven = useMemo(()=>{
        let i = 0
        while(i < 2000000000) i++
        return counterOne % 2 === 0     
    }, [counterOne])

    return (
        <div>
            <div>
            <button onClick={incrementCounterOne}>Increment Counter One {counterOne}</button>
            <span>{isEven ? 'Even': 'Odd'}</span>
            </div>
            <div>
            <button onClick={incrementCounterTwo}>Increment Counter Two {counterTwo}</button>
            </div>
        </div>
    )
}

export default CounterMemo
