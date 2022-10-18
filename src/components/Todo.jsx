import React from 'react'
import TodoContext from "../context/TodoContext";
import { useContext } from 'react';
import { useState } from 'react';
const Todo = (props) => {
    const { todos, setTodos, removeTodo } = useContext(TodoContext);
    // console.log(todos)
    const [isEdit, setIsEdit] = useState(false);
    const [editState, setEditState] = useState(props.todo.todoDesc);
    // console.log('in top', editState)
    
    const handleTodoTaskEdit = (e) => {
        setEditState(e.target.value);
    }
    // console.log('below edit task',editState.todoDesc)
    const addEditedTodoTask = (e) => {
        // console.log(todos)
        const newTodos = todos.map(todo => {
            if (todo === props.todo) {
                // console.log('before todo update',todo)
                return { ...todo, todoDesc: editState }
            }
            return todo;
        })
        // console.log('after todoupdate',props.todo)
        setTodos(newTodos);
        // console.log(todos)
        setIsEdit(false);
        // setEditState({todoDesc:""})
    }
    // console.log('in last', editState)

    if (isEdit) {
        return (
            <div className="card mb-2">
                <div className="card-header">
                    <h5 className="card-title">{props.todo.todoTitle}</h5>
                </div>
                <div className="card-body">
                    
                        <input type="text" className="form-control" id='editTodo' placeholder="Edit task" value={editState} onChange={handleTodoTaskEdit} />
                        <div className="d-flex flex-row-reverse mt-2">
                            <div className="btn btn-success" onClick={addEditedTodoTask}>Save changes</div>
                            <div className="btn btn-danger mx-1 px-3" onClick={() => { setIsEdit(false) }}>Cancel</div>
                        </div>
                    
                </div>
            </div>
        )
    } else {
        return (
            <div className="card mb-2">
                <div className="card-header">
                    <h5 className="card-title">{props.todo.todoTitle}</h5>
                </div>
                <div className="card-body">
                    <p className="card-text">{props.todo.todoDesc}</p>
                    <div className="d-flex flex-row-reverse">
                        <div className="btn btn-danger" onClick={() => { removeTodo(props.todo) }}>Delete</div>
                        <div className="btn btn-primary mx-1 px-4" onClick={() => {setIsEdit(true)}}>Edit</div>
                    </div>
                </div>
            </div>
            
            
        )
    }

}

export default Todo