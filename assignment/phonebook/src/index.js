import React from 'react'
import ReactDOM from 'react-dom'
import App from "./App"
const person = [
    {
      id:1,
      name:bharatjadhav
    }
    
  ]

ReactDOM.render(
    <App person={person} />,
    document.getElementById('root')
  )