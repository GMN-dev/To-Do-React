import '../styles/item.css';
import Card from './Card';


export default function List(props){
    return(
        <> 
            <ul className="containerListItem">
                {props.listTask.map(
                    (item) => {
                        return <Card  key={item.id} item={item} onItemDeleted={props.onItemDeleted} onTaskCompleted={props.onTaskCompleted}></Card>}
                    )}
            </ul>   
        </>
    )

}