import { useState } from "react"
import '../styles/form.css';

export default function TodoForm(props){
   
    let [text, setText] = useState()  


     function handleChange(event){
        setText(event.target.value);
    }


    function addItem(event){
        // Essa linha previne o comportamento padrão do evento (nesse caso, previne o comportamento do form)
        event.preventDefault()

        if (text){
            props.onSetListTask(text)

            // Setando o texto para uma string vazia, isso fara com que o input volte ao estado em branco
            setText('')
        }else(
            alert("Insira uma atividade válida")
        )        
    }
    
    
    return (
        <form className="form" action="#">
            <input className="input-task" placeholder='"fazer dever de casa..."' onChange={handleChange} value={text || ''} type="text"/>
            <button className="add-button" onClick={addItem}><img src="/images/add.png" alt="" /></button>
        </form>
    )

}