import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './App.css'
import { decrement, increment } from './store/counter/counterReducer'

const App = () => {
    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch()
    console.log(count);
  
    return (
      <div className='wrapper'>
        <div className='col'>
          <h1>People Counter</h1>
          <h4>Counter: {count}</h4>
          <div className='btn'>      
              <button className="add" onClick={() => dispatch(increment())}>+</button>
              <button className='sub' onClick={() => dispatch(decrement())}>-</button>   
          </div>
        </div>
      </div>
    )
  }
  
export default App