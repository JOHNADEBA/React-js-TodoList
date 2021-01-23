import React,{useEffect} from "react";

const Alert = ({mgs, type, showAlert, todoList}) => {  
  useEffect(()=>{
    const timeout = setTimeout(()=>{
      showAlert();
    }, 2000)
    return ()=> clearTimeout(timeout)
  },[todoList]);

  return <p className= {`alert ${type}`} > {mgs} </p>
  
}

export default Alert;
