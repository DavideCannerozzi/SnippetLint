import { useAnalyzer } from "../../hooks/useAnalyzer";
import type { ButtonProps } from "./AnalyzerButton.types";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

export default function AnalyzerButton({ code, setResults }: ButtonProps) {
  const { handleAnalyze, loading, error } = useAnalyzer(code, setResults);
  return (
    <div>
      <PrimaryButton onClick={handleAnalyze} disabled={!code}>
        {loading ? "Loading..." : "Analyze"}
      </PrimaryButton>
      {error && <p className="text-red-600">{error.message}</p>}
    </div>
  );
}
