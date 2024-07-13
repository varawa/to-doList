import React from "react" ;
import ReactDom from "react-dom/client" ;
import TaskForm from "./components/TaskForm";
import Task from "./components/Task";

const App = () =>{
    return(
        <>
            <TaskForm />
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
        </>
    );
}

export default App ;