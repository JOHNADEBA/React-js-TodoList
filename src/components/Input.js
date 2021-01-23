import React from "react";
import TodoList from "./Alert";

const Input = ({ setInputText }) => {
  const [inputText, setInputText] = useState("");

  const inputTextHandler = (e) => {

    console.log(e.target.value);
    
  };
  return (
    <form>
      <div>
        <input onChange={inputTextHandler} type="text" className="input" value={inputText} 
         onChange = {(e)=>{setInputText(e.event.target)}}
        />
        <button className="button-todo" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
      </div>
      <div className="select">
        <select name="todos" id="choose-todo">
          <option value="all">ALL</option>
          <option value="completed">COMPLETED</option>
          <option value="uncompleted">UNCOMPLETED</option>
        </select>
      </div>
      
    </form>
  );
};

export default Input;
