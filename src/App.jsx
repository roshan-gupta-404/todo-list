import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './contexts/TodoContext'
import TodoItem from './components/TodoItem'
import TodoForm from './components/TodoForm'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [...prev, { id: Date.now(), ...todo }])
  }
  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((eachTodo) => eachTodo.id === id ? todo : eachTodo))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((eachTodo) => eachTodo.id !== id))
  }

  const toggleComplete = (id) => {
    console.log('toggle from app called');
    setTodos((prev) => {
      console.log(prev);
      return prev.map((eachTodo) => {
        return ((eachTodo.id === id) ? ({ ...eachTodo, completed: !(eachTodo.completed) }) : eachTodo)
      })
    })
    console.log(todos);
  }

  // SETTING TODOS INTO LOCALSTORAGE.
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos')) // getItem will return a strings so we will convert it into object.
    if (todos && todos.length > 0) setTodos(todos)
  }, [])

  // GETTING TODOS FROM LOCALSTORAGE.
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos)) // Converting object into string for storing into localstorage.
  }, [todos])

  return (
    <TodoProvider value={{ addTodo, deleteTodo, updateTodo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            <TodoForm />
            {todos.map((todo) => (
              <div
                key={todo.id}
                className='w-full'
              >
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
