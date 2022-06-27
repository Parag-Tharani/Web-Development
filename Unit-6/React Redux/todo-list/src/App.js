import './App.css';
import { ScrollerMotion } from 'scroller-motion'
import { Routes,Route } from 'react-router-dom';
import { Login } from './components/Login/Login';
import { Todo } from './components/Home/Todo';

function App() {
  return (
    <ScrollerMotion>
    <div className="App">
      <Routes>
        <Route path='/' element={<Todo />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </div>
    </ScrollerMotion>
  );
}

export default App;
