import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import {createStore} from 'redux'
// import birdApp from './store/birds/birds'
import reducerApp from './store/counter/counterReducer'

const store = createStore(reducerApp)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
   
  </React.StrictMode>,
)
