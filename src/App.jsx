import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "../src/Home"
function App() {
  const [count, setCount] = useState(0)
  const name = "salman khan"
  const name1 = "shah rukh khan"
  const salmanInfo = {
    name: "salman shah",
    age : 60 ,
    occupasion : "actor",
    country: "bangladesh"
  }
  const shahrukhInfo = {
    name: "shakrukh khan",
    age : 70 ,
    occupasion : "actor",
    country : "india"
  }
  const shakibInfo = {
    name: "shakib khan",
    age : 50 ,
    occupasion : "actor",
     country: "bangladesh"
  }
  const isStudent = true
  return (
    <>
      
      <h1>Vite + React</h1>
         
      <Home actorInfo={salmanInfo} isStudent={isStudent}/>
      <Home actorInfo={shahrukhInfo} isStudent={isStudent}/>
      <Home actorInfo={shakibInfo} isStudent={false}/>
    </>
  )
}

export default App
