import React from 'react'
import Todo from "../components/Todo";
import TodoContext from "../context/TodoContext";
import { useContext } from 'react';

const TodoList = () => {
  const { todos } = useContext(TodoContext);

  return (
    todos.length > 0 ?
      (<div className="container">
        <h4 className="mt-3 mb-2">Your Todos List</h4>
        {
          todos.map((todo, index) => {
            return <Todo key={index} todo={todo} />
          })
        }
      </div>) : (
        <div className='mt-5 text-center'>
          <h5>No Todos to display</h5>
          <h1>Add todos from above</h1>
        </div>)
  )
}

export default TodoList;