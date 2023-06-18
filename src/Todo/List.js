import React from 'react'
import { MdDelete , MdEdit } from "react-icons/md";

function List({items , removeTodo , changeTodoStatus , editTodo}) {
  return (
    <React.Fragment>
        {
            items.map((myitem) => {
               const {id , item , isDone } = myitem ;
               return(
                 <li key={id}>
                    <p>
                        <input type="checkbox" checked={isDone} onChange={() => {
                            changeTodoStatus(id)
                        }}/>
                        <span className= {isDone ? 'line-through' : 'none'}>{item}</span>
                    </p>
                    <div className="btn-container">
                        <MdDelete className='btn-dlt' onClick={()=> {removeTodo(id)}}></MdDelete>
                        {
                          !isDone && <MdEdit className='btn-edit' onClick={() => {editTodo(id)}}></MdEdit>
                        }
                    </div>
                 </li> 
               )
            })
        }
    </React.Fragment>
  )
}

export default List