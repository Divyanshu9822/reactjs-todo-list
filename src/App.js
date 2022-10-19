
import AddToDo from "./components/AddToDo";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { TodoContextProvider } from "./context/TodoContext";

function App() {
  
  // useEffect(() => {
  //   const todosStored = JSON.parse(window.localStorage.getItem('key'));
  //   if (todosStored !== null) { setTodos(todosStored) }
  // }, [])
  
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
