import styles from './App.module.css';
import List1 from './components/List1';
import List2 from './components/List2'

function App() {
  return (
    <div className={styles}>
      <div>
        <h1>Mobile Operating System</h1>
        <List1 />
      </div>
      <div>
        <h1>Mobile Manufactures</h1>
        <List2 />
      </div>
    </div>
  );
}

export default App;
