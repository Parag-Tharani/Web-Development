import React from "react";
import { TodoInput } from "./GroceryTodoInput";
import { TodoList } from "./GroceryTodoList";

function Todo(){
    
    const [data, addData] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(false);
    const [page, setPage] = React.useState(1);
    const PageLimit = 5

    const fetchData = () => {
        setLoading(true);
        fetch(`http://localhost:8080/todos?_page=${page}&_limit=${PageLimit}`)
        .then((res) => res.json())
        .then((res) => { addData(res); setLoading(false) })
        .catch(() => { setError(true); addData([]); setLoading(false)})
    }

    React.useEffect(() => {
        fetchData()
        // eslint-disable-next-line
    },[page])



    const handleData = (title,status) => {

        const dataFormat = {
            title,
            status
        }
        
        if(title !== ""){
        fetch(`http://localhost:8080/todos`,{
            method: "POST",
            body: JSON.stringify(dataFormat),
            headers: {
                "content-type" : "application/json"
            }
        })
        .then((res) => res.json())
        .then((res) => {return fetchData()})
        .catch(() => {setError(true); setLoading(false)})
        }
  }

  const handleDelete = (id) => {

    fetch(`http://localhost:8080/todos/${ id }`,{
        method: "DELETE",
    })
    .then((res) => res.json())
    .then(() => {return fetchData()})
    .catch(() => {setError(true); setLoading(false)})
  }

    return loading ? (<h2> Please Wait <br />Loading ahead...</h2>)
    : error ? (<h2> Please start Json-server at Port 8080 :( </h2>)
    : ( <>
        <h2>Grocery Todo List</h2>
        <TodoInput handleData={ handleData } />
        <div id="todoList">{ data.map(items => <TodoList key={items.id} {...items} handleDelete={handleDelete} />)}</div>
        <div id="pageShift">
            <button onClick={() => setPage(page - 1)} disabled={page === 1} >Prev</button>
            <button onClick={() => setPage(page + 1)} disabled={page === Math.ceil(10/PageLimit)}>Next</button>
            </div>
        </>
        )
}

export { Todo }