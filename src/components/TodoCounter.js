import React from 'react'
import '../styles/TodoCounter.css'

const TodoCounter = ({total, completed}) => {
    return (
        <h2 className='TodoCounter'>Has completado <span>{completed}</span> de <span>{total}</span> TODOs</h2>
    );
}

export {TodoCounter};