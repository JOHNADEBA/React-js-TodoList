import React, { useEffect, useState } from "react";
import Alert from './components/Alert'
import "./App.css";

const getLocalStorage = () =>{
  let todos = localStorage.getItem('todos')

  if(todos){
    return JSON.parse(localStorage.getItem('todos'))
  }
  else {
    return []
  }
}

const App = () => {
  const [todos, setTodos] = useState(getLocalStorage());
  const [inputText, setInputText] = useState("");
  const [userName, setUserName] = useState("");
  const [alert, setAlert] = useState({show:false, mgs:'vv', type:'' });

 
  const handleTodos = (e) => {
    e.preventDefault();

    if(inputText){
      showAlert(true, 'Todo Added', 'sucess')
      const person = { data: inputText, id: new Date().getTime().toString()};
     
      setTodos(todos =>{
                return [...todos, person]
            });

      setInputText('')
    }else{
      showAlert(true, 'Enter valid Credentials', 'danger')
      console.log('')
    }

         
  };

    const showAlert = (show=false, mgs ='', type='')=>{
      setAlert({show, mgs, type})
    }

  const del = (id)=>{
    showAlert(true, 'Todo Deleted', 'sucess')
     const filts = todos.filter(todo=>{
         return todo.id !== id
       })
       setTodos(filts)
    }

  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos) )
  },[todos])
  
  return (
    <div className="App">
      <header className=" ma2"> TODO LIST </header>
       {alert.show && <Alert {...alert} showAlert={showAlert} todoList={todos}/>}
      <form>
        {/* <div className='title'>

          <input type="name" id='title' name='title' placeholder='Enter your name'
           value={userName} onChange={(e)=>setUserName(e.target.value)}/> 
        
          <button className="button-todo" type="submit onClick={handleTitle}" 
          onClick ={handleTitle}>
            <i className="fas fa-plus-square"></i>
          </button>
        </div> */}
        

        <div className='display'>
          <input  type="text" id='todo' todo='name' className="input" 
          value={inputText} onChange = {(e)=>{setInputText(e.target.value)}}
            
          />
          <button className="button-todo" type="submit" onClick ={handleTodos}>
            <i className="fas fa-plus-square"></i>
          </button>
       
      {/* <div className="select">
        <select name="todos" id="choose-todo">
          <option value="all" onClick ={()=>{setTodos(todos)}}>ALL</option>
          <option value="completed">COMPLETED</option>
          <option value="uncompleted">UNCOMPLETED</option>
        </select>
      </div> */}
       </div>
    </form>

      {todos.length > 0 && (
        <div>
      {todos.map(todo =>{
        return(
            <Input  key={todo.id} {...todo} del={del} showAlert={showAlert} />
           
            )
          })}
          <button className='last-button' onClick={()=>{
            showAlert(true, 'All Todos Cleared', 'sucess')
            setTodos([])}
          }>DEL ALL TODOS</button>
        </div>
      )}
  </div>
  );
};

const Input = ({del, data, id, showAlert})=>{
   const [completed, setCompleted] = useState(false);

   const check = ()=>{
    setCompleted(!completed)

    if(completed){
      showAlert(true, 'Todo Not Completed', 'danger')
    }
    else{
      showAlert(true, 'Todo Completed', 'sucess' )
    }
  }

  return  <div    className='todo-body'> 
                <ul className='todolist '>
                  <div className="todo">
                    
                    <li className={`${completed && 'completed'} todo-li `}  >{data}</li>
                    <button className='complete-btn' onClick ={check}><i className=" fas fa-check"></i></button>
                    <button className='trash-btn' onClick={()=>del(id)}><i className=" fas fa-trash"> </i> </button>
                  </div>
                
                </ul>
            </div>
}

export default App;
