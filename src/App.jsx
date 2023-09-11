import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './users';
import Friends from './Friends'
function App() {
  function handleClick(){
    alert('button clicked');
  }
const addToFive =(num)=>{
 alert (num+8);
}
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1> React</h1>
      <Friends></Friends>
      <Users></Users>
      <Counter></Counter>
      <Team></Team>

      <button onClick={handleClick}>Click me</button>
      <button onClick={()=>{addToFive(5)}} >Click 2</button>
    </>
  )
}

export default App
