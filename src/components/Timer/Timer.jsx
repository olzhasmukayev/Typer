import { useCounter } from "../../hooks/useCounter";
import "./Timer.css"

const Timer = ({countDown, timer, setTimer}) => {
  useCounter(countDown == 0, timer, setTimer)
  return (
    <div className={countDown == 0 ? "timer-active" : "timer"}>{timer}</div>
  )
}

export default Timer;