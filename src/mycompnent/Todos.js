import React from 'react'
import {Todoitem} from "./Todoitem";
export const Todos = (props) => {
    
    return (
    
       <div className="container">
           <div className="card">
           <h3>Todos list </h3>
           {props.todos.map((todo)=>{
              return <Todoitem todo={todo} /> 
           })}
          
            </div>
        </div> 
    )
}
