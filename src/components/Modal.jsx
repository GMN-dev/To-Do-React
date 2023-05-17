import TodoForm from "./TodoForm"
import "../styles/modal.css";

export default function Modal(props){
   
    return(
        <div id='fora' onClick={props.onHideModal} className={props.show === true ? "fundo-modal" : "fundo-modal disable"}>
            <TodoForm onSetListTask={props.onSetListTask}></TodoForm>
        </div>
    )
}