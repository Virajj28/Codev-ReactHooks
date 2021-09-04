import React,{useEffect, useState} from 'react'

function EffectCounter() {
    const [count, setCount] = useState(0);

    const tick = () => {
        setCount(prevCount => prevCount + 1); //2nd approach give prevState for setCount
    }

    useEffect(() => {
        function doSomething() {
            console.log('someProps');
        }
        doSomething();
        const interval = setInterval(tick, 1000);
        return () => {
            clearInterval(interval);
        }
    }, []); //1st approach give count in dependency array

    return (
        <div>
          <h1> {count} </h1>
        </div>
    )
}

export default EffectCounter
