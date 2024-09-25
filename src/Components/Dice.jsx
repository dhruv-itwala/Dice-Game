const Dice = ({ currentDice, isRolling }) => {
  // The dice number determines which video to play
  const diceVideo = `./11.mp4`;
  console.log(currentDice);

  return (
    <video
      src={diceVideo}
      height={100}
      width={100}
      autoPlay
      muted
      loop={isRolling} // Only loop when it's rolling
      onEnded={() => !isRolling && this.pause()} // Pause when the video ends
    />
  );
};

export default Dice;
