import "./MainInput.css";

const MainInput = ({ word, onChange, inputRef }) => {
  return (
    <input
      className="main-input"
      value={word}
      placeholder="type here..."
      type="text"
      onChange={onChange}
      ref={inputRef}
    />
  );
};

export default MainInput;
