import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos:[
        // sample todo
        {
            id:Date.now(),
            todo:"to do message",
            completed:false
        }
    ],
    addTodo:(todo)=>{},
    updateTodo:(id, todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{},
})

export const useTodo = ()=>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider
con