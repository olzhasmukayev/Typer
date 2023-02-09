import React from "react";
import { useState, useRef, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { useCounter } from "./hooks/useCounter.jsx";
import Trie from "./modules/Trie/Trie.js";
import Modal from "./components/Modal/Modal.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import CountDown from "./components/CountDown/CountDown.jsx";
import Typer from "./components/Typer/Typer.jsx";
import WordsWindow from "./components/WordsWindow/WordsWindow.jsx";
import { fillMatrix } from "./modules/WordGeneration/fillMatrix.jsx";

const App = () => {
  const [active, setActive] = useState(true);
  const [isCount, setIsCount] = useState(false);
  const [countDown, setCountDown] = useState(3);
  const inputRef = useRef(null);
  const [wordsTrie, setWordsTrie] = useState(new Trie());
  const [matrix, setMatrix] = useState(fillMatrix());
  const [words, setWords] = useState([]);
  const [languages, setLanguages] = useState("eng");

  useCounter(isCount, countDown, setCountDown);
  useEffect(() => {
    if (countDown == 0) {
      inputRef.current.focus();
    }
  }, [countDown]);

  return (
    <div className="app">
      <Header />
      <Modal
        active={active}
        setActive={setActive}
        setIsCount={setIsCount}
        setLanguages={setLanguages}
      />
      <CountDown isCount={isCount} countDown={countDown} />
      <Typer
        matrix={matrix}
        setMatrix={setMatrix}
        words={words}
        wordsTrie={wordsTrie}
        setWordsTrie={setWordsTrie}
        isCount={isCount}
        inputRef={inputRef}
      />
      <WordsWindow
        matrix={matrix}
        setMatrix={setMatrix}
        words={words}
        setWords={setWords}
        wordsTrie={wordsTrie}
        setWordsTrie={setWordsTrie}
        countDown={countDown}
        languages={languages}
      />
      <Footer />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
