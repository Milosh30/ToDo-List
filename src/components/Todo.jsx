import React from "react";
import { useState, useEffect } from "react";
import TodoList from "./todoList";


const ToDo = () => {
 
    const [task, setTask] = useState("");
    const [todos, setTodos] = useState([])

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("todos"))
        if(saved) setTodos(saved)

    }, [])

      useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);




    const addTask = () => {
        if(task.trim()=== "")
        return;
        setTodos([...todos, {text : task, completed: false}])
        setTask("   ")
    }

    const toggleTaks = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed
        setTodos(newTodos);
    }

    const deleteTaks = (index) => {
        const newTodos = todos.filter((_, i) => i !== index)
        setTodos(newTodos)

    }

    return(
        <div className="ToDo">
            <h1>Todo List</h1>
            <div className="input-group">
                <input 
                type="text"
                value={task}
                placeholder="Add new task"
                onChange={(e ) => setTask(e.target.value)}
                ></input>   
                <button onClick={addTask}>Add new</button>

            </div>
            <TodoList todos={todos} toggleTaks={toggleTaks} deleteTaks={deleteTaks}></TodoList  >
        </div>
    )
}

export default ToDo;