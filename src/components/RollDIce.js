import styled from "styled-components";
export default function RollDice({rollDice,currentDice})
{
    return(
        <DiceContainer>
            <div
            className="dice" onClick={rollDice}>
            <img src={`/dice/dice_${currentDice}.png`} alt="dice 1" />
            </div>
            <p>Click on to roll a dice</p>
        </DiceContainer>
    )
}

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .dice {
    cursor: pointer;
  }

  p {
    font-size: 24px;
  }
`;