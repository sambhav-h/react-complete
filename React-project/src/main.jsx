import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
 
import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h1>custom app !</h1>
    </div>
  )
}

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

const anotherUser = "sambhav"
const reactElement = React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'click me to visit google',
  anotherUser
)

createRoot(document.getElementById('root')).render(
  // <App/>
  reactElement
)
