//import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

export function TodoInput({onAdd}){
  let [value, setValue] = useState("");
  return (
    <div>
      <input type="text" value={value} onChange={(e) =>{setValue(e.target.value);}} />
      <button
       onClick ={ () => {
        onAdd(value);
        setValue(""); 
       }
       }
       >
        Add todo 
      </button>
    </div>
  );
}

export function TodoList ({items,onDelete}){
  return (
    <ul>
      {items.map((item)=>(
        <TodoItem
        key={item.id}
        value={item}
        onDelete={() =>{
          onDelete(item);
        }
        }
        /> 

      )

      )
      }
    </ul>
  );
}

export function TodoItem ({value,onDelete}) {
  return(
    <li>
      <input type="checkbox" checked={value.completed} />
      {value.label}
      <button onClick={() => onDelete()}>X</button>
    </li>
  );
}

 export function App() {
  const [items,setItems] = useState([
{id: 1, label:"Item1", completed:true},
{id: 2, label:"Item2",completed:false},
  ]);
  return(
    <div>
      <TodoInput
      onAdd={(value) =>{
        setItems([
          ...items,
          {id:Math.random(),label:value,completed :false},
        ])
      }
      }
      />
      <TodoList items={items} onDelete={(item) =>{
setItems(items.filter((todoItem) => todoItem.id !== item.id ))
      }}/>
    </div>
  );
  
} 



