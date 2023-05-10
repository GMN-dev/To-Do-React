import React, { useState } from "react";
import List from "./components/List";
import TodoForm from "./components/TodoForm";
import Item from "./item";


export default function Todo(){

    let [listTask, setListTask] = useState([])

    function updateListTask(task){
        let t = new Item(task);
        setListTask([...listTask, t]);
    }
    
    function onItemDeleted(itemId){
        let filtered = listTask.filter((item => item.id !== itemId));
        setListTask(filtered);
    }

    function onTaskCompleted(itemId){
        let updatedListTask = listTask.map((obj)=>{
            if(obj.id === itemId){
                obj.status = !obj.status;
            }
            return obj;
        })      
        setListTask(updatedListTask);
    }

    return( 
        <>
            <div className="container">
                <h1>To-do</h1> 
                <TodoForm onSetListTask={updateListTask} ></TodoForm>

                <List onItemDeleted={onItemDeleted} onTaskCompleted={onTaskCompleted} listTask={listTask} ></List>
            </div>
        </>
    )
}

