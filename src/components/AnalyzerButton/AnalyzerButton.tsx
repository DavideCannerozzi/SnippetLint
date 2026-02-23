import axe from "axe-core";
import type { ButtonProps } from "./AnalyzerButton.types";
import { useState } from "react";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

export default function AnalyzerButton({ code, setResults }: ButtonProps) {
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
      console.log(result);
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
      <PrimaryButton onClick={handleAnalyze} disabled={!code}>
        {loading ? "Loading..." : "Analyze"}
      </PrimaryButton>
      {error && <p className="text-red-600">{error.message}</p>}
    </div>
  );
}
