import type { ResultsProps } from "../ScoreDisplay/ScoreDisplay.types";

export default function IssuesList({ results }: ResultsProps) {
  if (!results) return null;
  if (results.violations.length === 0)
    return (
      <p className="mt-6 text-green-700 font-medium p-8">
        ✓ No accessibility issues found
      </p>
    );
  return (
    <div className="mt-12 bg-gray-100 border border-black-500 p-8">
      <h2 className="font-bold">Issues List</h2>
      <ul>
        {results.violations.map((issue) => (
          <li key={issue.id} className="mt-6 leading-loose">
            <span className="block">{issue.description}</span>
            <span className="block">{issue.help}</span>
            <a
              className="text-blue-600"
              href={issue.helpUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more
              <span className="sr-only"> about {issue.help}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
