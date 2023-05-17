import React, { useEffect, useState } from "react";
import List from "./components/List";
import Item from "./item";
import Modal from "./components/Modal";
// import Cabecalho from "./components/Cabecalho
import './styles/button.css'
import './styles/cabecalho.css'

export default function Todo(){

    let [listTask, setListTask] = useState(localStorage.getItem('listTask') ? JSON.parse(localStorage.getItem('listTask')) : [])
    
    let [show, setShow] = useState(false)

    function hideModal(e){
        let event = e.target;
        if (event.id === "fora"){
            setShow(false)
        }
    }

    useEffect(()=>{
        let lista = JSON.stringify(listTask);
        localStorage.setItem('listTask', lista)
    }, [listTask])

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
        <Modal show={show} onHideModal={hideModal} onSetListTask={updateListTask}></Modal>
            <div className="container">
                <header className="container-cabecalho">
                    <h1>
                        To-do
                    </h1>
                    <button className="add-button" onClick={()=>{setShow(true)}} ><img src="/images/add.png" alt="add" /></button>
                </header> 
                {/* <TodoForm onSetListTask={updateListTask} ></TodoForm> */}
                <List onItemDeleted={onItemDeleted} onTaskCompleted={onTaskCompleted} listTask={listTask}></List>
            </div>
        </>
    )
}

