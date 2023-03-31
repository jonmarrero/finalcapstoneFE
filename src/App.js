import React, {useState, useEffect} from 'react'
import { Outlet } from 'react-router-dom';
import './App.scss';
import Slider from './components/Slider';
import { Data } from './components/Data';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])
  return (
    <div className="App">
      {
        loading ?
        
        <ClimbingBoxLoader
        color={"rgba(178, 31, 31, 0.955)"}
        loading={loading}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
      />

        : 

        // <h1 className='zoo'>THE ZOO</h1>
        <h4>" Unleash Your Inner BEAST "</h4>
      }
      <h1 className='zoo'>THE ZOO</h1>
      <div className='search'>Search</div>
      <div className='login'>Log In / Sign-Up</div>
      <div className='programs'>Programs</div>
      <div className='meals'>Meal Plans</div>
      <Slider slides={Data} />
      <Outlet/>
    </div>
  )
}

export default App;
