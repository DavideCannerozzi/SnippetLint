import type { AxeResults } from "axe-core";
import axe from "axe-core";
import { useState } from "react";

export const useAnalyzer = (
  code: string,
  setResults: (results: AxeResults) => void,
) => {
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleAnalyze = async () => {
    try {
      setLoading(true);
      const div = document.createElement("div");
      div.innerHTML = code;
      div.style.position = "absolute";
      div.style.left = "-9999px";
      div.style.top = "0";
      document.body.appendChild(div);
      const result = await axe.run(div);
      setResults(result);
      document.body.removeChild(div);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  return { handleAnalyze, error, loading };
};
