import "./CloseButton.css";

const CloseButton = (props) => {
  return (
    <button className="close-btn" {...props}>
      &times;
    </button>
  );
};

export default CloseButton;
