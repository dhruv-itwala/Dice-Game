import styled from "styled-components";

const RollDice = ({ currentDice, roleDice }) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`src/assets/dice_${currentDice}.png`} />
      </div>
      <p>Click on Dice to Roll</p>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 48px;

  p {
    font-size: 24px;
  }

  .dice {
    cursor: pointer;
  }
`;
