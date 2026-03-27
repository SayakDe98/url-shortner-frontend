import { useState } from "react";
import ShortenerForm from "./components/ShortenerForm";
import ResultCard from "./components/ResultCard";
import type { ShortenResponse } from "./types";
import "./styles.css";

function App() {
  const [result, setResult] = useState<ShortenResponse | null>(null);

  return (
    <div className="app">
      <div className="hero">
        <h1 className="title">Shorten your links</h1>
        <p className="subtitle">
          Simple, fast and powerful URL shortener
        </p>

        <ShortenerForm setResult={setResult} />

        {result && <ResultCard result={result} />}
      </div>
    </div>
  );
}

export default App;