import './App.css';
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h3>Tugas Naura</h3>

      <hr />

      <Outlet />

    </div>
  );
}

export default App;
