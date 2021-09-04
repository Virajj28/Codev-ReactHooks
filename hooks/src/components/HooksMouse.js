import React,{useEffect,useState} from 'react'

function HooksMouse() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const handleMouseMove = (event) => {
        // console.log('Mouse Event')
        setX(event.clientX)
        setY(event.clientY)
    }

    useEffect(() => {
        console.log('useEffect')
        window.addEventListener('mousemove', handleMouseMove)

        return () => {
            console.log('cleanup')
            window.removeEventListener('mousemove', handleMouseMove)
        }
    },[])

    return (
        <div>
            Hooks X: {x} , Y: {y}
        </div>
    )
}

export default HooksMouse
