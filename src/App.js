import { useEffect } from "react";
import AddToDo from "./components/AddToDo";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { useContext } from "react";
import TodoContext from "./context/TodoContext";
import { TodoContextProvider } from "./context/TodoContext";

function App() {

  const { todos, setTodos } = useContext(TodoContext);
  useEffect(() => {
    const todosStored = JSON.parse(localStorage.getItem('TODO_KEY'));
    if (todosStored) { setTodos(todosStored) }
  }, [])

  useEffect(() => {
    localStorage.setItem('TODO_KEY', JSON.stringify(todos));
  }, [todos])


  return (
    <TodoContextProvider>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={
              <>
                <AddToDo />
                <TodoList />
              </>
            } />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </Router>
      </div>
    </TodoContextProvider>
  );
}

export default App;
