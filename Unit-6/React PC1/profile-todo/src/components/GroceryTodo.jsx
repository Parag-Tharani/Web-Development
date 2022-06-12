import React from "react";
import { TodoInput } from "./GroceryTodoInput";
import { TodoList } from "./GroceryTodoList";
import{ v4 as uuid} from "uuid"

function Todo(){
    
    const [data, addData] = React.useState([
        {
            title: "Eat",
            status: true,
            id: 1
        },
        {
            title: "Sleep",
            status: false,
            id: uuid()
        },
        {
            title: "Code",
            status: true,
            id: uuid()
        }
    ]);

    const handleData = (title,status) => {

        const dataFormat = {
            title,
            status,
            id: uuid()
        }
        
        if(title !== ""){
        addData([...data, dataFormat])
        }
  }

  const handleDelete = (id) => {
      const updataData = data.filter( (items) => items.id !== id);

      addData(updataData);
  }


    return <>
        <h2>Grocery Todo List</h2>
        <TodoInput handleData={ handleData } />
        <div id="todoList">{ data.map(items => <TodoList key={items.id} {...items} handleDelete={handleDelete} />)}</div>
    </>
}

export { Todo }