import React from 'react'
import '../styles/CreateTodoButton.css'

const CreateTodoButton = () => {

    const onClickButton = (msg) => {
        alert(msg)
    }

    return (
        <button 
        className='CreateTodoButton'
        onClick={() => onClickButton('Aquí se abre el modal')}
        >+</button>
    );
}

export  {CreateTodoButton};