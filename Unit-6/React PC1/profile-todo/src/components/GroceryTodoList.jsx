import React from "react";

function TodoList({ title, id, status, handleDelete}){
    if(status === false){
    return <div style={{ color: "rgb(250, 95, 95)" }}>
        <p>{ title } </p>
        <button onClick={() => handleDelete(id)}>Delete</button>
        </div>
    }else if(status === true){
        return <div style={{ color: "rgb(100, 200, 100)" }}>
        <p>{ title }</p>
        <button onClick={() => handleDelete(id)}>Delete</button>
        </div>
    }
}

export { TodoList }