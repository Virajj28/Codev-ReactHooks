import React,{useState} from 'react'
import useInputCustom from './useInputCustom'

function Form() {
    const [firstName, bindFirstName, resetFirstName]=useInputCustom('')
    const [lastName, bindLastName, resetLastName]=useInputCustom('')

    const submitHandler = e => {
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                <label>First Name</label>
                <input
                    {...bindFirstName}
                 type="text" 
                />
                </div>
                <div>
                <label>Last Name</label>
                <input 
                    {...bindLastName}
                type="text" 
                />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form
