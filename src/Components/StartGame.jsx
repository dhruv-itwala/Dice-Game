import { Button } from "../Styled/Button";
import styled from "styled-components";
const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src="Dices.png" height="442" width="550" />
      </div>
      <br />
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Game</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  align-items: center;

  .content {
    text-align: center;
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;
