import type { ScoreDisplayProps } from "./ScoreDisplay.types";

const weights: Record<string, number> = {
  critical: 25,
  serious: 10,
  moderate: 5,
  minor: 1,
};

export default function ScoreDisplay({ results }: ScoreDisplayProps) {
  if (!results) return null;

  const totalPenaltyScore = results.violations.reduce((acc, viol) => {
    return acc + (weights[viol.impact ?? ""] || 0);
  }, 0);

  const score = Math.max(0, 100 - totalPenaltyScore);

  return (
    <>
      <h2>Accessibility Score</h2>
      <p>{score} / 100</p>
      <ul>
        {results.violations.map((violation) => (
          <li key={violation.id}>{violation.impact}</li>
        ))}
      </ul>
    </>
  );
}
