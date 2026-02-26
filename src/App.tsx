import { useState, useEffect } from "react";
import AnalyzerButton from "./components/AnalyzerButton/AnalyzerButton";
import CodeEditor from "./components/CodeEditor/CodeEditor";
import Header from "./components/Header/Header";
import { AxeResults } from "axe-core";
import ScoreDisplay from "./components/ScoreDisplay/ScoreDisplay";
import IssuesList from "./components/IssuesList/IssuesList";
import PrimaryButton from "./components/PrimaryButton/PrimaryButton";

function App() {
  const [code, setCode] = useState<string>(
    () => localStorage.getItem("currentSnippet") || "",
  );
  const [results, setResults] = useState<AxeResults | null>(null);
  const [theme, setTheme] = useState<boolean>(false);

  useEffect(() => {
    const handler = setTimeout(() => {
      localStorage.setItem("currentSnippet", code);
    }, 500);
    return () => clearTimeout(handler);
  }, [code]);

  return (
    <main className="bg-slate-50 dark:bg-slate-900 min-h-screen">
      <Header theme={theme} setTheme={setTheme} />
      <section className="container mx-auto p-4">
        <CodeEditor code={code} setCode={setCode} theme={theme} />
        <section className="flex items-center gap-4">
          <AnalyzerButton code={code} setResults={setResults} />
          <PrimaryButton
            onClick={() => {
              setCode("");
              setResults(null);
              localStorage.removeItem("currentSnippet");
            }}
            disabled={!code}
          >
            Clear
          </PrimaryButton>
        </section>
        <ScoreDisplay results={results} />
        <IssuesList results={results} />
      </section>
    </main>
  );
}

export default App;
