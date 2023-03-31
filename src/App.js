import { Outlet } from 'react-router-dom';
import './App.scss';
import Slider from './components/Slider';
import { Data } from './components/Data';

function App() {
  return (
    <div className="App">
      <h1 className='zoo'>THE ZOO</h1>
      <h5>" Unleash Your Inner BEAST "</h5>
      <Slider slides={Data} />
      <Outlet/>
    </div>
  )
}

export default App;
