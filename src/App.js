import './App.css';

import React from "react" ;
import TaskForm from "./components/TaskForm";
import Task from "./components/Task";

const App = () =>{
    return(
        <main>
            <TaskForm />
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
        </main>
    );
}

export default App ;