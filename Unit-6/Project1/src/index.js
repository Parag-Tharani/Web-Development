import React from "react"
import ReactDOM from "react-dom"
import ('../Style/index.css')


ReactDOM.render(
    [
    <img src='../logo/logo.png'></img>,
    <h1>NotePad</h1>
    ]
    ,
    document.getElementById("navBar")
)

ReactDOM.render(
    [
        <input type="text" id="noteInput"></input>,
        <button onClick={displayData}>Enter</button>
    ],
    document.getElementById("input")
)

function displayData(){

    if(document.getElementById("noteInput").value != ""){

    var p = document.createElement("p")
    p.innerText = document.getElementById("noteInput").value;
    document.getElementById("noteInput").value = ""
    
    document.getElementById("output").append(p);
    }
}