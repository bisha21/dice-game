import { useState } from "react"
import TotalScore from "./TotalScore"
import NumberSelector from "./selectNumber";
import RollDice from "./RollDIce";
import styled from "styled-components";
import { Button,OutlineButton } from "../styles/Button";
import  Rules  from "./rule";

export default function GamePlay()
{
    const[score,setScore]=useState(0);
    const[selectedNumber,setSelectedNumber]=useState(1);
    const[error,setError]=useState();
    const [currentDice, setCurrentDice] = useState(1);
    const [showRules,setShowRules] = useState(2);
  function generateRandomNumber(min,max)
  {
    return Math.floor(Math.random() * 7);

  }
 
    function rollDice()
 {
    if (!selectedNumber) {
        setError("You have not selected any number");
        return;
      }
      const randomNumber = generateRandomNumber(1,7);
      setCurrentDice((prev)=>randomNumber);
      if (selectedNumber === randomNumber) {
        setScore((prev) => prev + randomNumber);
      } else {
        setScore((prev) => prev - 2);
      }
  
      setSelectedNumber(undefined);
    };
  
    const resetScore = () => {
      setScore(0);
    };
 
    return(
        <MainContainer>
            <div className="top_section">
    <TotalScore score={score}/>
    <NumberSelector
    error={error}
    setError={setError} 
    selectedNumber = {selectedNumber}
    setSelectedNumber= {setSelectedNumber}/>
    </div>
    <RollDice rollDice={rollDice} currentDice={currentDice}/>
    <div className="btns">
        <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
        <Button onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide" : "Show"} Rules
        </Button>
      </div>

      {showRules && <Rules />}
    </MainContainer>
    )
}
const MainContainer = styled.main`
  padding-top: 70px;
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btns {
    margin-top: 40px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
`;