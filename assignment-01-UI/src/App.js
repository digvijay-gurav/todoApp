import './App.css';
import { useSelector } from "react-redux";
import TodoList from './components/TodoList';

function App() {
  const state = useSelector((state)=> ({...state}));
  console.log("state", state);
  return (
    <div id="App" className="App">
        <TodoList />
    </div>
  );
}

export default App;
