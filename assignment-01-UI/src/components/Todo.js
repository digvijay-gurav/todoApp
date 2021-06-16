import React, { useState } from 'react';
import "./Todo.css";
import { TransitionGroup, CSSTransition} from "react-transition-group";

const Todo = ({toggleTodo, task, completed, id, removeTodo, updateTodo}) => {
    const [isEditing, setEditing] = useState(false);
    const [editTask, setEditTask] = useState(task);

    const handleUpdte = (e) => {
        e.preventDefault();
        updateTodo(id, editTask);
        setEditing(false);
    }
    return (
       <TransitionGroup className={completed ? "Todo completed": "Todo"}>
           {isEditing ? (
               <CSSTransition key="editing" timeout={500} classNames="form">
                    <form className="Todo-edit-form" onSubmit={handleUpdte}>
                        <input 
                        type="text"
                        value={editTask} 
                        onChange={(e)=> setEditTask(e.target.value)} />
                        <button>Save</button>
                    </form>
               </CSSTransition>
           ): (
            <CSSTransition key="normal" timeout={500} classNames="task-text">
                <li className="Todo-task" onClick={toggleTodo}>
                    {task}
                </li>
            </CSSTransition>
           )}

           <div className="Todo-buttons">
                <button onClick={()=>setEditing(true)}>
                    <i className="fas fa-pen" />
                </button>
                <button onClick={removeTodo}>
                    <i className="fas fa-trash" />
                </button>
           </div>
       </TransitionGroup>
    )
}

export default Todo;
