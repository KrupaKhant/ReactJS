import React,{useReducer,useState} from "react";

const initialState = [];
let cnt = 0;

const todoreducer = (state,action) => {
  switch(action.type){
    case 'add_todo':
      cnt++;
      return[...state,{id: cnt, text: action.text, completed: false}]
    case 'toggle_todo':
      return state.map(todo => 
        todo.id === action.id ? {...todo, completed: !todo.completed} : todo)
    case 'delete_todo' :
      return state.filter(todo => todo.id !== action.id)
    default: 
        return state;
  }
}

const App = () => {
  const [todos,dispatch] = useReducer(todoreducer,initialState);
  const [newtodo, settodo] = useState('');

  const addtodo = () => {
    if(newtodo.trim() !== ""){
      dispatch({type: 'add_todo', text: newtodo});
      settodo("");
    }
  }

  const todotoggle = (id => {
    dispatch({type: 'toggle_todo', id});
  })

  const tododelete = (id => {
    dispatch({type: 'delete_todo', id});
  })

  return(
    <div>
      <input
      type="text"
      value={newtodo}
      onChange = {e => settodo(e.target.value)}
      placeholder = "Enter a todo"
      />
      <button onClick={addtodo}>Add</button>
      
      <ul>
        {todos.map(todo => (
          <li
          key={todo.id}
          style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
          {todo.text}
          <button onClick={()=>todotoggle(todo.id)}>Toggletodo</button>
          <button onClick={()=>tododelete(todo.id)}>Delete</button>

          </li>
        ))}
      </ul>
    </div>
  )
}

export default App;
