import { Outlet } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <div className="App">
      <h1>THE ZOO</h1>
      <img src="https://media.istockphoto.com/id/519358607/vector/angry-lion.jpg?s=612x612&w=0&k=20&c=_nH5ufQZKUKDR46GKyxiEdapzxHEzTnciLjuIvhMaPA="></img>
      <Outlet/>
    </div>
  );
}

export default App;
