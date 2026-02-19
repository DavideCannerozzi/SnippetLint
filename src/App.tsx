import { useState, useEffect } from "react";
import AnalyzerButton from "./components/AnalyzerButton/AnalyzerButton";
import CodeEditor from "./components/CodeEditor/CodeEditor";
import Header from "./components/Header/Header";
import { AxeResults } from "axe-core";
import ScoreDisplay from "./components/ScoreDisplay/ScoreDisplay";

function App() {
  const [code, setCode] = useState<string>(
    () => localStorage.getItem("currentSnippet") || "",
  );
  const [results, setResults] = useState<AxeResults | null>(null);

  useEffect(() => {
    const handler = setTimeout(() => {
      localStorage.setItem("currentSnippet", code);
    }, 500);
    return () => clearTimeout(handler);
  }, [code]);

  return (
    <main>
      <Header />
      <CodeEditor code={code} setCode={setCode} />
      <AnalyzerButton code={code} setResults={setResults} />
      <ScoreDisplay results={results} />
    </main>
  );
}

export default App;
