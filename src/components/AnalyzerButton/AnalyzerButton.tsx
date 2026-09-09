import type { ButtonProps } from "./AnalyzerButton.types";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

export default function AnalyzerButton({
  code,
  handleAnalyze,
  error,
  loading,
}: ButtonProps) {
  return (
    <div>
      <PrimaryButton onClick={handleAnalyze} disabled={!code || loading}>
        {loading ? "Loading..." : "Analyze"}
      </PrimaryButton>
      {error && <p className="text-red-600">{error.message}</p>}
    </div>
  );
}
