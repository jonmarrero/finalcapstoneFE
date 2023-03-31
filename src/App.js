import { Outlet } from 'react-router-dom';
import './App.scss';
import Slider from './components/Slider';
import { Data } from './components/Data';
// import { useState } from 'react';

function App() {
  // const [query, setQuery] = useState(""
  // )
  return (
    <div className="App">
      <h1 className='zoo'>THE ZOO</h1>
      <h4>" Unleash Your Inner BEAST "</h4>
      <div className='search'>Search</div>
      <div className='login'>Log In / Sign-Up</div>
      <div className='programs'>Programs</div>
      <div className='meals'>Meal Plans</div>
      {/* <input type="text" onChange={e => setQuery(e.target.value)} /> */}
      <Slider slides={Data} />
      <Outlet/>
    </div>
  )
}

export default App;
