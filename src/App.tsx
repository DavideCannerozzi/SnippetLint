import { useState, useEffect, useRef } from "react";
import AnalyzerButton from "./components/AnalyzerButton/AnalyzerButton";
import CodeEditor from "./components/CodeEditor/CodeEditor";
import Header from "./components/Header/Header";
import { AxeResults } from "axe-core";
import ScoreDisplay from "./components/ScoreDisplay/ScoreDisplay";
import IssuesList from "./components/IssuesList/IssuesList";
import PrimaryButton from "./components/PrimaryButton/PrimaryButton";
import { useTheme } from "./hooks/useTheme";
import { useAnalyzer } from "./hooks/useAnalyzer";

function App() {
  const [code, setCode] = useState<string>(() => {
    try {
      return localStorage.getItem("currentSnippet") || "";
    } catch (error) {
      console.error("Unable to read the saved snippet:", error);
      return "";
    }
  });
  const [results, setResults] = useState<AxeResults | null>(null);
  const { theme, handleTheme } = useTheme();
  const { handleAnalyze, loading, error } = useAnalyzer(code, setResults);

  const buttonsRef = useRef<HTMLButtonElement>(null);

  const handleEditorKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === "Escape") {
      event.preventDefault();
      buttonsRef.current?.focus();
    }
  };

  let analysisMessage = "";
  const issueCount = results?.violations.length;

  if (loading) {
    analysisMessage = "Analysis in progress.";
  } else if (error) {
    analysisMessage = `Analysis failed. ${error.message}`;
  } else if (results) {
    analysisMessage = `Analysis complete. ${issueCount} ${
      issueCount === 1 ? "issue" : "issues"
    } found.`;
  }

  useEffect(() => {
    const handler = setTimeout(() => {
      try {
        localStorage.setItem("currentSnippet", code);
      } catch (error) {
        console.error("Unable to save the snippet:", error);
      }
    }, 500);
    return () => clearTimeout(handler);
  }, [code]);

  return (
    <main className="bg-slate-50 dark:bg-slate-900 min-h-screen">
      <Header theme={theme} handleTheme={handleTheme} />
      <section className="container mx-auto p-4">
        <CodeEditor
          code={code}
          setCode={setCode}
          theme={theme}
          handleEditorKeyDown={handleEditorKeyDown}
        />
        <section className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <AnalyzerButton
            code={code}
            handleAnalyze={handleAnalyze}
            error={error}
            loading={loading}
            buttonsRef={buttonsRef}
          />
          <PrimaryButton
            onClick={() => {
              setCode("");
              setResults(null);

              try {
                localStorage.removeItem("currentSnippet");
              } catch (error) {
                console.error("Unable to remove the saved snippet:", error);
              }
            }}
            disabled={!code || loading}
          >
            Clear
          </PrimaryButton>
        </section>
        <p className="sr-only" role="status">
          {analysisMessage}
        </p>
        <ScoreDisplay results={results} code={code} />
        <IssuesList results={results} code={code} />
      </section>
    </main>
  );
}

export default App;
