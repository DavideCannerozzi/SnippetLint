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
    const div = document.createElement("div");
    try {
      setLoading(true);
      setError(null);
      div.innerHTML = code;
      div.style.position = "absolute";
      div.style.left = "-9999px";
      div.style.top = "0";
      document.body.appendChild(div);
      const result = await axe.run(div);
      setResults(result);
    } catch (err) {
      setError(err as Error);
    } finally {
      div.remove();
      setLoading(false);
    }
  };

  return { handleAnalyze, error, loading };
};
