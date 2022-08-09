// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";


function App() {
    return (
        <div className="App">
            <div className='container bg-white p-4 mt-5'>
                <header className="App-header">ToDo List</header>
                <AddTodo/>
                <TodoList/>
            </div>
        </div>
    );
}

export default App;
