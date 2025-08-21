import React, { useState } from 'react';
import Todo from './components/Todo';
import './App.css';

function App() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const addTodo = () => {
        if (inputValue) {
            setTodos([...todos, inputValue]);
            setInputValue('');
        }
    };

    const removeTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

    return (
        <div className="App">
            <h1>React To-Do Application</h1>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Add a new to-do"
            />
            <button onClick={addTodo}>Add</button>
            <ul>
                {todos.map((todo, index) => (
                    <Todo key={index} index={index} todo={todo} removeTodo={removeTodo} />
                ))}
            </ul>
        </div>
    );
}

export default App;