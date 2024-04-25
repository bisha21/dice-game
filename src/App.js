import styled from 'styled-components'
import { StartGame } from './components/startGame'
import GamePlay from './components/GamePlay'
import { useState } from 'react'
const Button= styled.button`
background-color:black;
color:white;
padding:10px 20px;
`

function App() {
  const[isGameStarted,setIsGameStarted]=useState(false);
  function handleToggle()
  {
    setIsGameStarted(pre=>!pre);
  }
  return (
    <>
    {isGameStarted?<GamePlay/>:<StartGame toggle={handleToggle}/>}
    </>
  )
}

export default App