import React from "react";

function TodoInput({ handleData }){

    return <div id="todoInput">
        <input
         placeholder="Add Groceries..."
         type="text"
         id="inputTitle"/>
        <input type="checkbox" id="checkBox"/>
        <button onClick={() => handleData(document.getElementById("inputTitle").value,document.getElementById("checkBox").checked)} >Add</button>
    </div>
}

export { TodoInput }