import Check from "./Check";
import Trash from "./Trash";

export default function Card(props){
    let isCompleted = props.item.status ? 'completed' : '';

    return(
        <div className="containerTask">
            <p className={isCompleted}>{props.item.name}</p>
            <div className="containerCheck">
                <button className="btn" onClick={() => { props.onTaskCompleted(props.item.id)}}><Check status={isCompleted}></Check></button>
                <button className="btn" onClick={() => { props.onItemDeleted(props.item.id) }} > <Trash /> </button>
            </div>
        </div>
    )
}