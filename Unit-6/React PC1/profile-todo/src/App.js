import './App.css';
import { Profile } from "./components/Profile.jsx"
import { Todo } from "./components/GroceryTodo"
import React from 'react';

function App() {

  return (
    <>
    <div id="profile"><Profile name={"Parag Tharani"} age={20} location={"Indore"} org={"Masai School"} /></div>
    <div id="todo"><Todo /></div>
    </>
  );
}

export default App;
