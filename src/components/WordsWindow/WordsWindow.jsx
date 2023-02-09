import { useRef } from "react";
import { useFetcher } from "../../hooks/useFetcher";
import { useWordPopulation } from "../../hooks/useWordPopulation";
import "./WordsWindow.css";

const WordsWindow = ({
  matrix,
  setMatrix,
  words,
  setWords,
  wordsTrie,
  countDown,
  setWordsTrie,
  languages,
  timer
}) => {
  const windowSize = useRef(null);
  useFetcher(setWords, languages);
  useWordPopulation(words, matrix, setMatrix, wordsTrie, setWordsTrie);

  return (
    <div
      ref={windowSize}
      className={countDown == 0 && timer != 0 ? "words-window-active" : "words-window"}
    >
      {matrix.map((el, idx) => (
        <div className="cell-row" key={idx}>
          {el}
        </div>
      ))}
    </div>
  );
};

export default WordsWindow;
