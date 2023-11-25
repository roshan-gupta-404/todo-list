import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext';

function TodoForm() {
    const [todo,setTodo] = useState("")
    const {addTodo} = useTodo()
    const handleSubmitBtn = (e)=>{
        e.preventDefault()

        if(!todo) return // if todo is not set return.
        addTodo({todo:todo,completed:true}) // adding todo in list.
        setTodo('') // emptying form input field
    }

    return (
        <form onSubmit={handleSubmitBtn}  className="flex w-full">
            <input
                value={todo} //wiring up form input with todo variable.
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                onChange={(e)=>{setTodo(e.target.value)}}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

