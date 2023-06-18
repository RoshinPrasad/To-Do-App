import React, { useEffect } from 'react'


function Alert({ msg , type , removeAlert , todoList}) {
  useEffect(() => {
    const timeOut  = setTimeout(() => {
        removeAlert();
    } , 2000)
  
    return () => {
      clearTimeout(timeOut);
    }

  },[removeAlert, todoList])
  
  
  return (
    <div className = {`alert ${type}`}>
     {msg}
    </div>
  )
}

export default Alert