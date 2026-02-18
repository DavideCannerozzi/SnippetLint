import axe from "axe-core";
import type { ButtonProps } from "./AnalyzerButton.types";
import { useState } from "react";

export default function AnalyzerButton({ code, setResults }: ButtonProps) {
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const handleAnalyze = async () => {
    try {
      setLoading(true);
      const div = document.createElement("div");
      div.innerHTML = code;
      div.style.display = "none";
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

  return (
    <div>
      <button onClick={handleAnalyze}>
        {loading ? "Loading..." : "Analyze"}
      </button>
      {error && <p className="text-red-600">{error.message}</p>}
    </div>
  );
}
