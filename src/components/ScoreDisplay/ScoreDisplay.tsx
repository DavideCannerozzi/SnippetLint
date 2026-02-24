import type { ResultsProps } from "./ScoreDisplay.types";

const weights: Record<string, number> = {
  critical: 25,
  serious: 10,
  moderate: 5,
  minor: 1,
};

const bulletColor: Record<string, string> = {
  critical: "bg-red-500",
  serious: "bg-orange-500",
  moderate: "bg-yellow-500",
  minor: "bg-blue-500",
};

export default function ScoreDisplay({ results }: ResultsProps) {
  if (!results) return null;

  const totalPenaltyScore = results.violations.reduce((acc, viol) => {
    return acc + (weights[viol.impact ?? ""] || 0);
  }, 0);

  const score = Math.max(0, 100 - totalPenaltyScore);

  return (
    <div className="mt-12 bg-gray-100 border border-black-500 p-8">
      <h2 className="font-bold">Accessibility Score</h2>
      <p className="mt-6">{score} / 100</p>
      <ul className="flex gap-8 mt-4">
        {results.violations.map((violation) => (
          <li key={violation.id}>
            <span
              className={`w-3 h-3 mr-2 ${bulletColor[violation.impact ?? ""] ?? "bg-gray-500"} rounded-full inline-block`}
            ></span>
            {violation.impact}
          </li>
        ))}
      </ul>
    </div>
  );
}
