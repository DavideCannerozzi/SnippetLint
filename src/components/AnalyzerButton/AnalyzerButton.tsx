import type { ButtonProps } from "./AnalyzerButton.types";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

export default function AnalyzerButton({
  code,
  handleAnalyze,
  error,
  loading,
  buttonsRef,
}: ButtonProps) {
  return (
    <div>
      <PrimaryButton
        onClick={handleAnalyze}
        disabled={!code || loading}
        buttonsRef={buttonsRef}
      >
        {loading ? "Loading..." : "Analyze"}
      </PrimaryButton>
      {error && <p className="text-red-600">{error.message}</p>}
    </div>
  );
}
