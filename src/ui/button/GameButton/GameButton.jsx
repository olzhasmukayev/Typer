import "./GameButton.css";

const GameButton = ({ title, ...props }) => {
  return (
    <button className="game-btn" {...props}>
      {title}
    </button>
  );
};

export default GameButton;
