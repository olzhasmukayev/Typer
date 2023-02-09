import { useEffect } from "react";
// @ts-ignore
import words from "../assets/words.json";

export const useFetcher = (setWords, languages) => {
  useEffect(() => {
    setWords(words[languages]);
    //setIsLoaded(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [languages]);
};
