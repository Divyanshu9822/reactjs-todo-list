import React from 'react'
import { useContext } from 'react'
import TodoContext from "../context/TodoContext";
const AddToDo = () => {
      const { state, handleTitle, handleDesc, addTodo } = useContext(TodoContext);
    
    return (
        <div className='container mt-3'>
            <div className='mb-1'><h4>Add New Todo</h4></div>
            <form className='p-4 border border-dark rounded' onSubmit={addTodo}>
                <div className="form-group">
                    <label htmlFor="todoTitle">ToDo Title</label>
                    <input type="text" className="form-control" id='todoTitle' placeholder="Enter todo title" value={state.todoTitle} onChange={handleTitle}/>
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="todoTask">ToDo Task</label>
                    <input type="text" className="form-control" id="todoTask" placeholder="Enter todo task" value={state.todoDesc} onChange={handleDesc}/>
                </div>
                <button type="submit" className="btn btn-success mt-3">Add Todo</button>
            </form>
        </div>
    )
}

export default AddToDo;