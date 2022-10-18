import { createContext, useState } from 'react';

export const TodoContext = createContext(null);

export const TodoContextProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);
    const [state, setState] = useState({
        todoTitle: "",
        todoDesc: "",
    });

    const removeTodo = (todo) => {
        setTodos(todos.filter((e) => {
            return e !== todo;
        }));
    }

    const handleTitle = (e) => {
        setState({
            ...state,
            todoTitle: e.target.value
        });
    }
    const handleDesc = (e) => {
        setState({
            ...state,
            todoDesc: e.target.value
        });
    }
    const addTodo = (e) => {
        e.preventDefault();
        if (state.todoTitle === '' || state.todoDesc === '') {
            alert('All the fileds are mandatory.');
            return;
        }
        setTodos(
            [...todos, state]
        );
        setState({
            todoTitle: "",
            todoDesc: "",
        })
    }
    const value = {
        todos,
        setTodos,
        state,
        setState,
        removeTodo,
        handleTitle,
        handleDesc,
        addTodo
    };

    return (
        <TodoContext.Provider value={value}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContext;