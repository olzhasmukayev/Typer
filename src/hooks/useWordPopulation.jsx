import { useEffect } from "react";

export const useWordPopulation = (
  words,
  matrix,
  setMatrix,
  wordsTrie,
  setWordsTrie,
  languages
) => {
  useEffect(() => {
    if (words.length) {
      const copy = [...matrix];
      for (let i = 0; i < 20; i++) {
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
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [words, languages]);
};
