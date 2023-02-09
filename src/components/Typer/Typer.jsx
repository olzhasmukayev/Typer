import { useState, useEffect } from "react";
import MainInput from "../../ui/input/MainInput/MainInput";
import "./Typer.css";

const Typer = ({
  words,
  wordsTrie,
  setWordsTrie,
  isCount,
  inputRef,
  matrix,
  setMatrix,
}) => {
  const [word, setWord] = useState("");

  useEffect(() => {
    const wordIds = wordsTrie.startsWith(word);
    if (wordIds) {
      if (typeof wordIds === "string") {
        const copy = matrix.map((e) => e.slice());
        for (let r = 0; r < 10; r++) {
          for (let c = 0; c < 10; c++) {
            if (copy[r][c].props["children"] !== undefined) {
              if (copy[r][c].props["children"] === wordIds + " ")
                copy[r][c] = <div key={r * 10 + c} className="cell"></div>;
              else if (copy[r][c].props["children"].length == 2) {
                let wordString =
                  copy[r][c].props["children"][0].props["children"] +
                  copy[r][c].props["children"][1];
                if (wordString === wordIds) {
                  copy[r][c] = <div key={r * 10 + c} className="cell"></div>;
                }
              }
            }
          }
        }
        if (Math.random() > 0.001) {
          let row = Math.floor(Math.random() * 10);
          let col = Math.floor(Math.random() * 10);
          let pos = Math.floor(Math.random() * words.length);
          copy[row][col] = (
            <div key={row * 10 + col} className="cell">
              {words[pos] + " "}
            </div>
          );
          wordsTrie.insert(words[pos], pos);
          setWordsTrie(wordsTrie);
        }
        setMatrix(copy);
        setWord("");
      } else {
        const copy = matrix.map((e) => e.slice());
        for (let id of wordIds) {
          for (let row = 0; row < 10; row++) {
            for (let col = 0; col < 10; col++) {
              if (copy[row][col].props["children"] !== undefined) {
                if (copy[row][col].props["children"] === words[id] + " ") {
                  copy[row][col] = (
                    <div key={row * 10 + col} className="cell">
                      <span className="selected">{word}</span>
                      {words[id].slice(word.length)}
                    </div>
                  );
                } else if (copy[row][col].props["children"].length == 2) {
                  let wordString =
                    copy[row][col].props["children"][0].props["children"] +
                    copy[row][col].props["children"][1];
                  if (wordString == words[id]) {
                    copy[row][col] = (
                      <div key={row * 10 + col} className="cell">
                        <span className="selected">{word}</span>
                        {words[id].slice(word.length)}
                      </div>
                    );
                  }
                }
              }
            }
          }
        }
        setMatrix(copy);
      }
    } else {
      // redraw
      // make not colored
      const copy = matrix.map((e) => e.slice());
      for (let row = 0; row < 10; row++) {
        for (let col = 0; col < 10; col++) {
          if (copy[row][col].props["children"] !== undefined) {
            if (Array.isArray(copy[row][col].props["children"])) {
              let wordString =
                copy[row][col].props["children"][0].props["children"] +
                copy[row][col].props["children"][1];
              copy[row][col] = (
                <div key={row * 10 + col} className="cell">
                  {wordString + " "}
                </div>
              );
            }
          }
        }
      }
      setMatrix(copy);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [word]);

  return (
    <div className={isCount ? "typer-active" : "typer"}>
      <MainInput
        word={word}
        onChange={(e) => {
          setWord(e.target.value.trim());
        }}
        inputRef={inputRef}
      />
    </div>
  );
};

export default Typer;
