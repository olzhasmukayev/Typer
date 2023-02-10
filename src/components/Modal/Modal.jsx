import "./Modal.css";
import GameButton from "../../ui/button/GameButton/GameButton";
import CloseButton from "../../ui/button/CloseButton/CloseButton";
import MainSelect from "../../ui/select/MainSelect/MainSelect";

const LANGS = ["eng", "ru", "kz", "it"];

const Modal = ({ active, setActive, setIsCount, setLanguages }) => {
  return (
    <div className={active ? "modal" : "modal-hide"}>
      <div className="modal-content">
        <div className="modal-nav">
          <div className="modal-title">Typer</div>
          <CloseButton
            onClick={() => {
              setActive(false);
              setIsCount(true);
            }}
          />
        </div>
        <div className="modal-text">
          Typer is the typing game that is not alike! Type a wide range of
          passages as fast and accurately as possible to rise to the top of the
          leaderboard. Unleash your typing potential with Typer - a thrilling
          and enjoyable way to enhance your speed and precision, no matter your
          current skill level. Start racing now and see how you stack up against
          the world`s best!
        </div>
        <div className="select">
          <MainSelect langs={LANGS} setLanguages={setLanguages} />
        </div>
        <div className="modal-buttons">
          <GameButton
            title={"Play!"}
            onClick={() => {
              setActive(false);
              setIsCount(true);
            }}
          />
          <GameButton
            title={"Reset"}
            onClick={() => {
              setActive(false);
              setIsCount(true);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
