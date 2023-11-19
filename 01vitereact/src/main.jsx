import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// const reactElement = {
//   type: "a",
//   props:{
//       href: "https://google.com",
//       target:'_blank'
//   },
//   children: 'click me to visit google'
// }

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)


//react mai khud ka ek syntax hota h element create karne ka 
//jo variable hum inject karte h vo yha par tree banne ke baad inject hote h nichee tohh dekho

const anotherUser =  "Deepak"
const reactElement = React.createElement(
  'a',
  {href:"https://google.com", target:"_blank"},
  'Click me to visit google',
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
    reactElement

)
