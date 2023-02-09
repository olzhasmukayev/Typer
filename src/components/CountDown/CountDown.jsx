import "./CountDown.css";

const CountDown = ({ isCount, countDown }) => {
  return (
    <p className={isCount && countDown ? "count-down-active" : "count-down"}>
      {countDown}
    </p>
  );
};

export default CountDown;
