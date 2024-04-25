import styled from "styled-components";
import { Button } from "../styles/Button";
export const StartGame = ({toggle}) => {
  return (
    <Container>
      <img src="/dice/dices.png" alt="dices" />
      <div>
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play now</Button>
      </div>
    </Container>
  );
};
const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center; /* Corrected typo here */
`;


// .content {
//   h1 {
//     font-size: 96px;
//     white-space: nowrap;
//   }
// }
// `;